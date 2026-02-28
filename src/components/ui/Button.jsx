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
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 active:scale-95',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500',
        ghost: 'text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const Component = as;
    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (as === 'a') {
        return (
            <Component
                className={combinedClassName}
                {...props}
            >
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
