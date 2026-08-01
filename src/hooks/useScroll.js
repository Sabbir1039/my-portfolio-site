import { useEffect, useState } from 'react';

/**
 * Track which section is currently in view.
 *
 * @param {string[]} ids - Section ids to watch. Must be a stable reference —
 *   an inline `.map()` re-runs the effect every render and churns the observer.
 * @returns {string} Id of the section crossing the viewport midline.
 */
export const useScrollSpy = (ids) => {
    const [activeId, setActiveId] = useState(ids[0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            // Collapses the root to a 1px line at the viewport middle, so exactly
            // one section intersects at a time and no tie-breaking is needed.
            { rootMargin: '-50% 0px -50% 0px' }
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [ids]);

    return activeId;
};
