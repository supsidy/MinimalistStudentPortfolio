import { useState, type ReactNode } from 'react'
import { Container, NAV, SocialLinks, type PageId } from './ui'

export function Layout({ page, children }: { page: PageId; children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const link = (id: PageId, label: string) => (
    <a key={id} href={`#/${id}`} onClick={() => setOpen(false)} aria-current={page === id ? 'page' : undefined}
      className={`flex min-h-12 items-center border-b-2 px-1 text-base font-medium transition-colors md:min-h-0 md:py-2 ${page === id ? 'border-accent text-accent' : 'border-transparent hover:text-accent'}`}>
      {label}
    </a>
  )
  return (
    <>
      <a href="#main" className="absolute left-4 top-[-100px] z-50 rounded-md bg-ink px-4 py-3 text-white focus:top-4">Skip to main content</a>
      <header className="sticky top-0 z-40 border-b border-line bg-paper">
        <Container className="flex h-16 items-center justify-between">
          <a href="#/home" className="text-lg font-bold tracking-tight">sitedaiji</a>
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">{NAV.map((n) => link(n.id, n.label))}</nav>
          <button type="button" className="flex h-12 items-center rounded-md border border-line px-4 text-sm font-semibold md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Menu'}
          </button>
        </Container>
        {open && (
          <nav id="mobile-nav" aria-label="Primary mobile" className="border-t border-line bg-paper md:hidden">
            <Container className="flex flex-col py-2">{NAV.map((n) => link(n.id, n.label))}</Container>
          </nav>
        )}
      </header>
      <main id="main" tabIndex={-1}>{children}</main>
      <footer className="bg-ink text-white">
        <Container className="grid gap-10 py-14 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">Kurt Xean Pasiona</p>
            <p className="mt-2 max-w-xs text-sm text-white/80">1st Year BSIT Student, University of Nueva Caceres.</p>
          </div>
          <nav aria-label="Footer">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/80">Quick links</h2>
            <ul className="space-y-1">
              {NAV.map((n) => <li key={n.id}><a href={`#/${n.id}`} className="inline-flex min-h-10 items-center underline-offset-4 hover:underline">{n.label}</a></li>)}            </ul>
          </nav>
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/80">Connect</h2>
            <SocialLinks dark />
          </div>
        </Container>
        <div className="border-t border-white/20 py-5 text-center text-sm text-white/80">© 2026 Kurt Pasiona. All rights reserved.</div>
      </footer>
    </>
  )
}
