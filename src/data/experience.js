/**
 * Professional experience — reverse chronological, render order is array order.
 *
 * Employer names are generalised for the current role only, since that work is under NDA.
 * Earlier roles are named. The fully named version lives in resume/resume.html,
 * which is not published to the site.
 *
 * TODO(sabbir): confirm the contract-work date range on entry 3 before publishing.
 */
const experience = [
  {
    id: 1,
    role: 'Backend Engineer (Python)',
    company: 'US-based Healthcare Technology Company',
    companyNote: 'HIPAA-regulated EHR & clinical workflow platform',
    location: 'Remote — Bangladesh',
    period: 'Oct 2025 — Present',
    current: true,
    highlights: [
      'I work on the backend of a multi-tenant EHR and patient-onboarding platform built with FastAPI and PostgreSQL — around 260 modules covering patient records, clinical charting, service tickets, claims and DME orders, all under a strict routes → services → models split.',
      'Durable medical equipment ordering is mine end to end. I built the integration with the vendor API — order bundles, cascading status detection, and the background workers that keep our records and theirs in sync.',
      'I built our integration with a federal healthcare API: OAuth2 client credentials through an enterprise Okta login, then FHIR R4 for eligibility checks, patient alignment and submission status.',
      'I own the claims path — generating X12 837 claim files, getting them to a clearinghouse over SFTP, and wiring up ICD-10 code lookup for coding.',
      "I'm the main contributor to our EHR plugin monorepo — 75 of 144 commits. The one I'm proudest of is an AI scribe that takes a raw visit transcript and turns it into properly coded chart entries across 15+ sections. I've also built a clinical letter and progress-note generator, a shared chart-note data API that other plugins parse against, and the patient intake and consent forms.",
      'I wrote our clinical data migration pipeline end to end. It pulls complete structured records out of scanned clinical PDFs using an LLM with enforced response schemas, pinned to a single region so patient data stays where it should, then loads them into the EHR over FHIR. It ships with a de-identification tool and a synthetic data generator so we can test without touching real patient records.',
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
