import { useEffect, useState } from 'react'
import { PROJECT_TYPES, projects, type TypeFilter } from '../data'
import { Container, PageHeader, Button } from '../components/ui'
import { ProjectFilter } from '../components/ProjectFilter'
import { ProjectSection } from '../components/ProjectSection'

// Hash looks like "#/projects?type=E&p=e3"
const params = () => new URLSearchParams(window.location.hash.split('?')[1] ?? '')
const readType = (): TypeFilter => {
  const t = params().get('type')
  return PROJECT_TYPES.includes(t as never) ? (t as TypeFilter) : 'All'
}

export default function Projects() {
  const [type, setType] = useState<TypeFilter>(readType)

  const jump = () => {
    const id = params().get('p')
    if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView(), 0)
  }
  useEffect(() => {
    jump()
    const on = () => { setType(readType()); jump() }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  const choose = (t: TypeFilter) => {
    setType(t)
    history.replaceState(null, '', t === 'All' ? '#/projects' : `#/projects?type=${t}`)
  }
  const list = projects.filter((p) => type === 'All' || p.type === type)

  return (
    <>
      <PageHeader title="Projects" intro="Past activities and projects. Each entry covers the details, the challenges faced and the outcomes achieved." />
      <div className="border-b border-line bg-paper md:sticky md:top-16 md:z-30">
        <Container className="py-4">
          <ProjectFilter value={type} onChange={choose} />
          <nav aria-label="Jump to project" className="mt-4">
            <ul className="flex gap-2 overflow-x-auto pb-1">
              {list.map((p) => (
                <li key={p.id}><a href={`#${p.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(p.id)?.scrollIntoView() }} className="flex min-h-10 min-w-12 items-center justify-center rounded-md border border-line px-3 text-sm font-semibold hover:border-accent hover:text-accent">{p.code}</a></li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
      <Container>
        <p className="pt-8 text-sm text-muted" role="status">
          {type === 'All' ? `Showing all ${list.length} projects` : `Showing ${list.length} ${list.length === 1 ? 'project' : 'projects'} of type ${type}`}
        </p>
        {list.length ? (
          <div className="divide-y divide-line">{list.map((p) => <ProjectSection key={p.id} p={p} />)}</div>
        ) : (
          <div className="py-20"><p className="mb-6 text-lg">No projects of this type yet.</p><Button onClick={() => choose('All')}>Show all</Button></div>
        )}
      </Container>
      <div className="h-16" />
    </>
  )
}
