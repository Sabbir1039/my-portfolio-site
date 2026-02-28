import { useEffect } from 'react';

/**
 * Custom hook for active section detection based on scroll position
 * @param {Function} callback - Function to call with active section id
 * @param {number} offset - Offset from top of section (default: 50)
 */
export const useScrollSpy = (callback, offset = 50) => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = document.querySelectorAll('section');

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (
                    scrollPosition >= sectionTop - offset &&
                    scrollPosition < sectionTop + sectionHeight - offset
                ) {
                    callback(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [callback, offset]);
};

/**
 * Custom hook for handling window resize
 * @param {Function} callback - Function to call on resize
 */
export const useWindowResize = (callback) => {
    useEffect(() => {
        window.addEventListener('resize', callback);
        return () => window.removeEventListener('resize', callback);
    }, [callback]);
};
