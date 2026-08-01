import { Section, Badge } from '../ui';
import { cn } from '../../utils/classNames';
import { SECTION_IDS } from '../../constants';
import experience from '../../data/experience';

const Experience = () => (
    <Section id={SECTION_IDS.EXPERIENCE} eyebrow="01 / Experience" title="Where I've worked">
        <div className="space-y-14">
            {experience.map((job) => (
                <article key={job.id} className="border-l-2 border-line pl-6 relative">
                    {/* Accent tick marks the entry against the muted rail */}
                    <span
                        className={cn(
                            'absolute -left-[5px] top-1.5 w-2 h-2 rounded-full',
                            job.current ? 'bg-accent' : 'bg-line'
                        )}
                        aria-hidden="true"
                    />

                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                        <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                        {job.current && <Badge variant="accent">Current</Badge>}
                    </div>

                    <p className="font-mono text-xs text-ink-muted">
                        {job.company} · {job.location} · {job.period}
                    </p>

                    {job.companyNote && (
                        <p className="font-mono text-xs text-ink-subtle mt-1">{job.companyNote}</p>
                    )}

                    <ul className="mt-5 space-y-3">
                        {job.highlights.map((highlight) => (
                            <li
                                key={highlight}
                                className="text-sm leading-relaxed text-ink-muted pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-accent"
                            >
                                {highlight}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mt-5">
                        {job.stack.map((tech) => (
                            <span
                                key={tech}
                                className="font-mono text-[11px] px-2 py-1 rounded border border-line text-ink-muted"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    </Section>
);

export default Experience;
