import PropTypes from 'prop-types';
import { cn } from '../../utils/classNames';

/**
 * Reusable Button component
 */
const Button = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    as = 'button',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-accent text-accent-contrast hover:bg-accent-hover',
        secondary: 'bg-surface-hover text-ink hover:bg-line',
        outline: 'border border-accent text-accent hover:bg-accent/10',
        ghost: 'text-accent hover:bg-accent/10',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-6 py-3 text-base',
    };

    const Component = as;
    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (as === 'a') {
        return (
            <Component className={combinedClassName} {...props}>
                {children}
            </Component>
        );
    }

    return (
        <Component
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedClassName}
            {...props}
        >
            {children}
        </Component>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    as: PropTypes.string,
};

export default Button;
