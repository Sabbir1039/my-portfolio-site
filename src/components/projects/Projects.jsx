import { useTheme } from "../../contexts/ThemeContext";
import { FiGithub } from "react-icons/fi";
import projects from "../../data/projects";

const Projects = () => {
  const { isLightTheme } = useTheme();
  const theme = isLightTheme ? "light" : "dark";

  return (
    <section
      id="projects"
      className={`py-20 transition-colors duration-300 ${
        isLightTheme ? "bg-white text-gray-900" : "bg-gray-800 text-gray-100"
      }`}
    >
      {/* Section Heading */}
      <h1
        className="text-center uppercase text-2xl md:text-3xl font-heading tracking-wide mb-12 relative flex items-center justify-center"
      >
        My Works
      </h1>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`rounded-2xl shadow-lg overflow-hidden transition-colors duration-300 ${
              isLightTheme ? "bg-white" : "bg-gray-900"
            }`}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              {/* Category Badge */}
              <span className="font-sans inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-400 dark:bg-indigo-900 dark:text-indigo-300 mb-3"
                    style={{ fontSize: "11px" }}
              >
                {project.category}
              </span>

              {/* Title */}
              <h3 className="font-heading text-lg mb-2">{project.title}</h3>

              {/* Description */}
              <p className="font-sans text-sm mb-2">
                {project.description}
              </p>

              <p className="font-sans text-sm mb-2">
                <span>Stack: </span>
                { project.stack.map((stack, index) => (
                  <span key={index}> {stack} {index < project.stack.length -1 && "|"} </span>
                  ))}
              </p>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                <FiGithub className="text-md" /> View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
