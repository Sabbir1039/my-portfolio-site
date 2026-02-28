import './App.css';
import Navbartop from './components/navbar/Navbartop';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { isLightTheme } = useTheme();
  const hrClass = isLightTheme ? 'border-gray-300' : 'border-gray-700';

  return (
    <div className="w-full">
      <Navbartop />
      <Hero />
      <hr className={hrClass} />
      <Projects />
      <hr className={hrClass} />
      <Skills />
      <hr className={hrClass} />
      <Contact />
      <hr className={hrClass} />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
