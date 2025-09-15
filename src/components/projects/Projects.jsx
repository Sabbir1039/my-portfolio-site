import { useTheme } from "../../contexts/ThemeContext";
import { FiGithub } from "react-icons/fi";
import { FiTag } from "react-icons/fi";
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
              <span
                className="
                  font-sans inline-flex items-center gap-2 mb-2 px-1.5 py-1.5 rounded-md
                  bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-600 
                  dark:from-indigo-900 dark:to-indigo-800 dark:text-indigo-300 
                  text-xs font-medium shadow-sm hover:shadow-md transition-all duration-200
                "
              >
                <FiTag className="text-indigo-500 dark:text-indigo-400" size={14} />
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
                className="
                  inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                  bg-gradient-to-r from-indigo-600 to-indigo-500
                  text-white font-medium shadow-md
                  hover:from-indigo-700 hover:to-indigo-600
                  active:scale-95 transition-all duration-200
                "
              >
                <FiGithub
                  className="text-lg transition-transform duration-200 group-hover:rotate-12"
                />
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
