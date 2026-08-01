import PropTypes from 'prop-types';
import { cn } from '../../utils/classNames';
import { FIELD_BASE, fieldBorder, FIELD_ERROR_TEXT } from './fieldStyles';

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
                className={cn(FIELD_BASE, 'resize-none', fieldBorder(error), className)}
                {...props}
            />
            {error && <p className={FIELD_ERROR_TEXT}>{error}</p>}
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
