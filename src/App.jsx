import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Projects from './components/Projects'
import SingleApp from './components/SingleApp'
import NotFound from './components/NotFound'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return (
    <div className="flex justify-center items-center mt-4 max-sm:mx-6 max-sm:mt-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:name" element={<SingleApp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
