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

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
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
    name: 'Query X ',
    blog: 'blog/query-x',
    description: 'Perplexity Clone.',
    link: 'https://query.borborah.xyz',
    video:
      'https://dibkb-tesseract-images.s3.ap-south-1.amazonaws.com/website/demo-videos/query-x-demo.mp4',
    id: 'project212',
  },
  {
    name: 'Tesseract AI Code Editor',
    blog: 'blog/tesseract-editor-working',
    description:
      'Turn screenshots into editable html/css/js with powerful AI code editor',
    link: 'https://tesseract.borborah.xyz',
    video:
      'https://dibkb-tesseract-images.s3.ap-south-1.amazonaws.com/website/demo-videos/Tesss+Web+Video.mp4',
    id: 'project21',
  },
  {
    name: 'BroTube - Youtube on steroids',
    blog: 'blog/bro-tube',
    description:
      'Chat with Youtube videos, get sentiments of comments, and more',
    link: 'https://brotube.borborah.xyz/',
    video:
      'https://dibkb-tesseract-images.s3.ap-south-1.amazonaws.com/website/demo-videos/brotube.mp4',
    id: 'project443',
  },
  {
    name: 'Amazon SWOT AI Optimizer',
    blog: 'blog/excel-ai',
    description:
      'Analyze reviews, run A/B tests, and improve Amazon listings with AI-powered insights',
    link: 'https://excel.borborah.xyz/',
    video:
      'https://dibkb-tesseract-images.s3.ap-south-1.amazonaws.com/website/demo-videos/Amazon+Excel+Demo.mp4',
    id: 'project2',
  },
  {
    name: 'Cinema Lens',
    blog: 'blog/cinema-lens-working',
    description:
      'Agentic AI movie recommender chatbot using graphs, semantics, web.',
    link: 'https://cinema.borborah.xyz/',
    video:
      'https://dibkb-tesseract-images.s3.ap-south-1.amazonaws.com/website/demo-videos/cinema-lens.mp4',
    id: 'project1',
  },
  {
    name: 'LLM Browser Automation',
    blog: 'blog/browser-automation',
    description:
      'Automate simple tasks with a browser automation chatbot agent',
    link: 'https://github.com/dibkb/moonshot',
    video:
      'https://dibkb-tesseract-images.s3.ap-south-1.amazonaws.com/website/demo-videos/Automation+Video.mp4',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Mavic AI',
    title: 'Full Stack Engineer',
    start: 'November 2025',
    end: 'Present',
    link: 'https://www.mavic.ai/',
    id: 'work00',
    details: [
      'Built an internal LLM evaluation dashboard using Promptfoo, enabling prompt engineers to test model outputs against real user queries',
      'Designed an agent-driven prompt optimization pipeline that auto-improves and versions prompts based on evaluation scores',
      'Implemented a Stripe-backed credit ledger system for auditability, tracking deposits, cancellations, and usage-based deductions',
    ],
  },
  {
    company: 'Roger AI (YC W24)',
    title: 'Founding Engineer',
    start: 'June 2025',
    end: 'October 2025',
    link: 'https://www.hireroger.com/',
    id: 'work01',
    details: [
      'Engineered a sophisticated lead generation tool leveraging Chrome extension architecture and agentic AI workflows',
      'Architected a custom multi-agent AI system achieving 62% performance improvement: reduced response time from 60s to 23s compared to GPT-research-tool',
      'Made internal dashbaords for tracking client leads and sales',
    ],
  },
  {
    company: 'Interface Labs',
    title: 'Full Stack Engineer (Intern)',
    start: 'August 2024',
    end: 'May 2025',
    link: 'https://www.getinterface.tech/',
    id: 'work1',
    details: [
      'Spearheaded development of the entire MVP from scratch — translating Figma designs into a responsive Next.js frontend and building robust FastAPI backend services.',
      'Integrated Amazon Selling Partner (SP) APIs to automate client reporting workflows; implemented scheduled cron jobs for pulling, processing, and persisting SP API reports.',
      'Developed a comprehensive dashboard for visualizing and analyzing SP API data, enabling clients to monitor their sales and inventory trends in real-time.',
      'Delivered production-ready MVPs for early clients like Plum, Mokobara, and Azah, accelerating their onboarding and analytics operations.',
    ],
  },
  {
    company: 'Adri AI (YC W23)',
    title: 'Full Stack Engineer (Contract)',
    start: 'May 2024',
    end: 'August 2024',
    link: 'https://www.ycombinator.com/companies/adri-ai',
    id: 'work2',
    details: [
      'Led the complete redesign and implementation of the company website, enhancing UX/UI consistency and performance.',
      'Developed internal tools and dashboards; integrated LLM-powered APIs with a responsive, dynamic frontend stack.',
      'Designed and tested prompt engineering strategies to improve LLM outputs across use cases like summarization, Q&A, and content generation.',
    ],
  },
  {
    company: 'StockInsights',
    title: 'Frontend Engineer (Intern)',
    start: 'April 2023',
    end: 'June 2023',
    link: 'https://www.stockinsights.ai/',
    id: 'work3',
    details: [
      'Developed the MVP from Figma to production using React, integrating backend APIs and user-role based views for secure access control.',
      'Implemented LangChain-powered streaming UI and pagination to enhance UX across data-heavy screens.',
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]
export const EDUCATION: Education[] = [
  {
    school: 'Indian Institute of Information Technology Lucknow',
    degree:
      'Master of Science (Msc) Machine Learning and Artificial Intelligence',
    start: 'August 2023',
    end: '2025',
    cgpa: 9.09,
  },
  {
    school: 'Dibrugarh University ',
    degree: 'Bachelor of Science (Bsc Honors) Mathematics ',
    start: 'June 2019',
    end: 'May 2022',
    cgpa: 8.82,
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/dibkb',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/fromdibas',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dibkb',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/dib.kb',
  },
  {
    label: 'Resume pdf',
    link: 'https://dibas.borborah.xyz/resume.pdf',
  },
]

export const EMAIL = 'dibas9110@gmail.com'
