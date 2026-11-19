import type { ReactNode } from 'react'

export type PageId = 'home' | 'gallery' | 'about' | 'projects' | 'style'
export const NAV: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
]

export const Container = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>{children}</div>
)

export const Section = ({ id, title, eyebrow, children, tint }: { id?: string; title: string; eyebrow?: string; children: ReactNode; tint?: boolean }) => (
  <section aria-labelledby={id} className={`py-16 md:py-24 ${tint ? 'bg-tint' : ''}`}>
    <Container>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>}
      <h2 id={id} className="mb-10 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {children}
    </Container>
  </section>
)

export const PageHeader = ({ title, intro }: { title: string; intro: string }) => (
  <header className="border-b border-line">
    <Container className="py-16 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">{intro}</p>
    </Container>
  </header>
)

const btn = 'inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-base font-semibold transition-colors'
export const Button = ({ href, children, variant = 'primary', onClick }: { href?: string; children: ReactNode; variant?: 'primary' | 'secondary'; onClick?: () => void }) => {
  const cls = `${btn} ${variant === 'primary' ? 'bg-accent text-white hover:bg-accent-dark' : 'border-2 border-ink text-ink hover:bg-ink hover:text-white'}`
  return href ? <a href={href} className={cls}>{children}</a> : <button type="button" onClick={onClick} className={cls}>{children}</button>
}

export const Placeholder = ({ label, alt, className = '', round }: { label: string; alt: string; className?: string; round?: boolean }) => (
  <div role="img" aria-label={alt} className={`flex items-center justify-center border border-line bg-tint text-muted ${round ? 'rounded-full' : ''} ${className}`}>
    <span className="flex flex-col items-center gap-2 text-sm font-medium">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="1" /><circle cx="9" cy="10" r="1.5" /><path d="m21 16-5-5-9 9" /></svg>
      {label}
    </span>
  </div>
)

export const Tag = ({ children }: { children: ReactNode }) => (
  <li className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium">{children}</li>
)

const paths: Record<string, ReactNode> = {
  mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 7 9 6 9-6" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M8 11v5M8 8v.01M12 16v-5m0 2.5c0-1.5 1-2.5 2.5-2.5S17 12 17 13.5V16" /></>,
  github: <path d="M9 19c-4 1-4-2-6-2m12 4v-3.5c0-1 .1-1.500-.5-2.500 3-.3 5.500-1.500 5.500-6a4.600 4.600 0 0 0-1.300-3.200 4.200 4.200 0 0 0-.1-3.200s-1.100-.3-3.500 1.300a12 12 0 0 0-6.200 0C6.500 2.800 5.400 3.100 5.400 3.100a4.200 4.200 0 0 0-.1 3.200A4.600 4.600 0 0 0 4 9.500c0 4.500 2.500 5.700 5.500 6-.6.600-.6 1.200-.5 2.500V21" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.500 6.500v.01" /></>,
  download: <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16" />,
  pen: <path d="m4 20 1-4L16 5l3 3L8 19l-4 1ZM14 7l3 3" />,
  chart: <path d="M4 20V4m0 16h16M8 16v-5m4 5V8m4 8v-3" />,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.500 2.500-6 6-6s6 2.500 6 6M16 5a3 3 0 0 1 0 6m2 3c2 .8 3 3 3 6" /></>,
  book: <path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2V5Zm2 14h14" />,
  camera: <><path d="M4 8h3l2-3h6l2 3h3v11H4V8Z" /><circle cx="12" cy="13" r="3.500" /></>,
  music: <><path d="M9 18V5l11-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="17" cy="16" r="3" /></>,
  run: <><circle cx="14" cy="4" r="2" /><path d="m6 21 4-6-2-3 4-3 3 3h3M10 9 7 11" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  play: <path d="M8 5v14l11-7L8 5Z" />,
}
export const Icon = ({ name, size = 22 }: { name: keyof typeof paths | string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
)

export const socials = [
  { name: 'LinkedIn', icon: 'linkedin', href: '#' },
  { name: 'GitHub', icon: 'github', href: 'github.com/supsidy' },
  { name: 'Instagram', icon: 'instagram', href: 'instagram.com/kohi.dxn' },
  { name: 'Email', icon: 'mail', href: 'kurtxean.pasiona@unc.edu.ph' },
]
export const SocialLinks = ({ dark }: { dark?: boolean }) => (
  <ul className="flex gap-3">
    {socials.map((s) => (
      <li key={s.name}>
        <a href={s.href} aria-label={s.name} className={`flex h-12 w-12 items-center justify-center rounded-md border transition-colors ${dark ? 'border-white/40 hover:bg-white hover:text-ink' : 'border-line hover:border-accent hover:bg-accent hover:text-white'}`}>
          <Icon name={s.icon} />
        </a>
      </li>
    ))}
  </ul>
)
