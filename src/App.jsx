import Navbartop from './components/navbar/Navbartop';
import Hero from './components/hero/Hero';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from './contexts/ThemeContext';

function App() {
  // Toasts are rendered by a third-party portal, so they can't read our tokens —
  // this is the one place the theme boolean is still needed outside the navbar.
  const { isLightTheme } = useTheme();

  return (
    <div className="w-full bg-surface">
      <Navbartop />
      <main>
        {/* Sections carry their own top border instead of shared <hr>s, so each
            one owns its full spacing. */}
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isLightTheme ? 'light' : 'dark'}
      />
    </div>
  );
}

export default App;
