import PropTypes from 'prop-types';
import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../utils/classNames';

/**
 * SkillCard Component - Displays skills in a category with modern horizontal layout
 */
const SkillCard = ({ category, skills }) => {
    const { isLightTheme } = useTheme();

    const containerClasses = cn(
        'group transition-all duration-300 border-l-4 pl-6 py-4',
        isLightTheme
            ? 'border-indigo-400 hover:border-indigo-600'
            : 'border-indigo-500 hover:border-indigo-400'
    );

    const skillItemClasses = cn(
        'inline-flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300',
        'hover:scale-110 hover:-translate-y-1 cursor-default shadow-sm hover:shadow-lg',
        isLightTheme
            ? 'bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 hover:from-indigo-100 hover:to-blue-100'
            : 'bg-gradient-to-r from-indigo-900/40 to-blue-900/40 text-indigo-200 hover:from-indigo-800/60 hover:to-blue-800/60'
    );

    return (
        <div className={containerClasses}>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h3
                    className={cn(
                        'text-base font-bold uppercase tracking-wider min-w-[140px]',
                        isLightTheme ? 'text-gray-800' : 'text-gray-300'
                    )}
                >
                    {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                            <div key={`${skill.name}-${index}`} className={skillItemClasses}>
                                <IconComponent className="text-lg" />
                                <span className="font-medium text-sm">{skill.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

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
