import { useTheme } from '../../contexts/ThemeContext';
import { Section } from '../ui';
import { getThemeClasses } from '../../utils/classNames';
import projects from '../../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { isLightTheme } = useTheme();
  const themeClasses = getThemeClasses(isLightTheme);

  return (
    <Section
      id="projects"
      title="My Works"
      className={`${themeClasses.background} ${themeClasses.text}`}
    >
      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
