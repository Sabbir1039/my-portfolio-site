import PropTypes from 'prop-types';
import { cn } from '../../utils/classNames';

/**
 * Reusable Section component with consistent structure
 */
const Section = ({
    id,
    title,
    children,
    className = '',
    fullHeight = false,
}) => {
    return (
        <section
            id={id}
            className={cn(
                'py-20 transition-colors duration-300',
                fullHeight && 'min-h-screen',
                className
            )}
        >
            <div className="max-w-6xl mx-auto px-6">
                {title && (
                    <h1 className="text-center uppercase text-2xl md:text-3xl font-heading tracking-wide mb-12">
                        {title}
                    </h1>
                )}
                {children}
            </div>
        </section>
    );
};

Section.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    fullHeight: PropTypes.bool,
};

export default Section;
