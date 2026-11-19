import { Button, Container, Icon, PageHeader, Section, SocialLinks, Tag } from '../components/ui'

const colors = [
  ['Paper', '#FAFAF8', 'bg-paper', 'Page background'],
  ['Surface', '#FFFFFF', 'bg-surface', 'Cards'],
  ['Tint', '#F0F0EC', 'bg-tint', 'Alt sections, placeholders'],
  ['Line', '#D4D4CF', 'bg-line', 'Borders (decorative)'],
  ['Muted', '#595959', 'bg-muted', 'Body text, 7:1 on paper'],
  ['Ink', '#1A1A1A', 'bg-ink', 'Headings, 16:1 on paper'],
  ['Accent', '#1D4ED8', 'bg-accent', 'Links, buttons, 6.3:1 on paper'],
  ['Accent dark', '#1E3A8A', 'bg-accent-dark', 'Button hover'],
]

export default function Style() {
  return (
    <>
      <PageHeader title="Style guide" intro="Colours, type, components and focus states. Every value is solid, with no gradients or blurred shadows." />
      <Section id="colors" title="Colour">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {colors.map(([n, hex, cls, use]) => (
            <li key={n}>
              <div className={`h-24 border border-line ${cls}`} />
              <p className="mt-3 font-semibold">{n}</p>
              <p className="text-sm text-muted">{hex}</p>
              <p className="text-sm text-muted">{use}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="type" title="Typography" tint>
        <p className="mb-8 text-muted">Inter, with Regular 400, Medium 500, Semibold 600 and Bold 700. Fall back to Arial or Helvetica in Google Sites and Canva.</p>
        <div className="space-y-6">
          <p className="text-5xl font-bold tracking-tight md:text-7xl">H1 · 72 / 48 px Bold</p>
          <p className="text-4xl font-semibold tracking-tight">H2 · 36 px Semibold</p>
          <p className="text-xl font-semibold">H3 · 20 px Semibold</p>
          <p className="text-lg text-muted">Lead paragraph · 18 px Regular</p>
          <p>Body · 16 px Regular, line height 1.6</p>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Eyebrow · 14 px Semibold caps</p>
        </div>
      </Section>
      <Section id="components" title="Components">
        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-semibold">Buttons (minimum 48 px tall)</h3>
            <div className="flex flex-wrap gap-4"><Button href="#/style">Primary</Button><Button href="#/style" variant="secondary">Secondary</Button></div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Tags</h3>
            <ul className="flex flex-wrap gap-3"><Tag>Research</Tag><Tag>Teamwork</Tag></ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Social icons</h3>
            <SocialLinks />
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Card</h3>
            <div className="max-w-sm border border-line bg-surface p-8"><span className="text-accent"><Icon name="code" size={28} /></span><h4 className="mt-4 text-lg font-semibold">Card title</h4><p className="mt-2 text-muted">1 px border, no shadow, 32 px padding.</p></div>
          </div>
        </div>
      </Section>
      <Section id="focus" title="Focus states" tint>
        <p className="mb-6 max-w-2xl text-muted">All interactive elements show a 3 px accent outline with 3 px offset on keyboard focus. Press Tab to try it.</p>
        <Container className="flex flex-wrap gap-4 !px-0">
          <a href="#/style" className="inline-flex min-h-12 items-center rounded-md border-2 border-line px-6 font-semibold">Tab to me</a>
          <a href="#/style" className="inline-flex min-h-12 items-center rounded-md bg-accent px-6 font-semibold text-white">And me</a>
        </Container>
      </Section>
      <Section id="layout" title="Layout and responsive rules">
        <ul className="list-disc space-y-2 pl-5 text-muted marker:text-accent">
          <li>Content width 1152 px, side padding 40 px on desktop and 24 px on mobile.</li>
          <li>Section spacing 96 px on desktop, 64 px on mobile.</li>
          <li>Grids: 3 columns desktop, 2 tablet, 1 mobile (390 px).</li>
          <li>One H1 per page, then H2 sections and H3 items.</li>
          <li>Every image needs descriptive alt text.</li>
        </ul>
      </Section>
    </>
  )
}
