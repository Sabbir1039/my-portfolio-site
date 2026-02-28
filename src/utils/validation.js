/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - Whether email is valid
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate form data
 * @param {object} formData - Form data to validate
 * @returns {object} - Object with isValid boolean and errors object
 */
export const validateContactForm = (formData) => {
    const errors = {};

    if (!formData.name || formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.email || !isValidEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!formData.message || formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters long';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};
