import PropTypes from 'prop-types';
import { cn } from '../../utils/classNames';
import { FIELD_BASE, fieldBorder, FIELD_ERROR_TEXT } from './fieldStyles';

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
                className={cn(FIELD_BASE, fieldBorder(error), className)}
                {...props}
            />
            {error && <p className={FIELD_ERROR_TEXT}>{error}</p>}
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
