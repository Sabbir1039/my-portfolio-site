import { useTheme } from '../../contexts/ThemeContext';
import { Section, Badge } from '../ui';
import { getThemeClasses, cn } from '../../utils/classNames';
import { SECTION_IDS } from '../../constants';
import experience from '../../data/experience';

const Experience = () => {
    const { isLightTheme } = useTheme();
    const themeClasses = getThemeClasses(isLightTheme);

    return (
        <Section
            id={SECTION_IDS.EXPERIENCE}
            title="Experience"
            className={`${themeClasses.background} ${themeClasses.text}`}
        >
            <div className="space-y-12 max-w-4xl mx-auto">
                {experience.map((job) => (
                    <div
                        key={job.id}
                        className={cn(
                            'border-l-4 pl-6 py-2 transition-colors duration-300',
                            isLightTheme ? 'border-indigo-400' : 'border-indigo-500'
                        )}
                    >
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                            <h3 className="font-heading text-lg md:text-xl font-semibold">
                                {job.role}
                            </h3>
                            {job.current && <Badge variant="success">Current</Badge>}
                        </div>

                        <p
                            className={cn(
                                'font-sans text-sm',
                                isLightTheme ? 'text-gray-700' : 'text-gray-400'
                            )}
                        >
                            {job.company} · {job.location} · {job.period}
                        </p>

                        {job.companyNote && (
                            <p
                                className={cn(
                                    // gray-500 on gray-800 measures 3.04:1 — below AA.
                                    'font-sans text-xs italic mb-4',
                                    isLightTheme ? 'text-gray-600' : 'text-gray-400'
                                )}
                            >
                                {job.companyNote}
                            </p>
                        )}

                        <ul className="list-disc list-outside pl-5 space-y-2 mb-5 font-sans text-sm leading-relaxed">
                            {job.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {job.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className={cn(
                                        'px-2 py-1 text-xs rounded',
                                        isLightTheme
                                            ? 'bg-indigo-100 text-indigo-800'
                                            : 'bg-indigo-900/30 text-indigo-300'
                                    )}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
