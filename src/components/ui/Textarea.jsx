import PropTypes from 'prop-types';
import { cn } from '../../utils/classNames';

/**
 * Reusable Textarea component
 */
const Textarea = ({
    placeholder,
    value,
    onChange,
    required = false,
    rows = 4,
    className = '',
    error,
    ...props
}) => {
    return (
        <div className="w-full">
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                rows={rows}
                className={cn(
                    'w-full px-4 py-2.5 rounded-lg border transition-all duration-200 resize-none',
                    'focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent',
                    'text-gray-900 placeholder-gray-500',
                    error
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-gray-300',
                    className
                )}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
};

Textarea.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    rows: PropTypes.number,
    className: PropTypes.string,
    error: PropTypes.string,
};

export default Textarea;
