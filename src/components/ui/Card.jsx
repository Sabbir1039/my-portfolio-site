import PropTypes from 'prop-types';
import { useTheme } from '../../contexts/ThemeContext';
import { cn, getThemeClasses } from '../../utils/classNames';

/**
 * Reusable Card component
 */
const Card = ({ children, className = '', hover = false }) => {
    const { isLightTheme } = useTheme();
    const themeClasses = getThemeClasses(isLightTheme);

    return (
        <div
            className={cn(
                'rounded-2xl shadow-lg overflow-hidden transition-all duration-300',
                themeClasses.card,
                hover && 'hover:shadow-2xl hover:scale-[1.02]',
                className
            )}
        >
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    hover: PropTypes.bool,
};

export default Card;
