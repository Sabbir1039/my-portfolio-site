
import {
  SiReact, SiTailwindcss, SiHtml5, SiCss3,
  SiDjango, SiFastapi,
  SiPython, SiJavascript,
  SiScrapy, SiSelenium, SiPandas,
  SiMongodb, SiGit, SiDocker
} from "react-icons/si";

// Using generic icons for technologies that might not have specific ones
import { IoCodeSlash } from "react-icons/io5";

// C# and VS Code icons - using a generic code icon
import { FaCode } from "react-icons/fa";

// Blazor icon - using a generic code icon since SiMicrosoft might not be appropriate
import { FaDotCircle } from "react-icons/fa";

// SQL/SQL Server icon - using a database icon
import { FaDatabase } from "react-icons/fa";

const skillsData = {
  Frontend: [
    { name: "React", icon: SiReact },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 }
  ],
  Backend: [
    { name: "Django", icon: SiDjango },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Blazor", icon: FaDotCircle }
  ],
  Languages: [
    { name: "Python", icon: SiPython },
    { name: "JavaScript", icon: SiJavascript },
    { name: "C#", icon: FaCode },
    { name: "SQL", icon: FaDatabase }
  ],
  Libraries: [
    { name: "Scrapy", icon: SiScrapy },
    { name: "Selenium", icon: SiSelenium },
    { name: "BeautifulSoup", icon: IoCodeSlash },
    { name: "Pandas", icon: SiPandas }
  ],
  Databases: [
    { name: "SQL Server", icon: FaDatabase },
    { name: "MongoDB", icon: SiMongodb }
  ],
  Tools: [
    { name: "Git", icon: SiGit },
    { name: "VS Code", icon: FaCode },
    { name: "Docker", icon: SiDocker }
  ],
};

export default skillsData;