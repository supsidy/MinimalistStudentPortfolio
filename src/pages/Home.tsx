import { Button, Container, Icon, Placeholder, Section, Tag } from '../components/ui'

const skills = [
  { icon: 'code', title: 'Skill Area One', text: 'A short line about what you can do and the tools you use.' },
  { icon: 'pen', title: 'Skill Area Two', text: 'A short line about what you can do and the tools you use.' },
  { icon: 'chart', title: 'Skill Area Three', text: 'A short line about what you can do and the tools you use.' },
  { icon: 'users', title: 'Skill Area Four', text: 'A short line about what you can do and the tools you use.' },
]
const tags = ['Research', 'Teamwork', 'Presentation', 'Problem solving', 'Writing', 'Data analysis', 'Time management']

export default function Home() {
  return (
    <>
      <section aria-labelledby="hero">
        <Container className="grid items-center gap-12 py-16 md:grid-cols-[1fr_380px] md:py-28">
          <div className="order-2 md:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Fabulous Portfolio</p>
            <h1 id="hero" className="text-5xl font-bold tracking-tight md:text-7xl">Hi, I'm Kurt Pasiona.</h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              A first-year Bachelor of Science in Information Technology student who is more than just a BSIT student—a hobbyist, an avid wrestling fan, a gamer, a pop culture guru, and a passionate worker.
            </p>
            <nav aria-label="Explore portfolio" className="mt-10 flex flex-wrap gap-4">
              <Button href="#/projects">View projects</Button>
              <Button href="#/gallery" variant="secondary">Open gallery</Button>
              <Button href="#/about" variant="secondary">About me</Button>
            </nav>
          </div>
          <div className="order-1 mx-auto w-56 md:order-2 md:w-full">
            <Placeholder round label="Profile photo" alt="Portrait of Alex Morgan, replace with your professional photo" className="aspect-square w-full border-2 border-ink" />
          </div>
        </Container>
      </section>

      <Section id="skills" eyebrow="Expertise" title="What I bring to a team" tint>
        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <li key={s.title} className="bg-surface p-8">
              <span className="text-accent"><Icon name={s.icon} size={28} /></span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
        <h3 className="mb-4 mt-12 text-base font-semibold">Also</h3>
        <ul className="flex flex-wrap gap-3" aria-label="Additional skills">{tags.map((t) => <Tag key={t}>{t}</Tag>)}</ul>
      </Section>

      <Section id="next" eyebrow="Explore" title="Where to next?">
        <ul className="grid gap-6 md:grid-cols-3">
          {[
            ['Gallery', 'Browse thumbnails of my work and university activities.', '#/gallery'],
            ['About', 'Education, experience, interests and how to reach me.', '#/about'],
            ['Projects', 'Detailed write-ups with challenges and outcomes.', '#/projects'],
          ].map(([t, d, h]) => (
            <li key={t}>
              <a href={h} className="group flex h-full flex-col justify-between border border-line bg-surface p-8 transition-colors hover:border-accent hover:bg-accent hover:text-white">
                <div>
                  <h3 className="text-xl font-semibold">{t}</h3>
                  <p className="mt-2 text-muted group-hover:text-white">{d}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold">Go to {t} <Icon name="arrow" size={18} /></span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
