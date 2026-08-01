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
      title="Projects"
      className={`${themeClasses.background} ${themeClasses.text}`}
    >
      {/* Flex rather than grid so a partial final row centres instead of leaving
          an orphan card hanging on the left. Basis values mirror the old
          sm:grid-cols-2 / lg:grid-cols-3 breakpoints, minus the gap. */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] flex"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
