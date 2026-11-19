import type { Project } from '../data'
import { Placeholder } from './ui'

const List = ({ items }: { items: string[] }) => (
  <ul className="mt-3 list-disc space-y-2 pl-5 text-muted marker:text-accent">{items.map((t) => <li key={t}>{t}</li>)}</ul>
)

export function ProjectSection({ p }: { p: Project }) {
  return (
    <article id={p.id} aria-labelledby={`${p.id}-t`} className="scroll-mt-40 py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          {p.image.src
            ? <img src={p.image.src} alt={p.image.alt} className="aspect-[4/3] w-full border border-line object-cover" />
            : <Placeholder label={`Image ${p.code}`} alt={p.image.alt} className="aspect-[4/3] w-full" />}
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{p.code} · Type {p.type} · {p.period}</p>
          <h2 id={`${p.id}-t`} className="mt-3 text-3xl font-semibold tracking-tight">{p.title}</h2>
          <h3 className="mt-6 text-base font-semibold">Project details</h3>
          <p className="mt-2 text-muted">{p.details}</p>
          <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm">
            <dt className="font-semibold">Role</dt><dd className="text-muted">{p.role}</dd>
            <dt className="font-semibold">Tools</dt><dd className="text-muted">{p.tools.join(', ')}</dd>
          </dl>
          {p.file && <a href={p.file.href} className="mt-5 inline-flex min-h-12 items-center font-semibold text-accent underline underline-offset-4 hover:text-accent-dark">{p.file.label}</a>}
        </div>
      </div>
      <div className="mt-10 grid gap-10 border-t border-line pt-8 md:grid-cols-2">
        <div><h3 className="text-base font-semibold">Challenges faced</h3><List items={p.challenges} /></div>
        <div><h3 className="text-base font-semibold">Outcomes achieved</h3><List items={p.outcomes} /></div>
      </div>
    </article>
  )
}
