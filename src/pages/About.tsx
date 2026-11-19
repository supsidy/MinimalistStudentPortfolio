import { Button, Container, Icon, PageHeader, Section } from '../components/ui'
import resume from '../assets/resume.pdf?url'

const timeline = [
  ['2026 – Present', 'Bachelor of Science in Information Technology (BSIT)', 'University of Nueva Caceres'],
  ['2024 – 2026', 'TVL-ICT, Senior High School', 'Camarines Sur National High School', 'With High Honors, Leadership Awardee, Research Awardee, Work Immersion Awardee'],
  ['2020 – 2024', 'Science, Technology, and Engineering (STE), Junior High School', 'Camarines Sur National High School', 'With Honors'],
  ['2014 – 2020', 'Basic Education, Elementary', 'University of Nueva Caceres', 'With Honors, Academic Excellence Awardee, Loyalty Awardee'],
]
const hobbies = [['camera', 'Photography'], ['gamepad', 'Gaming'], ['film', 'Movies'], ['music', 'Music'], ['toy', 'Toy Collecting'], ['helmet', 'Tokusatsu']]

export default function About() {
  return (
    <>
      <PageHeader title="About" intro="An aspiring web developer with so many tricks on my sleeve. These tricks are yet to be unsealed. I believe my full potiential is limitless." />
      <Section id="timeline" eyebrow="Background" title="Education and experience">
        <ol className="max-w-3xl border-l-2 border-line">
          {timeline.map(([date, role, org, text]) => (
            <li key={role} className="relative pb-10 pl-8 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-accent bg-paper" />
              <p className="text-sm font-semibold text-accent">{date}</p>
              <h3 className="mt-1 text-xl font-semibold">{role}</h3>
              <p className="font-medium text-muted">{org}</p>
              <p className="mt-2 text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="interests" eyebrow="Beyond study" title="Interests and hobbies" tint>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {hobbies.map(([i, l]) => (
            <li key={l} className="flex flex-col items-center gap-3 border border-line bg-surface px-4 py-8 text-center">
              <span className="text-accent"><Icon name={i} size={30} /></span>
              <span className="font-medium">{l}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let's connect">
        <Container className="grid gap-10 !px-0 md:grid-cols-2">
          <address className="not-italic">
            <ul className="space-y-4">
              <li><a href="mailto:kurtxean.pasiona@unc.edu.ph" className="inline-flex min-h-12 items-center gap-3 hover:text-accent hover:underline underline-offset-4"><Icon name="mail" /> kurtxean.pasiona@unc.edu.ph</a></li>
              <li><a href="tel:+639764935064" className="inline-flex min-h-12 items-center gap-3 hover:text-accent hover:underline underline-offset-4"><Icon name="phone" /> 0976 493 5064</a></li>
              <li><a href="#" className="inline-flex min-h-12 items-center gap-3 hover:text-accent hover:underline underline-offset-4"><Icon name="linkedin" /> linkedin.com/in/your-name</a></li>
              <li><a href="https://github.com/supsidy" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-3 hover:text-accent hover:underline underline-offset-4"><Icon name="github" /> github.com/supsidy</a></li>
            </ul>
          </address>
          <div className="border border-line bg-surface p-8">
            <h3 className="text-xl font-semibold">Resume</h3>
            <p className="mb-6 mt-2 text-muted">Download a one-page PDF summary of my education, experience and skills.</p>
            <Button href={resume} download="Kurt-Pasiona-Resume.pdf"><Icon name="download" size={20} /> Download resume (PDF)</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
