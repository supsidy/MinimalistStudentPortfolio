import type { ReactNode } from 'react'
import { PROJECT_TYPES, SUBJECTS, filterProjects, type SubjectFilter, type TypeFilter } from '../data'

const subjectOptions: { value: SubjectFilter; label: string }[] = [{ value: 'All', label: 'All' }, ...SUBJECTS.map((s) => ({ value: s.id, label: s.label }))]
const typeOptions: TypeFilter[] = ['All', ...PROJECT_TYPES]

const Pill = ({ on, onClick, children }: { on: boolean; onClick: () => void; children: ReactNode }) => (
  <button type="button" aria-pressed={on} onClick={onClick}
    className={`min-h-12 rounded-md border-2 px-5 font-semibold transition-colors ${on ? 'border-accent bg-accent text-white' : 'border-line bg-surface hover:border-ink'}`}>
    {children}
  </button>
)

/** Two-level filter: subject (All / GEE-LITE / ITC), then activity type (All / E / M / S / A). */
export function ProjectFilter({ subject, onSubject, type, onType }: {
  subject: SubjectFilter; onSubject: (v: SubjectFilter) => void; type: TypeFilter; onType: (v: TypeFilter) => void
}) {
  return (
    <div className="space-y-3">
      <div role="group" aria-label="Filter projects by subject" className="flex flex-wrap items-center gap-3">
        <span className="w-20 text-sm font-semibold uppercase tracking-widest text-muted">Subject</span>
        {subjectOptions.map((o) => (
          <Pill key={o.value} on={subject === o.value} onClick={() => onSubject(o.value)}>
            {o.label} <span className="font-normal">({filterProjects(o.value, 'All').length})</span>
          </Pill>
        ))}
      </div>
      <div role="group" aria-label="Filter projects by activity type" className="flex flex-wrap items-center gap-3">
        <span className="w-20 text-sm font-semibold uppercase tracking-widest text-muted">Activity</span>
        {typeOptions.map((o) => (
          <Pill key={o} on={type === o} onClick={() => onType(o)}>
            {o} <span className="font-normal">({filterProjects(subject, o).length})</span>
          </Pill>
        ))}
      </div>
    </div>
  )
}
