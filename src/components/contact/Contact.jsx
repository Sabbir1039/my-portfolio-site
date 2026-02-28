import { useState } from 'react';
import { toast } from 'react-toastify';
import { useTheme } from '../../contexts/ThemeContext';
import { Section, Input, Textarea, Button } from '../ui';
import { getThemeClasses } from '../../utils/classNames';
import { getApiConfig } from '../../data/api';
import { API_ENDPOINTS } from '../../constants';

const Contact = () => {
    const { isLightTheme } = useTheme();
    const themeClasses = getThemeClasses(isLightTheme);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { accessKey } = getApiConfig();
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
                        className="flex flex-col space-y-4 max-w-md mx-auto"
                    >
                        <Input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                        />
                        <Button type="submit" disabled={isSubmitting} className="w-full">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
