import { PROJECT_TYPES, projects, type TypeFilter } from '../data'

const options: TypeFilter[] = ['All', ...PROJECT_TYPES]
const count = (o: TypeFilter) => (o === 'All' ? projects.length : projects.filter((p) => p.type === o).length)

export function ProjectFilter({ value, onChange }: { value: TypeFilter; onChange: (v: TypeFilter) => void }) {
  return (
    <div role="group" aria-label="Filter projects by type" className="flex flex-wrap gap-3">
      {options.map((o) => (
        <button key={o} type="button" aria-pressed={value === o} onClick={() => onChange(o)}
          className={`min-h-12 rounded-md border-2 px-5 font-semibold transition-colors ${value === o ? 'border-accent bg-accent text-white' : 'border-line bg-surface hover:border-ink'}`}>
          {o} <span className="font-normal">({count(o)})</span>
        </button>
      ))}
    </div>
  )
}
