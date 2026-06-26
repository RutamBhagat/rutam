type Project = {
  name: string
  description: string
  link: string
  video: string
  blog: string
  id: string
}

export type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  details: string[]
}

type SocialLink = {
  label: string
  link: string
}

export type Education = {
  school: string
  degree: string
  start: string
  end: string
  cgpa: number
}

export const PROJECTS: Project[] = [
  {
    name: 'Google Meet SFU',
    blog: 'https://github.com/RutamBhagat/google-meet-sfu',
    description:
      'Google Meet Clone with WebRTC, mediasoup SFU and FFmpeg HLS output',
    link: 'https://github.com/RutamBhagat/google-meet-sfu',
    video:
      'https://pub-a07f730072074955abe8d7b846f26a5b.r2.dev/portfolio-demo/google-meet-sfu/google-meet-sfu.mp4',
    id: 'project-google-meet-sfu',
  },
  {
    name: 'arXiv7 LangGraph',
    blog: 'https://github.com/RutamBhagat/Langgraph-arXiv',
    description:
      'Context7 clone for arXiv papers using LangGraph, scoped and hybrid retrieval, LangSmith tracing, and eval workflows',
    link: 'https://github.com/RutamBhagat/Langgraph-arXiv',
    video:
      'https://pub-a07f730072074955abe8d7b846f26a5b.r2.dev/portfolio-demo/arxiv7-langgraph/arxiv7-langgraph.mp4',
    id: 'project-arxiv7',
  },
  {
    name: 'Agent Console Alchemyst',
    blog: 'https://github.com/RutamBhagat/agent-console-alchemyst',
    description:
      'Next.js agentic frontend with WebSocket streaming, tool-call rendering, trace timelines, and context diff inspection',
    link: 'https://github.com/RutamBhagat/agent-console-alchemyst',
    video:
      'https://pub-a07f730072074955abe8d7b846f26a5b.r2.dev/portfolio-demo/alchemyst-agent-console/alchemyst-agent-console.mp4',
    id: 'project-agent-console',
  },
  {
    name: 'Intelligent Resume Assistant',
    blog: 'https://github.com/RutamBhagat/intelligent-resume-assistant',
    description:
      'AI hiring assistant that extracts structured resume facts, answers candidate questions and grounding',
    link: 'https://github.com/RutamBhagat/intelligent-resume-assistant',
    video:
      'https://pub-a07f730072074955abe8d7b846f26a5b.r2.dev/portfolio-demo/ai-resume-chat/ai-resume-chat.mp4',
    id: 'project-resume-assistant',
  },
  {
    name: 'ringg',
    blog: 'https://github.com/RutamBhagat/ringg',
    description:
      'Bun TypeScript voice CLI that streams microphone audio to Gemini Live with local VAD and speaker playback',
    link: 'https://github.com/RutamBhagat/ringg',
    video:
      'https://pub-a07f730072074955abe8d7b846f26a5b.r2.dev/portfolio-demo/realtime-voice-chat/realtime-voice-chat.mp4',
    id: 'project-ringg',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Fermion',
    title: 'Software Development Engineer 2',
    start: 'August 2025',
    end: 'October 2025',
    link: 'https://www.mavic.ai/',
    id: 'work00',
    details: [
      'Reworked the PostgreSQL/PgBouncer connection path so the backend no longer depended on one PgBouncer VM, using multiple endpoints, separate pools, endpoint rotation, circuit breakers, and bounded retries',
      'Moved VM-hosted Node workers from manual screen sessions to systemd, adding crash restarts, reboot survival, standard status/log tooling, and blue/green deploys where the new version starts before the old one drains',
      'Fixed Stripe checkout amount conversion for zero-decimal currencies such as JPY, KRW, and VND by applying currency-specific integer minor units instead of treating every currency like USD cents',
      'Made production crashes easier to debug by moving service logs to journald, adding retention limits to protect disk space, and enabling Node diagnostic reports for fatal errors, uncaught exceptions, and shutdown signals',
    ],
  },
  {
    company: 'HireRoger (YC Summer 2024)',
    title: 'Founding Engineer (Contract)',
    start: 'January 2025',
    end: 'June 2025',
    link: 'https://www.hireroger.com/',
    id: 'work01',
    details: [
      'Built backend workflows for an AI SDR/CRM product: campaign setup, ICP filters, mailbox/LinkedIn account connection, lead research, draft approval, scheduling, and automated sending',
      'Designed the campaign orchestration layer that turned user inputs into outreach plans, generated drafts, activation jobs, send schedules, and daily execution tasks across email and LinkedIn',
      "Built LLM personalization flows using reusable templates, research instructions, per-lead context, and fixed sequence structure, so generated messages stayed consistent while still referencing each prospect's company and role",
      'Shipped lead sourcing and enrichment workflows that combined CSV imports, scraped websites, LinkedIn data, email discovery, ICP filters, and Typesense fuzzy search to find, rank, enrich, and save qualified prospects into campaigns',
      'Engineered a sophisticated lead generation tool using Chrome extension architecture and agentic AI workflows',
      'Architected a custom multi-agent AI system achieving 62% performance improvement: reduced response time from 60s to 23s compared to GPT-research-tool',
      'Built internal dashboards for tracking client leads and sales',
    ],
  },
  {
    company: 'Nordstone, UK',
    title: 'Fullstack Developer (Contract)',
    start: 'July 2023',
    end: 'December 2024',
    link: 'https://www.getinterface.tech/',
    id: 'work1',
    details: [
      'Led frontend work for RateMyStation, an anonymous newsroom review platform, building review feeds, news director search, job-detail cards, category navigation, subscription flows, responsive layouts, and cross-browser fixes',
    ],
  },
  {
    company: 'Intelliconnect Systems',
    title: 'Fullstack Developer Intern',
    start: 'December 2022',
    end: 'January 2023',
    link: 'https://www.ycombinator.com/companies/adri-ai',
    id: 'work2',
    details: [
      'Built a Next.js 13 suit-customization frontend and connected product options, customization state, cart, and checkout flows to Shopify',
    ],
  },
]

export const EDUCATION: Education[] = [
  {
    school: 'SKNCOE',
    degree: 'Bachelor of Engineering',
    start: 'August 2019',
    end: '2022',
    cgpa: 9.1,
  },
  {
    school: 'Govt. Polytechnic Malvan',
    degree: 'Diploma',
    start: 'June 2016',
    end: 'May 2019',
    cgpa: 8.52,
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/RutamBhagat/',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/rutamstwt',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rutam-bhagat/',
  },
  {
    label: 'Resume pdf',
    link: 'https://pub-a07f730072074955abe8d7b846f26a5b.r2.dev/resume/Rutam_Bhagat_Resume.pdf',
  },
]

export const EMAIL = 'rutambhagat@gmail.com'
