import { useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Section } from '../ui';
import { getThemeClasses } from '../../utils/classNames';
import skillsData from '../../data/skills';
import SkillCard from './SkillCard';

const Skills = () => {
  const { isLightTheme } = useTheme();
  const themeClasses = getThemeClasses(isLightTheme);

  // Check if skillsData is valid
  const isValidSkillsData = useMemo(
    () =>
      skillsData &&
      typeof skillsData === 'object' &&
      Object.keys(skillsData).length > 0,
    []
  );

  if (!isValidSkillsData) {
    return (
      <Section
        id="skills"
        title="Skills"
        fullHeight
        className={`${themeClasses.background} ${themeClasses.text}`}
      >
        <div className="text-center py-12">
          <p className="text-lg">No skills data available.</p>
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      fullHeight
      className={`${themeClasses.background} ${themeClasses.text}`}
    >
      {/* Modern stacked layout with better spacing */}
      <div className="space-y-8 max-w-5xl mx-auto">
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCard key={category} category={category} skills={skills} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
