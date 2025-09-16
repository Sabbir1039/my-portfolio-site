import { useState } from 'react';
import { toast } from 'react-toastify';
import { access_key } from '../../data/api';
import { useTheme } from '../../contexts/ThemeContext';

const Contact = () => {
    const { isLightTheme } = useTheme();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ name, email, message, access_key }),
        }).then(res => res.json());

        if (response.success) {
            setName('');
            setEmail('');
            setMessage('');
            toast.success("Email sent successfully!");
        } else {
            toast.error("Error occurred while sending email! Try again!");
        }
    };

    return (
        <section 
            id="contact"
            className={`min-h-screen py-20 px-6 md:px-0 transition-colors duration-300 ${
                isLightTheme ? "bg-white text-gray-900" : "bg-gray-800 text-gray-100"
            }`}
        >
            <h1
                className="text-center uppercase text-2xl md:text-3xl font-heading tracking-wide mb-12 relative flex items-center justify-center"
            >
                GET IN TOUCH
            </h1>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 justify-evenly items-center">
                
                <div className="md:w-1/3 flex justify-center">
                    <img
                        src="/email.svg"
                        alt="email-icon"
                        className="font-heading w-48 h-48 md:w-64 md:h-64 object-contain rounded-full hover:shadow-lg transition-shadow"
                    />
                </div>

                <div className="md:w-2/3 w-full font-sans">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-32"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 rounded bg-indigo-600 text-white hover:bg-blue-700 transition"
                        >
                            Send
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
