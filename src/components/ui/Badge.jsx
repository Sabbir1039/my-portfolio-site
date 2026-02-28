import PropTypes from 'prop-types';
import { cn } from '../../utils/classNames';
import { useTheme } from '../../contexts/ThemeContext';

/**
 * Reusable Badge component
 */
const Badge = ({
    children,
    icon: Icon,
    variant = 'default',
    className = ''
}) => {
    const { isLightTheme } = useTheme();

    const lightVariants = {
        default: 'bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700',
        primary: 'bg-blue-100 text-blue-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
    };

    const darkVariants = {
        default: 'bg-gradient-to-r from-indigo-900 to-indigo-800 text-indigo-300',
        primary: 'bg-blue-900 text-blue-200',
        success: 'bg-green-900 text-green-200',
        warning: 'bg-yellow-900 text-yellow-200',
    };

    const variants = isLightTheme ? lightVariants : darkVariants;

    return (
        <span
            className={cn(
                'inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium shadow-sm transition-all duration-200 hover:shadow-md',
                variants[variant],
                className
            )}
        >
            {Icon && <Icon className="text-sm" size={14} />}
            {children}
        </span>
    );
};

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.elementType,
    variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning']),
    className: PropTypes.string,
};

export default Badge;
