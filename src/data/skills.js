import {
  SiPython,
  SiJavascript,
  SiGnubash,
  SiFastapi,
  SiDjango,
  SiPydantic,
  SiSqlalchemy,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiLinux,
  SiPostman,
  SiAmazonwebservices,
  SiGithubactions,
  SiPandas,
  SiSelenium,
  SiPytest,
  SiGooglegemini,
} from 'react-icons/si';
import { FaCode, FaDatabase, FaHeartbeat } from 'react-icons/fa';

/**
 * Skill categories
 */
export const SKILL_CATEGORIES = {
  LANGUAGES: 'Languages',
  BACKEND: 'Backend',
  FRONTEND: 'Frontend',
  DATABASES: 'Databases',
  TOOLS: 'Tools',
  DOMAIN: 'Domain & AI',
  LEARNING: 'Currently Learning',
};

/**
 * Skills data organized by category
 */
const skillsData = {
  [SKILL_CATEGORIES.LANGUAGES]: [
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'SQL', icon: FaDatabase },
    { name: 'Bash', icon: SiGnubash },
  ],
  [SKILL_CATEGORIES.BACKEND]: [
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Pydantic', icon: SiPydantic },
    { name: 'SQLAlchemy', icon: SiSqlalchemy },
    { name: 'Alembic', icon: FaDatabase },
    { name: 'Django', icon: SiDjango },
    { name: 'pytest', icon: SiPytest },
  ],
  [SKILL_CATEGORIES.FRONTEND]: [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
  ],
  [SKILL_CATEGORIES.DATABASES]: [
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
  ],
  [SKILL_CATEGORIES.TOOLS]: [
    { name: 'Docker', icon: SiDocker },
    { name: 'Linux', icon: SiLinux },
    { name: 'Bash', icon: SiGnubash },
    { name: 'Git', icon: SiGit },
    { name: 'Postman', icon: SiPostman },
    { name: 'VS Code', icon: FaCode },
  ],
  [SKILL_CATEGORIES.DOMAIN]: [
    { name: 'FHIR / HL7', icon: FaHeartbeat },
    { name: 'LLM Integration', icon: SiGooglegemini },
    { name: 'Pandas', icon: SiPandas },
    { name: 'Selenium', icon: SiSelenium },
  ],
  [SKILL_CATEGORIES.LEARNING]: [
    { name: 'AWS', icon: SiAmazonwebservices },
    { name: 'CI/CD', icon: SiGithubactions },
    { name: 'Docker Compose', icon: SiDocker },
  ],
};

export default skillsData;
