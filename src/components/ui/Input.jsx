import PropTypes from 'prop-types';
import { cn } from '../../utils/classNames';

/**
 * Reusable Input component
 */
const Input = ({
    type = 'text',
    placeholder,
    value,
    onChange,
    required = false,
    className = '',
    error,
    ...props
}) => {
    return (
        <div className="w-full">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={cn(
                    'w-full px-4 py-2.5 rounded-lg border transition-all duration-200',
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

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    className: PropTypes.string,
    error: PropTypes.string,
};

export default Input;
