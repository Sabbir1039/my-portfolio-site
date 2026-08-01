/**
 * Shared form-field styling for Input and Textarea.
 *
 * No theme branching — colour comes from tokens. Kept as separate parts because
 * `cn()` has no tailwind-merge: the border must resolve to exactly one class, so
 * the error state replaces the base border rather than layering on top of it.
 */
export const FIELD_BASE =
    'w-full px-3.5 py-2.5 rounded-md border bg-surface-raised text-ink placeholder-ink-subtle transition-colors duration-200';

export const fieldBorder = (error) =>
    error ? 'border-red-500' : 'border-line focus:border-accent';

export const FIELD_ERROR_TEXT = 'mt-1.5 font-mono text-xs text-red-500';
