import PropTypes from 'prop-types';

/**
 * One skill category: a mono label column and its chips.
 */
const SkillCard = ({ category, skills }) => (
    <div className="grid md:grid-cols-[160px_1fr] gap-3 md:gap-6 items-baseline">
        <h3 className="font-mono text-xs tracking-[0.14em] uppercase text-ink-subtle">
            {category}
        </h3>
        <div className="flex flex-wrap gap-2">
            {skills.map(({ name, icon: Icon }) => (
                <span
                    key={name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-line text-sm text-ink-muted hover:border-accent/40 hover:text-ink transition-colors duration-200"
                >
                    <Icon className="text-accent" size={14} />
                    {name}
                </span>
            ))}
        </div>
    </div>
);

SkillCard.propTypes = {
    category: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.elementType.isRequired,
        })
    ).isRequired,
};

export default SkillCard;
