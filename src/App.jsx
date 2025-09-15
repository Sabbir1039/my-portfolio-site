import './App.css'
import Navbartop from './components/navbar/Navbartop'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <div className='w-full'>
        <Navbartop />
        <Hero />
        <hr />
        <Projects />
        <hr />
        <Skills />
        <hr />
        <Contact />
        <hr />
        <Footer />
        <ToastContainer />
      </div>
    </>
  )
}

export default App
