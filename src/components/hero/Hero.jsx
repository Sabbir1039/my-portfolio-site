import { TiSocialLinkedin } from 'react-icons/ti';
import { SiLeetcode } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from '../ui';
import { PERSONAL_INFO, SOCIAL_LINKS, CONTACT_INFO } from '../../constants';
import { getThemeClasses, cn } from '../../utils/classNames';

const Hero = () => {
    const { isLightTheme } = useTheme();
    const themeClasses = getThemeClasses(isLightTheme);

    const socialLinks = [
        { href: SOCIAL_LINKS.LINKEDIN, icon: TiSocialLinkedin, label: 'LinkedIn' },
        { href: SOCIAL_LINKS.LEETCODE, icon: SiLeetcode, label: 'LeetCode' },
        { href: SOCIAL_LINKS.GITHUB, icon: FiGithub, label: 'GitHub' },
    ];

    return (
        <section
            id="hero"
            className={`min-h-screen flex items-center pt-20 sm:pt-16 md:pt-0 transition-colors duration-300 relative overflow-hidden ${themeClasses.background} ${themeClasses.text}`}
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${isLightTheme ? 'bg-indigo-300' : 'bg-indigo-600'}`}></div>
                <div className={`absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${isLightTheme ? 'bg-blue-300' : 'bg-blue-600'}`}></div>
            </div>

            <div className="w-full px-6 md:px-12 lg:px-20 relative z-10 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content - Left Side */}
                    <div className="space-y-6 order-2 md:order-1">
                        <div className="space-y-2">
                            <p className={cn('text-sm md:text-base font-medium uppercase tracking-wider', isLightTheme ? 'text-indigo-600' : 'text-indigo-400')}>
                                {PERSONAL_INFO.GREETING}
                            </p>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                                <span className={cn('bg-gradient-to-r bg-clip-text text-transparent', isLightTheme ? 'from-indigo-600 to-blue-600' : 'from-indigo-400 to-blue-400')}>
                                    {PERSONAL_INFO.NAME.split(' ')[0]}
                                </span>
                                <br />
                                <span className={isLightTheme ? 'text-gray-900' : 'text-white'}>
                                    {PERSONAL_INFO.NAME.split(' ').slice(1).join(' ')}
                                </span>
                            </h1>
                            <h2 className={cn('text-xl md:text-2xl font-semibold pt-2', isLightTheme ? 'text-gray-900' : 'text-gray-200')}>
                                {PERSONAL_INFO.TITLE}
                            </h2>
                        </div>

                        <p className={cn('text-base md:text-lg leading-relaxed max-w-2xl', isLightTheme ? 'text-gray-800' : 'text-gray-300')}>
                            {PERSONAL_INFO.BIO}
                        </p>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4 items-center pt-4">
                            <Button
                                as="a"
                                href={CONTACT_INFO.RESUME_PATH}
                                download="CV-of-Md.-Sabbir-Hossain.pdf"
                                size="lg"
                                className="font-sans shadow-lg"
                            >
                                Download Resume
                            </Button>

                            <div className="flex gap-4">
                                {socialLinks.map(({ href, icon: Icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className={cn(
                                            'p-3 rounded-full transition-all duration-300 hover:scale-110',
                                            isLightTheme
                                                ? 'bg-gray-100 hover:bg-indigo-100 text-gray-800 hover:text-indigo-600'
                                                : 'bg-gray-800 hover:bg-indigo-900 text-gray-300 hover:text-indigo-400'
                                        )}
                                    >
                                        <Icon className="text-2xl" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Profile Image - Right Side */}
                    <div className="flex justify-center md:justify-end order-1 md:order-2">
                        <div className="relative">
                            {/* Decorative ring */}
                            <div className={cn(
                                'absolute inset-0 rounded-full blur-xl opacity-30',
                                isLightTheme ? 'bg-indigo-400' : 'bg-indigo-600'
                            )}></div>
                            <img
                                src="/myphoto.jpg"
                                alt={PERSONAL_INFO.NAME}
                                className={cn(
                                    'relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover',
                                    'ring-8 ring-offset-4 transition-all duration-300 hover:scale-[1.02]',
                                    isLightTheme
                                        ? 'ring-indigo-100 ring-offset-white'
                                        : 'ring-indigo-900/30 ring-offset-gray-800'
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
