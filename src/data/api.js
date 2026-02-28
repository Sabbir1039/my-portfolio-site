/**
 * API Configuration
 * 
 * SECURITY NOTICE:
 * The access key is currently hardcoded for demo purposes.
 * In production, use environment variables:
 * 
 * 1. Create a .env file (use .env.example as template)
 * 2. Add: VITE_WEB3FORMS_ACCESS_KEY=your_key_here
 * 3. Import as: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
 */

// For production, use: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
export const access_key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'e9a7e5eb-9c3f-4732-88de-c57fa02795bb';

/**
 * Get API configuration
 * @returns {object} API configuration object
 */
export const getApiConfig = () => ({
    accessKey: access_key,
    endpoint: 'https://api.web3forms.com/submit',
});