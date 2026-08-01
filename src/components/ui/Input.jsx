import PropTypes from 'prop-types';
import { cn } from '../../utils/classNames';
import { useTheme } from '../../contexts/ThemeContext';
import { getFieldClasses } from './fieldStyles';

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
    const { isLightTheme } = useTheme();
    const field = getFieldClasses(isLightTheme, error);

    return (
        <div className="w-full">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={cn(field.base, field.surface, field.border, className)}
                {...props}
            />
            {error && <p className={cn('mt-1 text-sm', field.errorText)}>{error}</p>}
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
