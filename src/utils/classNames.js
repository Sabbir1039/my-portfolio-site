/**
 * Utility function to conditionally join classNames together
 * @param  {...any} classes - List of class names or conditional objects
 * @returns {string} - Combined class names
 */
export const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

/**
 * Get theme-based classes
 * @param {boolean} isLightTheme - Whether light theme is active
 * @returns {object} - Object containing common theme-based classes
 */
export const getThemeClasses = (isLightTheme) => ({
    background: isLightTheme ? 'bg-white' : 'bg-gray-800',
    text: isLightTheme ? 'text-gray-900' : 'text-gray-100',
    card: isLightTheme ? 'bg-white' : 'bg-gray-900',
    cardHover: isLightTheme ? 'hover:bg-gray-100' : 'hover:bg-gray-700',
    border: isLightTheme ? 'border-gray-200' : 'border-gray-700',
    hover: isLightTheme ? 'hover:bg-gray-200' : 'hover:bg-gray-700',
    navbar: isLightTheme ? 'bg-white text-gray-900' : 'bg-gray-900 text-white',
});
