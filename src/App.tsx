import { useEffect, useState } from 'react'
import { Layout } from './components/Layout'
import type { PageId } from './components/ui'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Projects from './pages/Projects'
import Style from './pages/Style'

const pages: Record<PageId, () => React.JSX.Element> = { home: Home, gallery: Gallery, about: About, projects: Projects, style: Style }
const read = (): PageId => {
  const id = window.location.hash.replace('#/', '').split('?')[0] as PageId
  return id in pages ? id : 'home'
}
const titles: Record<PageId, string> = { home: 'Home', gallery: 'Gallery', about: 'About', projects: 'Projects', style: 'Style guide' }

export default function App() {
  const [page, setPage] = useState<PageId>(read)
  useEffect(() => {
    const on = () => { setPage(read()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  useEffect(() => { document.title = `${titles[page]} | Alex Morgan Portfolio` }, [page])
  const Page = pages[page]
  return <Layout page={page}><Page /></Layout>
}
