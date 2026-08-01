import { FiGithub, FiArrowUp } from 'react-icons/fi';
import { TiSocialLinkedin } from 'react-icons/ti';
import { SiLeetcode } from 'react-icons/si';
import { CONTACT_INFO, SOCIAL_LINKS, SECTION_IDS, PERSONAL_INFO } from '../../constants';

const links = [
    { href: SOCIAL_LINKS.GITHUB, icon: FiGithub, label: 'GitHub' },
    { href: SOCIAL_LINKS.LINKEDIN, icon: TiSocialLinkedin, label: 'LinkedIn' },
    { href: SOCIAL_LINKS.LEETCODE, icon: SiLeetcode, label: 'LeetCode' },
];

const Footer = () => (
    <footer className="bg-surface text-ink border-t border-line transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
                <a
                    href={`mailto:${CONTACT_INFO.EMAIL}`}
                    className="font-mono text-sm text-ink hover:text-accent transition-colors duration-200"
                >
                    {CONTACT_INFO.EMAIL}
                </a>
                <p className="font-mono text-xs text-ink-subtle mt-2">
                    © {new Date().getFullYear()} {PERSONAL_INFO.NAME}
                </p>
            </div>

            <div className="flex items-center gap-1">
                {links.map(({ href, icon: Icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="p-2.5 rounded text-ink-muted hover:text-accent transition-colors duration-200"
                    >
                        <Icon className="text-lg" />
                    </a>
                ))}
                <a
                    href={`#${SECTION_IDS.HERO}`}
                    aria-label="Back to top"
                    className="p-2.5 rounded text-ink-muted hover:text-accent transition-colors duration-200"
                >
                    <FiArrowUp className="text-lg" />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
