import { Section } from '../ui';
import { SECTION_IDS } from '../../constants';
import skillsData from '../../data/skills';
import SkillCard from './SkillCard';

const Skills = () => (
  <Section id={SECTION_IDS.SKILLS} eyebrow="03 / skills" title="What I work with">
    <div className="space-y-8">
      {Object.entries(skillsData).map(([category, skills]) => (
        <SkillCard key={category} category={category} skills={skills} />
      ))}
    </div>
  </Section>
);

export default Skills;
