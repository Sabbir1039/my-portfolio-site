import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { cn } from '../../utils/classNames';
import { PERSONAL_INFO, SECTION_IDS } from '../../constants';
import { useScrollSpy } from '../../hooks/useScroll';
import navLinks, { navLinkIds } from './NavLinks';

function Navbartop() {
  // The only component that still needs the theme value — everything else reads
  // colour from tokens. This is here purely to pick the toggle icon.
  const { isLightTheme, toggleTheme } = useTheme();

  const activeSection = useScrollSpy(navLinkIds);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (id) =>
    cn(
      'font-mono text-xs tracking-wide transition-colors duration-200',
      activeSection === id ? 'text-accent' : 'text-ink-muted hover:text-ink'
    );

  return (
    <nav className="fixed w-full z-50 bg-surface/90 backdrop-blur border-b border-line">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center h-14">
        <a
          href={`#${SECTION_IDS.HERO}`}
          className="font-mono text-sm font-medium text-ink hover:text-accent transition-colors duration-200"
        >
          {PERSONAL_INFO.BRAND_NAME}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={linkClass(link.id)}>
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label={isLightTheme ? 'Switch to dark theme' : 'Switch to light theme'}
            className="p-1.5 rounded text-ink-muted hover:text-accent transition-colors duration-200"
          >
            {isLightTheme ? <FiMoon size={16} /> : <FiSun size={16} />}
          </button>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="md:hidden p-1.5 text-ink"
        >
          {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-line px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={cn('block', linkClass(link.id))}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="flex items-center gap-2 font-mono text-xs text-ink-muted hover:text-accent transition-colors duration-200"
          >
            {isLightTheme ? <FiMoon size={14} /> : <FiSun size={14} />}
            {isLightTheme ? 'Dark mode' : 'Light mode'}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbartop;
