import { useState } from 'react';
import { toast } from 'react-toastify';
import { Section, Input, Textarea, Button } from '../ui';
import { validateContactForm } from '../../utils/validation';
import { API_ENDPOINTS, CONTACT_INFO, SECTION_IDS } from '../../constants';

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ ...formData, access_key: accessKey }),
            });

            const result = await response.json();

            if (result.success) {
                setFormData({ name: '', email: '', message: '' });
                toast.success('Message sent — thanks, I’ll get back to you.');
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            toast.error('Something went wrong. Try again, or email me directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id={SECTION_IDS.CONTACT} eyebrow="04 / Contact" title="Get in touch">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                <div>
                    <p className="text-base leading-relaxed text-ink-muted mb-6">
                        Happy to talk about backend work, healthcare integrations, or anything
                        you’ve read here. I’ll send my CV on request.
                    </p>

                    <dl className="space-y-3 font-mono text-sm">
                        <div>
                            <dt className="text-ink-subtle text-xs uppercase tracking-wider mb-0.5">
                                Email
                            </dt>
                            <dd>
                                <a
                                    href={`mailto:${CONTACT_INFO.EMAIL}`}
                                    className="text-ink hover:text-accent transition-colors duration-200"
                                >
                                    {CONTACT_INFO.EMAIL}
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-ink-subtle text-xs uppercase tracking-wider mb-0.5">
                                Location
                            </dt>
                            <dd className="text-ink-muted">Bangladesh · Remote</dd>
                        </div>
                    </dl>
                </div>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
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
                        rows={6}
                        required
                    />
                    <Button type="submit" disabled={isSubmitting || !accessKey} className="w-full">
                        {isSubmitting ? 'Sending…' : 'Send message'}
                    </Button>
                    {!accessKey && (
                        <p className="font-mono text-xs text-ink-subtle">
                            Form unavailable — email me at{' '}
                            <a
                                href={`mailto:${CONTACT_INFO.EMAIL}`}
                                className="text-accent hover:underline"
                            >
                                {CONTACT_INFO.EMAIL}
                            </a>
                        </p>
                    )}
                </form>
            </div>
        </Section>
    );
};

export default Contact;
