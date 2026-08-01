import PropTypes from 'prop-types';
import { FiGithub, FiExternalLink, FiLock, FiCode } from 'react-icons/fi';
import { FaHeartbeat, FaRobot, FaDatabase, FaTools, FaServer, FaBrain } from 'react-icons/fa';
import { Card, Badge, Button } from '../ui';
import { PROJECT_CATEGORIES } from '../../data/projects';

/**
 * Media-block glyph for projects with no screenshot. Keyed by category so the
 * closed-source cards don't all render the same lock — the lock lives in the
 * "private" badge below instead.
 */
const CATEGORY_ICONS = {
    [PROJECT_CATEGORIES.HEALTHCARE]: FaHeartbeat,
    [PROJECT_CATEGORIES.AI]: FaRobot,
    [PROJECT_CATEGORIES.DATA]: FaDatabase,
    [PROJECT_CATEGORIES.BACKEND]: FaServer,
    [PROJECT_CATEGORIES.ML]: FaBrain,
    [PROJECT_CATEGORIES.TOOLS]: FaTools,
};

const ProjectCard = ({ project }) => {
    const { title, category, description, image, stack, github, link, isPrivate } = project;
    const MediaIcon = CATEGORY_ICONS[category] ?? FiCode;

    return (
        <Card hover className="w-full flex flex-col">
            {/* Closed-source work has no screenshot, so the media slot falls back to
                a tinted block that keeps the row rhythm. */}
            {image ? (
                // The personal-project banners are saturated purple/cyan/green and clash
                // with the palette. Desaturated to sit in the system; full colour on hover.
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-40 object-cover saturate-[.45] opacity-90 hover:saturate-100 hover:opacity-100 transition-[filter,opacity] duration-300"
                />
            ) : (
                <div
                    className="w-full h-40 flex items-center justify-center bg-accent/5 text-accent/50 border-b border-line"
                    aria-hidden="true"
                >
                    <MediaIcon size={36} />
                </div>
            )}

            <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-3">
                    <Badge>{category}</Badge>
                    {isPrivate && (
                        <Badge icon={FiLock} variant="muted">
                            Private
                        </Badge>
                    )}
                </div>

                <h3 className="text-base font-semibold tracking-tight mb-2">{title}</h3>

                <p className="text-sm leading-relaxed text-ink-muted mb-4">{description}</p>

                {/* mt-auto pins the stack and actions to the card bottom so they line
                    up across cards of differing description length. */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {stack.map((tech) => (
                        <span
                            key={tech}
                            className="font-mono text-[11px] px-2 py-1 rounded border border-line text-ink-muted"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {(github || link) && (
                    <div className="flex gap-2 mt-4">
                        {github && (
                            <Button
                                as="a"
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline"
                                size="sm"
                                className="flex-1"
                            >
                                <FiGithub className="mr-2" />
                                Code
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
