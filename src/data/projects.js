/**
 * Project categories
 */
export const PROJECT_CATEGORIES = {
  HEALTHCARE: 'Healthcare Systems',
  AI: 'AI & LLM Engineering',
  DATA: 'Data Engineering',
  BACKEND: 'Backend & APIs',
  ML: 'Machine Learning',
  TOOLS: 'Developer Tools',
};

/**
 * Projects data.
 *
 * Array order is the render order — professional work first, personal repos after.
 * Entries marked `isPrivate` are closed-source company work: no repo link, and the
 * card renders a fallback media block instead of a screenshot.
 */
const projects = [
  {
    id: 1,
    title: 'Healthcare Integration Suite — DME, Federal & Claims',
    category: PROJECT_CATEGORIES.HEALTHCARE,
    description:
      'The three integrations I own inside a multi-tenant EHR platform: durable medical equipment ordering against a vendor API, a federal healthcare API over FHIR R4 behind an enterprise Okta login, and the claims path that generates X12 837 files and delivers them to a clearinghouse over SFTP. Plus the background workers that keep our records and theirs in sync.',
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'FHIR R4', 'OAuth2', 'X12 837'],
    isPrivate: true,
    github: null,
    link: null,
  },
  {
    id: 2,
    title: 'AI Clinical Scribe & EHR Plugin Suite',
    category: PROJECT_CATEGORIES.AI,
    description:
      'My work across a monorepo of plugins extending a commercial EHR, led by an AI scribe that turns a raw visit transcript into structured, coded chart commands across 15+ clinical sections. Also a clinical letter and progress-note generator, a shared chart-note data API other plugins parse against, and the patient intake and consent forms.',
    stack: ['Python', 'Google Gemini', 'HMAC Auth', 'pytest'],
    isPrivate: true,
    github: null,
    link: null,
  },
  {
    id: 3,
    title: 'Clinical Records Migration Pipeline',
    category: PROJECT_CATEGORIES.DATA,
    description:
      'A sole-authored pipeline that extracts complete structured medical records from scanned clinical PDFs and loads them into an EHR over FHIR, using schema-enforced LLM output pinned to a single region for data residency. Ships with an LLM-based PHI de-identification tool and a synthetic test-data generator.',
    stack: ['Python', 'Vertex AI', 'pdfplumber', 'pandas', 'FHIR', 'Poetry', 'mypy'],
    isPrivate: true,
    github: null,
    link: null,
  },
  {
    id: 4,
    title: 'Database Schema Designer',
    category: PROJECT_CATEGORIES.TOOLS,
    description:
      'A local-first ER diagram and schema design tool built as an offline alternative to dbdiagram.io — tables, typed columns with full constraints, foreign-key edges, auto-layout and a minimap. Generates SQL and SVG exports, with everything persisted locally and no data leaving the browser.',
    stack: ['React', 'Vite', 'React Flow', 'Zustand', 'Tailwind CSS', 'Express'],
    isPrivate: true,
    github: null,
    link: null,
  },
  {
    id: 5,
    title: 'Job Scraper API',
    category: PROJECT_CATEGORIES.BACKEND,
    description:
      'A FastAPI service that scrapes live job listings from public boards with Playwright and serves them through clean, typed REST endpoints. Handles JavaScript-rendered pages that plain HTTP scraping cannot reach.',
    image: '/projects/job-scraper.png',
    stack: ['Python', 'FastAPI', 'Playwright', 'Pydantic'],
    github: 'https://github.com/Sabbir1039/Job-Scraper-API',
    link: null,
  },
  {
    id: 6,
    title: 'Diabetes Risk Prediction API',
    category: PROJECT_CATEGORIES.ML,
    description:
      'A Scikit-learn classifier served behind a FastAPI endpoint that scores diabetes risk from patient measurements, with a lightweight web form for manual entry. An early exploration of the clinical decision-support problems I now work on professionally.',
    image: '/projects/diabetes-prediction.png',
    stack: ['Python', 'FastAPI', 'Scikit-learn', 'Bootstrap'],
    github: 'https://github.com/Sabbir1039/Diabetes-Prediction-Web-Application-FastAPI',
    link: null,
  },
  {
    id: 7,
    title: 'Data Monitor CLI',
    category: PROJECT_CATEGORIES.TOOLS,
    description:
      'A command-line watcher that detects new or modified CSV files in a directory and runs a configurable Pandas preprocessing pass automatically. Built to remove the manual step from repetitive data cleanup workflows.',
    image: '/projects/datamonitor-app.png',
    stack: ['Python', 'Pandas', 'Watchdog', 'Argparse'],
    github: 'https://github.com/Sabbir1039/Datamonitor-cli-app',
    link: null,
  },
];

export default projects;
