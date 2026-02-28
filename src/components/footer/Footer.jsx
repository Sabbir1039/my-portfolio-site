import { MdEmail } from 'react-icons/md';
import { FaSquarePhone } from 'react-icons/fa6';
import { GrLinkTop } from 'react-icons/gr';
import { useTheme } from '../../contexts/ThemeContext';
import { getThemeClasses, cn } from '../../utils/classNames';
import { CONTACT_INFO, SECTION_IDS } from '../../constants';

const Footer = () => {
    const { isLightTheme } = useTheme();
    const themeClasses = getThemeClasses(isLightTheme);

    const contactItems = [
        { icon: MdEmail, text: CONTACT_INFO.EMAIL, href: `mailto:${CONTACT_INFO.EMAIL}` },
        { icon: FaSquarePhone, text: CONTACT_INFO.PHONE, href: `tel:${CONTACT_INFO.PHONE}` },
    ];

    return (
        <footer
            className={`py-20 transition-colors duration-300 flex items-center justify-center ${themeClasses.background} ${themeClasses.text}`}
        >
            <div className="max-w-4xl text-center space-y-6 px-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold">
                    THANK YOU FOR VISITING!
                </h2>

                <a
                    href={`#${SECTION_IDS.HERO}`}
                    className={cn('inline-flex items-center space-x-2 font-medium transition-all duration-300 hover:scale-105', isLightTheme ? 'text-indigo-600 hover:text-indigo-800' : 'text-indigo-400 hover:text-indigo-300')}
                >
                    <span>BACK TO TOP</span>
                    <GrLinkTop />
                </a>

                <p className={isLightTheme ? 'text-gray-700' : 'text-gray-400'}>
                    If needed, you can also connect with me via:
                </p>

                <div className="space-y-2 text-lg">
                    {contactItems.map(({ icon: Icon, text, href }) => (
                        <a
                            key={text}
                            href={href}
                            className={cn('flex items-center justify-center space-x-2 transition-colors duration-300', isLightTheme ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-300 hover:text-indigo-400')}
                        >
                            <Icon />
                            <span>{text}</span>
                        </a>
                    ))}
                </div>

                <div className={cn('pt-4 border-t', isLightTheme ? 'border-gray-300' : 'border-gray-700')}>
                    <p className={cn('text-sm', isLightTheme ? 'text-gray-600' : 'text-gray-400')}>
                        © {new Date().getFullYear()} MD Sabbir Hossain. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
