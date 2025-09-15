import { useMemo } from "react";
import skillsData from "../../data/skills";
import { useTheme } from "../../contexts/ThemeContext";

const Skills = () => {
  const { isLightTheme } = useTheme();

  // Memoize the section classes to prevent unnecessary re-renders
  const sectionClasses = useMemo(() =>
    `min-h-screen py-20 transition-colors duration-300 ${
      isLightTheme ? "bg-white text-gray-900" : "bg-gray-800 text-gray-100"
    }`,
    [isLightTheme]
  );

  // Check if skillsData is valid
  const isValidSkillsData = useMemo(() =>
    skillsData && typeof skillsData === 'object' && Object.keys(skillsData).length > 0,
    []
  );

  // Theme-based classes for skill items
  const skillItemClasses = useMemo(() =>
    `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      isLightTheme
        ? "bg-blue-50 text-blue-800 hover:bg-blue-100"
        : "bg-blue-900/30 text-blue-100 hover:bg-blue-900/50"
    }`,
    [isLightTheme]
  );

  // Theme-based classes for category titles
  const categoryTitleClasses = useMemo(() =>
    `text-lg font-semibold mb-3 ${
      isLightTheme ? "text-gray-800" : "text-gray-200"
    }`,
    [isLightTheme]
  );

  if (!isValidSkillsData) {
    return (
      <section
        id="skills"
        className={sectionClasses}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-center uppercase text-2xl md:text-3xl font-heading tracking-wide mb-12 relative flex items-center justify-center">
            Skills
          </h1>
          <div className="text-center py-12">
            <p className="text-lg">No skills data available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="skills"
      className={sectionClasses}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-center uppercase text-2xl md:text-3xl font-heading tracking-wide mb-12 relative flex items-center justify-center">
          Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className={`rounded-xl p-6 transition-all duration-300 ${
                isLightTheme
                  ? "bg-gray-50 hover:bg-gray-100"
                  : "bg-gray-700/50 hover:bg-gray-700"
              }`}
            >
              <h2 className={categoryTitleClasses}>{category}</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={`${skill.name}-${index}`}
                      className={skillItemClasses}
                    >
                      <IconComponent className="text-xl" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
