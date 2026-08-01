/**
 * Navigation links configuration
 */
// Labels are stored as they should read. Don't transform case at render time —
// any all-caps or lowercase treatment belongs in CSS, so the data stays correct.
const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

/** Stable id array for useScrollSpy — must not be rebuilt per render. */
export const navLinkIds = navLinks.map((link) => link.id);

export default navLinks;
