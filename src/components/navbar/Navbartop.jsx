// src/components/Navbar/Navbartop.jsx
import { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { FaAdjust, FaBars, FaTimes } from "react-icons/fa";
import navLinks from "./NavLinks";

function Navbartop() {
  const { isLightTheme, toggleTheme } = useTheme();
  const theme = isLightTheme ? "light" : "dark";

  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 shadow-md transition-colors duration-300 
      ${isLightTheme ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Brand */}
        <a href="#hero" className="flex items-center space-x-2 font-bold text-lg">
          <img
            src="/portfolio.png"
            alt="logo"
            className="w-8 h-8 font-heading"
          />
          <span>SABBIR</span>
        </a>

        {/* Desktop Menu */}
        <div className="font-sans hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`hover:text-blue-500 transition ${
                activeSection === link.id ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaAdjust size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div
          className={`font-sans md:hidden absolute top-16 left-0 w-full py-6 px-4 space-y-4 
          ${isLightTheme ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block hover:text-blue-500 transition ${
                activeSection === link.id ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="font-sans flex items-center space-x-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
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