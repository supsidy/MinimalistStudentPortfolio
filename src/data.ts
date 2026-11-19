// Single source of truth for Gallery and Projects.
import { projectDetails } from './projectDetails'
export type ProjectType = 'E' | 'M' | 'S' | 'A'
export type TypeFilter = 'All' | ProjectType
export type Subject = 'LITE' | 'ITC'
export type SubjectFilter = 'All' | Subject

export const PROJECT_TYPES: ProjectType[] = ['E', 'M', 'S', 'A']

/** label = short keyword shown on cards, name = full subject title */
export const SUBJECTS: { id: Subject; label: string; name: string }[] = [
  { id: 'LITE', label: 'GEE-LITE', name: 'Living in the IT Era' },
  { id: 'ITC', label: 'ITC', name: 'Introduction to Computing' },
]
export const subjectLabel = (s: Subject) => SUBJECTS.find((x) => x.id === s)!.label

export interface Project {
  id: string // 'lite-e1', 'itc-s4' ... also used as the anchor id
  code: string // 'E1'
  subject: Subject
  type: ProjectType // exactly one type
  title: string
  period: string
  summary: string // short text used by Gallery cards
  details: string // write-ups live in projectDetails.ts
  challenges: string[]
  outcomes: string[]
  image: { src?: string; alt: string } // leave src empty to show the placeholder
  files: { href: string; label: string }[] // PDF, Drive or other links
}

type Seed = [ProjectType, number, string, string, string] // [type, number, title, due, summary]

// Living in the IT Era (GEE-LITE). Order here is the display order.
const liteSeed: Seed[] = [
  ['E', 1, 'Class Expectation', 'Due Aug 5', 'A 300–400 word reflection on my expectations for the subject.'],
  ['E', 2, 'A Day Made of Glass', 'Due Aug 10', 'A written response to the "A Day Made of Glass" material.'],
  ['E', 3, 'Internet Terminology Worksheet', 'Due Aug 17', 'A worksheet defining key internet terms.'],
  ['E', 4, 'CV (Curriculum Vitae)', 'Due Aug 24', 'A professional CV built from a Google Docs template.'],
  ['E', 5, 'Google Workspace with Gemini: Gmail, Calendar, Drive', 'Due Sep 2', 'Completion badge and screenshot for the Gemini learning path.'],
  ['E', 6, 'Google Workspace with Gemini: Slides, Sheets, Meet', 'Due Sep 7', 'Completion badge and screenshot for the Gemini learning path.'],
  ['E', 7, 'Google Workspace with Gemini: Chat, Drive, Vids', 'Due Sep 8', 'Completion badge and screenshot for the Gemini learning path.'],
  ['M', 1, 'Midterm Project: Computer Crimes', 'Due Sep 22', 'A slide presentation and a video on a chosen computer crime.'],
  ['S', 0, 'Coffee Shop Promo Poster', 'Due Oct 19', 'A promotional poster for a coffee shop.'],
  ['S', 1, 'Resume in Canva', 'Due Oct 12', 'My CV redesigned in Canva.'],
  ['S', 2, 'Poster for SCIS', 'Due Oct 17', 'A recruitment poster for the School of Computer and Information Sciences.'],
  ['S', 3, 'Flood Safety Infographic', 'Due Oct 24', 'An infographic on what to do before, during and after flooding.'],
  ['S', 4, 'Congratulatory Streamer', 'Due Oct 26', 'A horizontal graduation streamer designed in Canva.'],
  ['S', 5, 'Calling Card in Canva', 'Due Nov 3', 'A personal calling card designed in Canva.'],
  ['S', 6, 'Personalized Logo in Canva', 'Due Nov 4', 'A personal logo digitised from my sketch.'],
]

