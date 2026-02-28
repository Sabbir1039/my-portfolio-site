import {
  SiReact,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiFastapi,
  SiPython,
  SiJavascript,
  SiScrapy,
  SiSelenium,
  SiPandas,
  SiMongodb,
  SiGit,
  SiDocker,
  SiLinux,
  SiGnubash,
} from 'react-icons/si';
import { IoCodeSlash } from 'react-icons/io5';
import { FaCode, FaDotCircle, FaDatabase } from 'react-icons/fa';

/**
 * Skill categories
 */
export const SKILL_CATEGORIES = {
  FRONTEND: 'Frontend',
  BACKEND: 'Backend',
  LANGUAGES: 'Languages',
  LIBRARIES: 'Libraries',
  DATABASES: 'Databases',
  TOOLS: 'Tools',
};

/**
 * Skills data organized by category
 */
const skillsData = {
  [SKILL_CATEGORIES.FRONTEND]: [
    { name: 'React', icon: SiReact },
    { name: 'Bootstrap', icon: SiBootstrap },
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
  ],
  [SKILL_CATEGORIES.BACKEND]: [
    { name: 'Django', icon: SiDjango },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Blazor', icon: FaDotCircle },
  ],
  [SKILL_CATEGORIES.LANGUAGES]: [
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Bash', icon: SiGnubash },
    { name: 'SQL', icon: FaDatabase },
  ],
  [SKILL_CATEGORIES.LIBRARIES]: [
    { name: 'Scrapy', icon: SiScrapy },
    { name: 'Selenium', icon: SiSelenium },
    { name: 'BeautifulSoup', icon: IoCodeSlash },
    { name: 'Pandas', icon: SiPandas },
  ],
  [SKILL_CATEGORIES.DATABASES]: [
    { name: 'SQL Server', icon: FaDatabase },
    { name: 'MongoDB', icon: SiMongodb },
  ],
  [SKILL_CATEGORIES.TOOLS]: [
    { name: 'Git', icon: SiGit },
    { name: 'VS Code', icon: FaCode },
    { name: 'Docker', icon: SiDocker },
    { name: 'Linux', icon: SiLinux },
  ],
};

export default skillsData;