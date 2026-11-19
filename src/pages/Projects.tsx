import { useEffect, useState } from 'react'
import { PROJECT_TYPES, SUBJECTS, filterProjects, subjectLabel, type SubjectFilter, type TypeFilter } from '../data'
import { Container, PageHeader, Button } from '../components/ui'
import { ProjectFilter } from '../components/ProjectFilter'
import { ProjectSection } from '../components/ProjectSection'

// Hash looks like "#/projects?subject=ITC&type=E&p=itc-e3"
const params = () => new URLSearchParams(window.location.hash.split('?')[1] ?? '')
const readType = (): TypeFilter => {
  const t = params().get('type')
  return PROJECT_TYPES.includes(t as never) ? (t as TypeFilter) : 'All'
}
const readSubject = (): SubjectFilter => {
  const s = params().get('subject')
  return SUBJECTS.some((x) => x.id === s) ? (s as SubjectFilter) : 'All'
}
// Old links used bare ids like "e3"; those were GEE-LITE projects.
const readAnchor = () => {
  const id = params().get('p')
  return id && !id.includes('-') ? `lite-${id}` : id
}

export default function Projects() {
  const [type, setType] = useState<TypeFilter>(readType)
  const [subject, setSubject] = useState<SubjectFilter>(readSubject)

  const jump = () => {
    const id = readAnchor()
    if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView(), 0)
  }
  useEffect(() => {
    jump()
    const on = () => { setType(readType()); setSubject(readSubject()); jump() }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  const update = (s: SubjectFilter, t: TypeFilter) => {
    setSubject(s); setType(t)
    const q = new URLSearchParams()
    if (s !== 'All') q.set('subject', s)
    if (t !== 'All') q.set('type', t)
    const qs = q.toString()
    history.replaceState(null, '', qs ? `#/projects?${qs}` : '#/projects')
  }
  const list = filterProjects(subject, type)
  const what = `${subject === 'All' ? '' : `${subjectLabel(subject)} `}${list.length === 1 ? 'project' : 'projects'}${type === 'All' ? '' : ` of type ${type}`}`

  return (
    <>
      <PageHeader title="Projects" intro="Past activities and projects. Each entry covers the details, the challenges faced and the outcomes achieved." />
      <div className="border-b border-line bg-paper md:sticky md:top-16 md:z-30">
        <Container className="py-4">
          <ProjectFilter subject={subject} onSubject={(s) => update(s, type)} type={type} onType={(t) => update(subject, t)} />
          <nav aria-label="Jump to project" className="mt-4">
            <ul className="flex gap-2 overflow-x-auto pb-1">
              {list.map((p) => (
                <li key={p.id}><a href={`#${p.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(p.id)?.scrollIntoView() }} className="flex min-h-10 min-w-12 items-center justify-center rounded-md border border-line px-3 text-sm font-semibold hover:border-accent hover:text-accent">{subject === 'All' ? `${subjectLabel(p.subject)} ${p.code}` : p.code}</a></li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
      <Container>
        <p className="pt-8 text-sm text-muted" role="status">
          Showing {list.length} {what}
        </p>
        {list.length ? (
          <div className="divide-y divide-line">{list.map((p) => <ProjectSection key={p.id} p={p} />)}</div>
        ) : (
          <div className="py-20"><p className="mb-6 text-lg">No projects match this filter yet.</p><Button onClick={() => update('All', 'All')}>Show all</Button></div>
        )}
      </Container>
      <div className="h-16" />
    </>
  )
}
