/**
 * Conditionally join class names.
 *
 * Deliberately minimal — no tailwind-merge. Two conflicting classes for the same
 * property both survive, and the winner is decided by stylesheet order rather than
 * argument order. Since the move to semantic colour tokens, callers emit one class
 * per property, so this rarely bites — but don't rely on a later argument
 * overriding an earlier one.
 *
 * @param  {...any} classes - class names; falsy values are dropped
 * @returns {string}
 */
export const cn = (...classes) => classes.filter(Boolean).join(' ');
