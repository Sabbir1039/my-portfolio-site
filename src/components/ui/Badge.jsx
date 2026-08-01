import PropTypes from 'prop-types';
import { cn } from '../../utils/classNames';

/**
 * Reusable Badge component
 */
const Badge = ({
    children,
    icon: Icon,
    variant = 'default',
    className = ''
}) => {
    // ink-muted on surface-hover measures 4.04:1 in dark — below AA at this size.
    // Outlined variants sit on the page surface instead, where it reaches 6.3:1.
    const variants = {
        default: 'border border-line text-ink-muted',
        accent: 'bg-accent/10 text-accent border border-accent/25',
        muted: 'bg-surface-hover text-ink',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 px-2 py-1 rounded font-mono text-[11px] leading-none',
                variants[variant],
                className
            )}
        >
            {Icon && <Icon size={11} />}
            {children}
        </span>
    );
};

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.elementType,
    variant: PropTypes.oneOf(['default', 'accent', 'muted']),
    className: PropTypes.string,
};

export default Badge;