// Introduction to Computing (ITC).
const itcSeed: Seed[] = [
  ['E', 1, 'Hour of Code: Certificate', 'Due Aug 1', 'Certificate for completing the Hour of AI on Code.org.'],
  ['E', 2, 'Patient Information Data', 'Due Aug 10', 'A 500-patient Bicol Region dataset with summary reports and charts.'],
  ['E', 3, 'Car Sales', 'Due Aug 18', 'A 150-unit car inventory across 15 brands with 2026 sales totals.'],
  ['E', 4, 'Car Deals V2', 'Due Aug 29', 'The car inventory extended with photos, colours and monthly sales monitoring.'],
  ['E', 5, 'Evaluating Expressions / Conditions', 'Due Sep 5', 'Step-by-step solutions to arithmetic and logical expressions.'],
  ['A', 5, 'Midterm Project: Evaluating Expressions / Conditions', 'Due Sep 22', 'A recorded discussion solving four expression and condition problems.'],
  ['S', 1, 'Five Star', 'Due Oct 12', 'A p5.js sketch drawing five coloured stars with a label.'],
  ['S', 2, 'Flag', 'Due Oct 17', 'A p5.js drawing of the flag of the United Kingdom with a country description.'],
  ['S', 3, 'Snek', 'Due Oct 20', 'A restyled snake game in p5.js with new colours and scoring.'],
  ['S', 4, 'Game of Your Choice: Hill Dash', 'Due Nov 4', 'A hill-climb driving game in p5.js with levels, upgrades and a leaderboard.'],
]

// Media per subject: drop a file named after the activity code into src/assets/projects/<lite|itc>/
// (e.g. lite/e1.png, itc/s4.pdf). An image replaces the placeholder; a PDF adds a "View PDF" link.
const byCode = (found: Record<string, string>): Record<string, string> =>
  Object.fromEntries(Object.entries(found).map(([path, url]) => [path.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase(), url]))
// (Vite requires the glob options to be written inline, so they are repeated below.)
const media: Record<Subject, { images: Record<string, string>; pdfs: Record<string, string> }> = {
  LITE: {
    images: byCode(import.meta.glob<string>('./assets/projects/lite/*.{png,jpg,jpeg,webp,gif,avif,svg,PNG,JPG,JPEG}', { eager: true, query: '?url', import: 'default' })),
    pdfs: byCode(import.meta.glob<string>('./assets/projects/lite/*.{pdf,PDF}', { eager: true, query: '?url', import: 'default' })),
  },
  ITC: {
    images: byCode(import.meta.glob<string>('./assets/projects/itc/*.{png,jpg,jpeg,webp,gif,avif,svg,PNG,JPG,JPEG}', { eager: true, query: '?url', import: 'default' })),
    pdfs: byCode(import.meta.glob<string>('./assets/projects/itc/*.{pdf,PDF}', { eager: true, query: '?url', import: 'default' })),
  },
}

// External links per project id, shown before any PDF link.
const links: Record<string, Project['files']> = {
  'lite-m1': [{ href: 'https://drive.google.com/file/d/1p0Ph2ULERNXypOVT0YSRxj7JxRBpgJ5i/view?usp=sharing', label: 'View on Google Drive' }],
  'itc-a5': [{ href: 'https://drive.google.com/file/d/1yC6oRb9CD8JR4YtZ9DMyIXDrH2NXDm1F/view?usp=sharing', label: 'View on Google Drive' }],
  'itc-s4': [{ href: 'https://editor.p5js.org/jumel.encinas/full/kqRy3SqPY', label: 'Play the game' }],
}

const make = (subject: Subject) => ([type, n, title, period, summary]: Seed): Project => {
  const code = `${type}${n}`
  const key = code.toLowerCase()
  const id = `${subject.toLowerCase()}-${key}`
  const { images, pdfs } = media[subject]
  return {
    id,
    code,
    subject,
    type,
    title,
    period,
    summary,
    details: projectDetails[id]?.details ?? summary,
    challenges: projectDetails[id]?.challenges ?? [],
    outcomes: projectDetails[id]?.outcomes ?? [],
    image: { src: images[key], alt: `Screenshot or photo for ${title}. Replace with a description of your image.` },
    files: [...(links[id] ?? []), ...(pdfs[key] ? [{ href: pdfs[key], label: 'View PDF' }] : [])],
  }
}

export const projects: Project[] = [...liteSeed.map(make('LITE')), ...itcSeed.map(make('ITC'))]

/** Projects matching a subject and type filter (shared by Gallery and Projects). */
export const filterProjects = (subject: SubjectFilter, type: TypeFilter) =>
  projects.filter((p) => (subject === 'All' || p.subject === subject) && (type === 'All' || p.type === type))
