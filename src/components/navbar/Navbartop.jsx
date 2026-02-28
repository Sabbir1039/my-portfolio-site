import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaAdjust, FaBars, FaTimes } from 'react-icons/fa';
import { getThemeClasses, cn } from '../../utils/classNames';
import { PERSONAL_INFO, NAV_CONFIG, SECTION_IDS } from '../../constants';
import navLinks from './NavLinks';

function Navbartop() {
  const { isLightTheme, toggleTheme } = useTheme();
  const themeClasses = getThemeClasses(isLightTheme);

  const [activeSection, setActiveSection] = useState(SECTION_IDS.HERO);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll to highlight active section
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop - NAV_CONFIG.SCROLL_OFFSET &&
        scrollPosition < sectionTop + sectionHeight - NAV_CONFIG.SCROLL_OFFSET
      ) {
        setActiveSection(section.id);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    setMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed w-full z-50 shadow-md transition-colors duration-300',
        themeClasses.navbar
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Brand */}
        <a
          href={`#${SECTION_IDS.HERO}`}
          className="flex items-center space-x-2 font-bold text-lg hover:text-indigo-600 transition-colors duration-300"
        >
          <img
            src="/portfolio.png"
            alt="Logo"
            className="w-8 h-8 font-heading"
          />
          <span>{PERSONAL_INFO.BRAND_NAME}</span>
        </a>

        {/* Desktop Menu */}
        <div className="font-sans hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                'transition-all duration-300',
                isLightTheme ? 'hover:text-indigo-600' : 'hover:text-indigo-400',
                activeSection === link.id && (isLightTheme ? 'text-indigo-600 font-semibold' : 'text-indigo-400 font-semibold')
              )}
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn(
              'p-2 rounded-full transition-all duration-300',
              themeClasses.hover
            )}
          >
            <FaAdjust size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div
          className={cn(
            'font-sans md:hidden absolute top-16 left-0 w-full py-6 px-4 space-y-4 shadow-lg',
            themeClasses.navbar
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleMenuItemClick}
              className={cn(
                'block transition-all duration-300',
                isLightTheme ? 'hover:text-indigo-600' : 'hover:text-indigo-400',
                activeSection === link.id && (isLightTheme ? 'text-indigo-600 font-semibold' : 'text-indigo-400 font-semibold')
              )}
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className={cn(
              'flex items-center space-x-2 p-2 rounded transition-all duration-300',
              themeClasses.hover
            )}
          >
            <FaAdjust size={20} />
            <span>Toggle Theme</span>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbartop;