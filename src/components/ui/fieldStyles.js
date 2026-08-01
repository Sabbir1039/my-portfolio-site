/**
 * Shared form-field styling for Input and Textarea.
 *
 * Split into named parts rather than one string because `cn()` is a plain join with
 * no tailwind-merge — emitting two conflicting `border-*` classes would leave the
 * winner up to stylesheet order. Each part must therefore resolve to exactly one
 * class per property.
 */
export const getFieldClasses = (isLightTheme, error) => ({
    base: 'w-full px-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent',
    surface: isLightTheme
        ? 'bg-white text-gray-900 placeholder-gray-500'
        : 'bg-gray-900 text-gray-100 placeholder-gray-400',
    border: error
        ? 'border-red-500 focus:ring-red-400'
        : isLightTheme
            ? 'border-gray-300 focus:ring-indigo-400'
            : 'border-gray-700 focus:ring-indigo-500',
    errorText: isLightTheme ? 'text-red-600' : 'text-red-400',
});
