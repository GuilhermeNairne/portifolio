import Navbar from './components/Navbar'
import SmoothScroll from './components/SmoothScroll'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Project />
      </main>
      <Footer />
    </>
  )
}

export default App
