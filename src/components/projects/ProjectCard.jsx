import PropTypes from 'prop-types';
import { FiGithub, FiExternalLink, FiTag, FiLock, FiCode } from 'react-icons/fi';
import { FaHeartbeat, FaRobot, FaDatabase, FaTools, FaServer, FaBrain } from 'react-icons/fa';
import { Card, Badge, Button } from '../ui';
import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../utils/classNames';
import { PROJECT_CATEGORIES } from '../../data/projects';

/**
 * Media-block glyph for projects with no screenshot. Keyed by category so the
 * closed-source cards don't all render the same lock — the lock lives in the
 * "Private" badge below instead.
 */
const CATEGORY_ICONS = {
    [PROJECT_CATEGORIES.HEALTHCARE]: FaHeartbeat,
    [PROJECT_CATEGORIES.AI]: FaRobot,
    [PROJECT_CATEGORIES.DATA]: FaDatabase,
    [PROJECT_CATEGORIES.BACKEND]: FaServer,
    [PROJECT_CATEGORIES.ML]: FaBrain,
    [PROJECT_CATEGORIES.TOOLS]: FaTools,
};

/**
 * ProjectCard Component - Displays individual project information
 */
const ProjectCard = ({ project }) => {
    const { isLightTheme } = useTheme();
    const { title, category, description, image, stack, github, link, isPrivate } = project;
    const MediaIcon = CATEGORY_ICONS[category] ?? FiCode;

    return (
        <Card hover className="w-full flex flex-col">
            {/* Project Image — closed-source work has no screenshot to show, so the
                media slot falls back to a gradient block that keeps the row rhythm. */}
            {image ? (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                />
            ) : (
                <div
                    className={cn(
                        'w-full h-48 flex items-center justify-center bg-gradient-to-br',
                        isLightTheme
                            ? 'from-indigo-100 to-blue-100 text-indigo-400'
                            : 'from-indigo-900/40 to-blue-900/40 text-indigo-300/80'
                    )}
                    aria-hidden="true"
                >
                    <MediaIcon size={44} />
                </div>
            )}

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                    <Badge icon={FiTag}>{category}</Badge>
                    {isPrivate && (
                        <Badge icon={FiLock} variant="warning">
                            Private — company work
                        </Badge>
                    )}
                </div>

                {/* Title */}
                <h3 className={cn('font-heading text-lg font-semibold mb-2', isLightTheme ? 'text-gray-900' : 'text-gray-100')}>{title}</h3>

                {/* Description */}
                <p className={cn('font-sans text-sm mb-3', isLightTheme ? 'text-gray-800' : 'text-gray-300')}>
                    {description}
                </p>

                {/* Tech Stack — mt-auto pins it and the actions to the card bottom
                    so they line up across cards of differing description length. */}
                <div className="mb-4 mt-auto">
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

                {/* Actions — omitted entirely when there is nothing to link to */}
                {(github || link) && (
                    <div className="flex gap-3">
                        {github && (
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
                        )}
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
                )}
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
        image: PropTypes.string,
        stack: PropTypes.arrayOf(PropTypes.string).isRequired,
        github: PropTypes.string,
        link: PropTypes.string,
        isPrivate: PropTypes.bool,
    }).isRequired,
};

export default ProjectCard;
