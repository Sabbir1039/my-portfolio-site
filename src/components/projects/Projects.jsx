import { Section } from '../ui';
import { SECTION_IDS } from '../../constants';
import projects from '../../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <Section id={SECTION_IDS.PROJECTS} eyebrow="02 / projects" title="Things I've built">
    {/* Flex rather than grid so a partial final row centres instead of leaving an
        orphan card hanging on the left. */}
    <div className="flex flex-wrap justify-center gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex"
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  </Section>
);

export default Projects;
