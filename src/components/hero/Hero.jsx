import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";

const Hero = () => {
  const { isLightTheme } = useTheme();
  const theme = isLightTheme ? "light" : "dark";

  return (
    <section
        id="hero"
        className={`min-h-screen flex items-center pt-20 sm:pt-16 md:pt-0 transition-colors duration-300 ${
            isLightTheme ? "bg-white text-gray-900" : "bg-gray-800 text-gray-100"
        }`}
        >
        {/* Full width container with padding */}
        <div className="w-full px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between max-w-[1280px] mx-auto">
            {/* Image */}
            <div className="flex-1 flex justify-center md:order-last mb-1 md:mb-0">
                <img
                    src="/src/assets/images/myphoto.jpg"
                    alt="owner"
                    className={`w-64 md:w-80 rounded-full shadow-lg border-4 ${
                    isLightTheme ? "border-gray-200" : "border-gray-700"
                    }`}
                />
            </div>

            {/* Text content */}
            <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-lg text-gray-500 dark:text-gray-400">Hello, I&apos;m</h3>
                <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight">
                    MD SABBIR HOSSAIN
                </h1>
                <h4 className="font-heading text-xl md:text-2xl font-semibold mt-2 text-indigo-600 dark:text-indigo-400">
                    Full-Stack Developer & Python Automation Enthusiast
                </h4>

                <p className="font-sans mt-6 leading-relaxed max-w-xl text-justify mx-auto">
                    Welcome to my portfolio! I'm a versatile software developer with expertise in full-stack web development,
                    frontend engineering, and Python-based automation. I build responsive and dynamic web applications using React,
                    Tailwind, Django, ASP.NET Core, and FastAPI. My work includes creating personal projects,
                    data-driven automation tools, web scrapers, and machine learning applications.
                    Passionate about writing clean, efficient code and delivering impactful solutions that combine innovation with practicality.
                </p>

                {/* Buttons & Social Links */}
                <div className="mt-6 flex flex-col md:flex-row gap-4 items-center md:items-start">
                    <a
                    href="/CV-of-Md-Sabbir-Hossain.pdf"
                    download="Sabbir Hossain"
                    className="font-sans px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                    Download Resume
                    </a>

                    <div className="flex gap-6 items-center self-center">
                        <a href="https://www.linkedin.com/in/sabbir-hossain39/" className="text-4xl hover:text-blue-500 transition">
                            <TiSocialLinkedin />
                        </a>
                        <a href="https://twitter.com/Sabbir_Ho66ain" className="text-4xl hover:text-blue-500 transition">
                            <TiSocialTwitter />
                        </a>
                        <a href="https://github.com/Sabbir1039/" className="text-3xl hover:text-blue-500 transition">
                            <FiGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
