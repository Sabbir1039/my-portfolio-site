import PropTypes from 'prop-types';
import { FiGithub, FiExternalLink, FiTag } from 'react-icons/fi';
import { Card, Badge, Button } from '../ui';
import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../utils/classNames';

/**
 * ProjectCard Component - Displays individual project information
 */
const ProjectCard = ({ project }) => {
    const { isLightTheme } = useTheme();
    const { title, category, description, image, stack, github, link } = project;

    return (
        <Card hover>
            {/* Project Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
                loading="lazy"
            />

            {/* Content */}
            <div className="p-6">
                {/* Category Badge */}
                <Badge icon={FiTag} className="mb-3">
                    {category}
                </Badge>

                {/* Title */}
                <h3 className={cn('font-heading text-lg font-semibold mb-2', isLightTheme ? 'text-gray-900' : 'text-gray-100')}>{title}</h3>

                {/* Description */}
                <p className={cn('font-sans text-sm mb-3 line-clamp-3', isLightTheme ? 'text-gray-800' : 'text-gray-300')}>
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                    <p className={cn('font-sans text-sm font-medium mb-2', isLightTheme ? 'text-gray-900' : 'text-gray-300')}>Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                        {stack.map((tech, index) => (
                            <span
                                key={index}
                                className={cn('px-2 py-1 text-xs rounded', isLightTheme ? 'bg-indigo-100 text-indigo-800' : 'bg-indigo-900/30 text-indigo-300')}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <Button
                        as="a"
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                        size="sm"
                    >
                        <FiGithub className="mr-2" />
                        View Code
                    </Button>
                    {link && (
                        <Button
                            as="a"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                            size="sm"
                        >
                            <FiExternalLink className="mr-2" />
                            Demo
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        stack: PropTypes.arrayOf(PropTypes.string).isRequired,
        github: PropTypes.string.isRequired,
        link: PropTypes.string,
    }).isRequired,
};

export default ProjectCard;
