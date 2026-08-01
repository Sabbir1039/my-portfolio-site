/**
 * Professional experience — reverse chronological, render order is array order.
 *
 * Employers are named. Healthcare vendors, clients and the specific systems
 * integrated with are NOT — that work is under NDA, so highlights describe the
 * engineering generically ("a federal healthcare API", "the vendor API").
 * resume/resume.html is the fully named version and is gitignored, not published.
 *
 * TODO(sabbir): confirm the contract-work date range on entry 3 before publishing.
 */
const experience = [
  {
    id: 1,
    role: 'Backend Engineer (Python)',
    company: 'Ekagra Health Inc.',
    companyNote: 'HIPAA-regulated EHR & clinical workflow platform',
    location: 'Remote — Bangladesh',
    period: 'Oct 2025 — Present',
    current: true,
    highlights: [
      'Backend work on a multi-tenant EHR and patient-onboarding platform — ~260 FastAPI + PostgreSQL modules covering records, charting, tickets, claims and DME orders, under a strict routes → services → models split.',
      'DME ordering, end to end: the vendor API integration, order bundles, cascading status detection, and the background workers that keep our records and theirs in sync.',
      'A federal healthcare API integration — OAuth2 client credentials through an enterprise Okta login, then FHIR R4 for eligibility, patient alignment and submission status.',
      'The claims path: generating X12 837 files, delivering them to a clearinghouse over SFTP, and ICD-10 code lookup for coding.',
      'Main contributor to our EHR plugin monorepo (75 of 144 commits). Proudest of an AI scribe that turns a raw visit transcript into properly coded chart entries across 15+ sections; also a letter and progress-note generator, a shared chart-note data API, and the patient intake and consent forms.',
      'Our clinical data migration pipeline, written end to end — pulls structured records out of scanned PDFs via a region-pinned LLM with enforced response schemas, loads them over FHIR, and ships with a de-identification tool and synthetic data generator so we can test without real patient records.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Alembic',
      'Pydantic',
      'FHIR R4',
      'Docker',
      'Linux',
      'Git',
    ],
  },
  {
    id: 2,
    role: 'Software Engineering Intern',
    company: 'Fintech Hub Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Feb 2025 — May 2025',
    current: false,
    highlights: [
      'Built and maintained an enterprise web application in Blazor, with much of the business logic living in Oracle stored procedures.',
      'Rewrote several of the heavier business-logic queries and got data retrieval about 20% faster.',
      'This is where I learned to work in a team properly — a six-person Agile group with real version-control discipline and peer review on everything that shipped.',
      'Brought the UI into line across the product by standardising on a shared set of styled components.',
    ],
    stack: ['C#', 'Blazor', '.NET', 'Oracle DB', 'Agile'],
  },
  {
    id: 3,
    // Deliberately framed as independent work rather than "Freelance Developer" —
    // the work was intermittent, so this title sets the right expectation and
    // doesn't invite a request for a client reference that doesn't exist.
    role: 'Independent Projects & Contract Work',
    company: 'Self-directed',
    location: 'Remote — Bangladesh',
    period: 'Jan 2023 — Dec 2024',
    current: false,
    highlights: [
      'A mix of small contract jobs and self-directed projects: scrapers and automation tools for price monitoring with email alerts, job-listing aggregation, and structured data extraction from sites with no API to work with.',
      'Mostly Python — Scrapy, Selenium and Playwright for the JavaScript-heavy pages, Pandas for cleaning up what came back, and scheduled runs so the data stayed current. Several of these are public on my GitHub.',
    ],
    stack: ['Python', 'Scrapy', 'Selenium', 'Playwright', 'Pandas'],
  },
];

export default experience;
