import { useState } from 'react'
import { projects, type TypeFilter } from '../data'
import { ProjectFilter } from '../components/ProjectFilter'
import { Container, Icon, PageHeader, Placeholder, Section } from '../components/ui'

export default function Gallery() {
  const [f, setF] = useState<TypeFilter>('All')
  const items = projects.filter((i) => f === 'All' || i.type === f)
  return (
    <>
      <PageHeader title="Gallery" intro="A selection of project thumbnails. Hover or focus a card to read the summary." />
      <Container className="pt-12">
        <ProjectFilter value={f} onChange={setF} />
        <p className="mt-4 text-sm text-muted" aria-live="polite">Showing {items.length} projects</p>
        <ul className="mt-6 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <li key={i.code}>
              <a href={`#/projects?type=${i.type}&p=${i.id}`} className="group block">
                <div className="relative">
                  <Placeholder label={`Thumbnail ${i.code}`} alt={i.image.alt} className="aspect-[4/3] w-full" />
                  <div className="absolute inset-0 flex flex-col justify-end bg-accent p-6 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <p className="font-medium">{i.summary}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">View project <Icon name="arrow" size={16} /></span>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-accent">{i.code}</p>
                <h2 className="text-lg font-semibold group-hover:underline underline-offset-4">{i.title}</h2>
                <p className="mt-1 text-muted">{i.summary}</p>
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <Section id="video" eyebrow="Media" title="Video introduction">
        <div className="grid items-center gap-10 md:grid-cols-[3fr_2fr]">
          <div role="img" aria-label="Video placeholder. Replace with an embedded video." className="flex aspect-video items-center justify-center border border-line bg-ink">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-ink"><Icon name="play" size={28} /></span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Video title</h3>
            <p className="mt-3 text-muted">Describe the video in two sentences. Add captions or a transcript link so everyone can access it.</p>
          </div>
        </div>
      </Section>

      <Section id="activities" eyebrow="Campus life" title="University activities" tint>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {['Student society event', 'Hackathon weekend', 'Volunteer day'].map((t, n) => (
            <li key={t}>
              <Placeholder label={`Activity photo ${n + 1}`} alt={`${t}. Replace with a photo and describe what is shown.`} className="aspect-[3/2] w-full bg-surface" />
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-1 text-muted">Short description of the activity, the date and your involvement.</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
