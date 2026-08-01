/**
 * Navigation links configuration
 */
const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' },
];

/** Stable id array for useScrollSpy — must not be rebuilt per render. */
export const navLinkIds = navLinks.map((link) => link.id);

export default navLinks;
