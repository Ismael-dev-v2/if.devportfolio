/* eslint-disable react/no-unescaped-entities */
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <div className='flex gap-10 home'>
      <Hero />
      <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default Home
