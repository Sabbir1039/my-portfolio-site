import { TiSocialLinkedin } from 'react-icons/ti';
import { SiLeetcode } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { Button } from '../ui';
import { PERSONAL_INFO, SOCIAL_LINKS, SECTION_IDS } from '../../constants';

const socialLinks = [
    { href: SOCIAL_LINKS.GITHUB, icon: FiGithub, label: 'GitHub' },
    { href: SOCIAL_LINKS.LINKEDIN, icon: TiSocialLinkedin, label: 'LinkedIn' },
    { href: SOCIAL_LINKS.LEETCODE, icon: SiLeetcode, label: 'LeetCode' },
];

const Hero = () => (
    // py must clear the fixed h-14 navbar at every breakpoint.
    <section
        id={SECTION_IDS.HERO}
        className="bg-surface text-ink min-h-screen flex items-center py-28 transition-colors duration-300"
    >
        <div className="w-full max-w-5xl mx-auto px-6">
            {/* Photo is order-1 on desktop only. On mobile the text leads, so the
                first screen is the name and role rather than a portrait. */}
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
                <div>
                    <p className="font-mono text-xs tracking-[0.18em] uppercase text-accent mb-4">
                        {PERSONAL_INFO.GREETING}
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-4">
                        {PERSONAL_INFO.NAME}
                    </h1>

                    <p className="font-mono text-sm md:text-base text-ink-muted mb-6">
                        {PERSONAL_INFO.TITLE}
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-ink-muted max-w-xl mb-4">
                        {PERSONAL_INFO.BIO}
                    </p>

                    <p className="font-mono text-xs text-ink-subtle max-w-xl mb-8">
                        {PERSONAL_INFO.NDA_NOTE}
                    </p>

                    <div className="flex flex-wrap gap-5 items-center">
                        {/* No resume download: the CV names the employer and clients,
                            and this site is deliberately anonymous. Sent on request. */}
                        <Button as="a" href={`#${SECTION_IDS.CONTACT}`} size="lg">
                            Get in Touch
                        </Button>

                        <div className="flex gap-1">
                            {socialLinks.map(({ href, icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="p-2.5 rounded text-ink-muted hover:text-accent transition-colors duration-200"
                                >
                                    <Icon className="text-xl" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* No order utilities: DOM order is text-then-photo, which is what we
                    want stacked on mobile. The grid puts them side by side on desktop. */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/myphoto.jpg"
                        alt={PERSONAL_INFO.NAME}
                        className="w-44 h-44 md:w-full md:h-auto md:max-w-[280px] rounded-full md:rounded-lg object-cover border border-line"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
