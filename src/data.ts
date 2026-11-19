// Single source of truth for Gallery and Projects. Replace the seed below with real content.
export type ProjectType = 'E' | 'M' | 'S'
export type TypeFilter = 'All' | ProjectType

export const PROJECT_TYPES: ProjectType[] = ['E', 'M', 'S']

export interface Project {
  id: string // 'e1' ... 's6', also used as the anchor id
  code: string // 'E1'
  type: ProjectType // exactly one type
  title: string
  period: string
  role: string
  summary: string // short text used by Gallery cards
  details: string
  tools: string[]
  challenges: string[]
  outcomes: string[]
  image: { src?: string; alt: string } // leave src empty to show the placeholder
  file?: { href: string; label: string } // optional download or video link
}

// [type, number, title, due, summary]
const seed: [ProjectType, number, string, string, string][] = [
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

const make = ([type, n, title, period, summary]: (typeof seed)[number]): Project => {
  const code = `${type}${n}`
  return {
    id: code.toLowerCase(),
    code,
    type,
    title,
    period,
    role: 'Your role',
    summary,
    details: 'Two or three sentences describing what the project was, who it was for and the methods you used. Replace this text with your own.',
    tools: ['Tool one', 'Tool two'],
    challenges: ['Describe the main obstacle you faced.', 'Explain how you approached or solved it.'],
    outcomes: ['A measurable result, grade or recognition.', 'What you learned or would do differently.'],
    image: { alt: `Screenshot or photo for ${title}. Replace with a description of your image.` },
  }
}

// Grouped E, M, S (S starts at S0). Order here is the display order.
export const projects: Project[] = seed.map(make)
