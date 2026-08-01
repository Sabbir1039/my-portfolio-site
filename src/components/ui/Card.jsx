import PropTypes from 'prop-types';
import { cn } from '../../utils/classNames';

/**
 * Reusable Card component
 */
const Card = ({ children, className = '', hover = false }) => {
    return (
        <div
            className={cn(
                'bg-surface-raised border border-line rounded-lg overflow-hidden transition-colors duration-200',
                hover && 'hover:border-accent/40',
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
