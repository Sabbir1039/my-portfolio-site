const projects = [
    {
      id: 1,
      title: "Full Featured Blog Platform",
      category: "Full-Stack Development",
      description:
        `A dynamic blogging platform with post CRUD operations, commenting, likes, and
        secure user authentication. Includes a custom profile management system for personalized user experiences.`,
      image: "/projects/blog.png",
      stack: ["Python", "Django", "Bootstrap", "SQLite"],
      github: "https://github.com/Sabbir1039/Blog-with-Django-Bootstrap",
      link: null
    },
    {
      id: 2,
      title: "Expense Tracker",
      category: "Full-Stack Development",
      description:
        "A secure web application for managing personal expenses with full CRUD functionality.",
      image: "/projects/expense-tracker.png",
      stack: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server"],
      github: "https://github.com/Sabbir1039/ExpenseTracker-RazorPages",
      link: null
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Frontend Development",
      description:
        `A modern personal portfolio built with React and Tailwind CSS.
        Implements a custom ThemeContext for light/dark mode and showcases professional projects and skills.`,
      image: "/projects/portfolio.png",
      stack: ["JavaScript", "React", "Tailwind CSS"],
      github: "https://github.com/Sabbir1039/portfolio",
      link: null
    },
    {
      id: 4,
      title: "Weather Application",
      category: "Frontend Development",
      description:
        `A React-based weather application that lets users search cities using the GeoDB API and
         fetches real-time weather details from the OpenWeather API, including temperature, humidity, wind speed, and conditions.`,
      image: "/projects/weather-app.png",
      stack:  ["React", "GeoDB API", "OpenWeather API"],
      github: "https://github.com/Sabbir1039/Weather-app-React-JS",
      link: null
    },
    {
      id: 5,
      title: "Diabetes Prediction App",
      category: "Machine Learning",
      description:
        `A machine learning web app that predicts diabetes risk based on patient data.
        Uses a trained Scikit-learn model served via FastAPI with a Bootstrap-based frontend`,
      image: "/projects/diabetes-prediction.png",
      stack: ["FastAPI", "Scikit Learn", "Bootstrap"],
      github: "https://github.com/Sabbir1039/Diabetes-Prediction-Web-Application-FastAPI",
      link: null
    },
    {
      id: 6,
      title: "Price Pulse Tracker",
      category: "Automation & Web Scraping",
      description:
        `An e-commerce price tracker that monitors product prices and sends email alerts.
        Includes CSV logging for price history and automated scheduling for continuous monitoring.`,
      image: "/projects/price-tracker.png",
      stack: ["Python", "Selenium", "Pandas", "BeautifulSoup"],
      github: "https://github.com/Sabbir1039/PricePulseTracker",
      link: null
    },
    {
      id: 7,
      title: "Data Monitor CLI App",
      category: "Python Automation",
      description:
        `A command-line automation tool that watches directories for new or updated CSV files.
        Automatically preprocesses data using Pandas and Argparse for configurable workflows.`,
      image: "/projects/price-tracker.png",
      stack: ["Python", "Pandas", "Watchdog", "Argparse"],
      github: "https://github.com/yourusername/data-pipeline",
      link: null
    },
    {
      id: 8,
      title: "Web Scraper Bot",
      category: "Web Scraping",
      description:
        `A Python-based scraper for extracting public proxy data.
        Exports results to CSV format for easy data analysis and integration with other systems.`,
      image: "/projects/scraper-bot.png",
      stack: ["Python", "Scrapy", "Pandas"],
      github: "https://github.com/Sabbir1039/Scrape-Proxies/tree/main/scrape_proxies",
      link: null
    },
  ];

  export default projects;