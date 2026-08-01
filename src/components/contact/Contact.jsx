import { useState } from 'react';
import { toast } from 'react-toastify';
import { useTheme } from '../../contexts/ThemeContext';
import { Section, Input, Textarea, Button } from '../ui';
import { getThemeClasses, cn } from '../../utils/classNames';
import { validateContactForm } from '../../utils/validation';
import { API_ENDPOINTS, CONTACT_INFO } from '../../constants';

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
    const { isLightTheme } = useTheme();
    const themeClasses = getThemeClasses(isLightTheme);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { isValid, errors: validationErrors } = validateContactForm(formData);
        setErrors(validationErrors);
        if (!isValid) return;

        setIsSubmitting(true);

        try {
            const response = await fetch(API_ENDPOINTS.WEB3FORMS, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    access_key: accessKey,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setFormData({ name: '', email: '', message: '' });
                toast.success('Email sent successfully!');
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            toast.error('Error occurred while sending email! Try again!');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section
            id="contact"
            title="GET IN TOUCH"
            fullHeight
            className={`${themeClasses.background} ${themeClasses.text}`}
        >
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 justify-evenly items-center">
                {/* Illustration */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/email.svg"
                        alt="Contact illustration"
                        className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                    />
                </div>

                {/* Contact Form */}
                <div className="md:w-1/2 w-full">
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="flex flex-col space-y-4 max-w-md mx-auto"
                    >
                        <Input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name}
                            required
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            required
                        />
                        <Textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            error={errors.message}
                            required
                            rows={5}
                        />
                        <Button
                            type="submit"
                            disabled={isSubmitting || !accessKey}
                            className="w-full"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                        {!accessKey && (
                            // red-500 on the dark surface measures 3.9:1 — below AA at 14px.
                            <p className={cn('text-sm', isLightTheme ? 'text-red-600' : 'text-red-400')}>
                                The contact form is unavailable right now. Email me directly at{' '}
                                <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="underline">
                                    {CONTACT_INFO.EMAIL}
                                </a>
                                .
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
