import PropTypes from 'prop-types';
import { cn } from '../../utils/classNames';

/**
 * Section wrapper: max-width, padding, and a left-aligned heading with a mono
 * eyebrow above it. Colour comes from tokens, so sections no longer need to be
 * handed theme classes by their parent.
 */
const Section = ({
    id,
    eyebrow,
    title,
    children,
    className = '',
    fullHeight = false,
}) => {
    return (
        <section
            id={id}
            className={cn(
                'bg-surface text-ink border-t border-line py-24 transition-colors duration-300',
                fullHeight && 'min-h-screen',
                className
            )}
        >
            <div className="max-w-5xl mx-auto px-6">
                {(eyebrow || title) && (
                    <header className="mb-12">
                        {eyebrow && (
                            <p className="font-mono text-xs tracking-[0.18em] uppercase text-accent mb-2">
                                {eyebrow}
                            </p>
                        )}
                        {title && (
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                {title}
                            </h2>
                        )}
                    </header>
                )}
                {children}
            </div>
        </section>
    );
};

Section.propTypes = {
    id: PropTypes.string.isRequired,
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    fullHeight: PropTypes.bool,
};

export default Section;
