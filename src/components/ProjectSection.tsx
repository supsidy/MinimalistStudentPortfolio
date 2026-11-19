import { subjectLabel, type Project } from '../data'
import { Placeholder, ZoomImage } from './ui'

const List = ({ items }: { items: string[] }) => (
  <ul className="mt-3 list-disc space-y-2 pl-5 text-muted marker:text-accent">{items.map((t) => <li key={t}>{t}</li>)}</ul>
)

export function ProjectSection({ p }: { p: Project }) {
  return (
    <article id={p.id} aria-labelledby={`${p.id}-t`} className="scroll-mt-40 py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          {p.image.src
            ? <ZoomImage src={p.image.src} alt={p.image.alt} className="aspect-[4/3] w-full border border-line object-cover" />
            : <Placeholder label={`Image ${p.code}`} alt={p.image.alt} className="aspect-[4/3] w-full" />}
        </div>
        <div>
          <p className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <span className="rounded border border-accent px-2 py-0.5 text-xs tracking-wider">{subjectLabel(p.subject)}</span>
            {p.code} · Type {p.type} · {p.period}
          </p>
          <h2 id={`${p.id}-t`} className="mt-3 text-3xl font-semibold tracking-tight">{p.title}</h2>
          <h3 className="mt-6 text-base font-semibold">Project details</h3>
          <p className="mt-2 text-muted">{p.details}</p>
          {p.files.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-x-6">
              {p.files.map((f) => <a key={f.href} href={f.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center font-semibold text-accent underline underline-offset-4 hover:text-accent-dark">{f.label}</a>)}
            </div>
          )}
        </div>
      </div>
      <div className="mt-10 grid gap-10 border-t border-line pt-8 md:grid-cols-2">
        <div><h3 className="text-base font-semibold">Challenges faced</h3><List items={p.challenges} /></div>
        <div><h3 className="text-base font-semibold">Outcomes achieved</h3><List items={p.outcomes} /></div>
      </div>
    </article>
  )
}
