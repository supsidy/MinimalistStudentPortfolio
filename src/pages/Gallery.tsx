import { useState } from 'react'
import { filterProjects, subjectLabel, type SubjectFilter, type TypeFilter } from '../data'
import { ProjectFilter } from '../components/ProjectFilter'
import { Container, Icon, PageHeader, Placeholder, Section, ZoomImage } from '../components/ui'

// Photos for "University activities" and "Life outside school": save as src/assets/life/<key>.png (or .jpg/.webp), e.g. toys.png.
const lifePhotos: Record<string, string> = Object.fromEntries(
  Object.entries(import.meta.glob<string>('../assets/life/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}', { eager: true, query: '?url', import: 'default' }))
    .map(([path, url]) => [path.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase(), url]),
)

// title = card heading, desc = text shown under it, alt = hidden photo description for screen readers
const activities = [
  { key: 'bidyo', title: 'UNC Bidyo', desc: 'Short description of the activity, the date and your involvement.', alt: 'UNC Bidyo. Replace with a photo and describe what is shown.' },
  { key: 'scis', title: 'UNC School of Computer and Information Sciences Council', desc: 'Short description of the activity, the date and your involvement.', alt: 'UNC School of Computer and Information Sciences Council. Replace with a photo and describe what is shown.' },
  { key: 'lab', title: 'Being Workaholic in the Laboratory', desc: 'Short description of the activity, the date and your involvement.', alt: 'Being Workaholic in the Laboratory. Replace with a photo and describe what is shown.' },
]

const outside = [
  { key: 'toys', title: 'Toy Collecting', desc: 'I collect various toylines across Tokusatsu. Hopefully, I could start collecting on various pop culture icons like my childhood heroes, MCR!', alt: 'A collection of colourful transformation belt toys and collectible keys laid out on a patterned tablecloth.' },
  { key: 'online', title: 'Chronically Online', desc: 'When I am not working, I am doomscrolling. I dont know what kind of picture I can put to describe this so here is Charlie Kirk.', alt: 'Chronically Online. WE ARE CHARLIE KIRKK.' },
  { key: 'games', title: 'I LOVE GAMES !!!', desc: 'I play various games across all platforms. Whether it being in a computer, or a crusty old PSP. Right now, I am playing Tekken 8 religiously.', alt: 'I LOVE GAMES. Its just jin kazama' },
]

export default function Gallery() {
  const [subject, setSubject] = useState<SubjectFilter>('All')
  const [type, setType] = useState<TypeFilter>('All')
  const items = filterProjects(subject, type)
  return (
    <>
      <PageHeader title="Gallery" intro="A selection of project thumbnails. Hover or focus a card to read the summary." />
      <Container className="pt-12">
        <ProjectFilter subject={subject} onSubject={setSubject} type={type} onType={setType} />
        <p className="mt-4 text-sm text-muted" aria-live="polite">Showing {items.length} {subject === 'All' ? '' : `${subjectLabel(subject)} `}projects</p>
        <ul className="mt-6 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#/projects?subject=${i.subject}&type=${i.type}&p=${i.id}`} className="group block">
                <div className="relative">
                  {i.image.src
                    ? <img src={i.image.src} alt={i.image.alt} className="aspect-[4/3] w-full border border-line object-cover" />
                    : <Placeholder label={`Thumbnail ${i.code}`} alt={i.image.alt} className="aspect-[4/3] w-full" />}
                  <div className="absolute inset-0 flex flex-col justify-end bg-accent p-6 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <p className="font-medium">{i.summary}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">View project <Icon name="arrow" size={16} /></span>
                  </div>
                </div>
                <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent">
                  <span className="rounded border border-accent px-2 py-0.5 text-xs tracking-wider">{subjectLabel(i.subject)}</span>
                  {i.code}
                </p>
                <h2 className="text-lg font-semibold group-hover:underline underline-offset-4">{i.title}</h2>
                <p className="mt-1 text-muted">{i.summary}</p>
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <Section id="activities" eyebrow="Campus life" title="University activities" tint>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map(({ key, title: t, desc, alt }, n) => (
            <li key={key}>
              {lifePhotos[key]
                ? <ZoomImage src={lifePhotos[key]} alt={alt} className="aspect-[3/2] w-full border border-line object-cover" />
                : <Placeholder label={`Activity photo ${n + 1}`} alt={alt} className="aspect-[3/2] w-full bg-surface" />}
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-1 text-muted">{desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="outside" eyebrow="Beyond the classroom" title="Life outside school">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {outside.map(({ key, title: t, desc, alt }, n) => (
            <li key={key}>
              {lifePhotos[key]
                ? <ZoomImage src={lifePhotos[key]} alt={alt} className="aspect-[3/2] w-full border border-line object-cover" />
                : <Placeholder label={`Personal photo ${n + 1}`} alt={alt} className="aspect-[3/2] w-full" />}
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-1 text-muted">{desc}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
