import PropTypes from 'prop-types';
import { cn } from '../../utils/classNames';
import { useTheme } from '../../contexts/ThemeContext';
import { getFieldClasses } from './fieldStyles';

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
    const { isLightTheme } = useTheme();
    const field = getFieldClasses(isLightTheme, error);

    return (
        <div className="w-full">
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                rows={rows}
                className={cn(field.base, 'resize-none', field.surface, field.border, className)}
                {...props}
            />
            {error && <p className={cn('mt-1 text-sm', field.errorText)}>{error}</p>}
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
