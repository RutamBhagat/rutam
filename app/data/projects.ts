type ProjectBase = {
  name: string
  description: string
  link: string
  blog: string
  readme: string
  id: string
}

type Project =
  | (ProjectBase & {
      video: string
      image?: never
    })
  | (ProjectBase & {
      image: string
      video?: never
    })

export const PROJECTS: Project[] = [
  {
    name: 'Google Meet SFU',
    blog: '/blog/google-meet-sfu',
    readme:
      'https://raw.githubusercontent.com/RutamBhagat/google-meet-sfu/refs/heads/main/README.md',
    description:
      'Google Meet Clone with WebRTC, mediasoup SFU and FFmpeg HLS output',
    link: 'https://github.com/RutamBhagat/google-meet-sfu',
    video:
      'https://pub-a07f730072074955abe8d7b846f26a5b.r2.dev/portfolio-demo/google-meet-sfu/google-meet-sfu.mp4',
    id: 'project-google-meet-sfu',
  },
  {
    name: 'Alchemyst DevOps',
    blog: '/blog/alchemyst-devops',
    readme:
      'https://raw.githubusercontent.com/RutamBhagat/alchemyst-devops/refs/heads/main/README.md',
    description:
      'Terraform-managed GCP deployment for distributed LLM inference with a public FastAPI gateway, private workers, Docker Compose, health checks, and autoscaling-ready infrastructure',
    link: 'https://github.com/RutamBhagat/alchemyst-devops',
    image:
      'https://github.com/user-attachments/assets/2e4c0d53-70e5-4692-ac28-dc0703ec2e58',
    id: 'project-alchemyst-devops',
  },
  {
    name: 'arXiv7 LangGraph',
    blog: '/blog/arxiv7-langgraph',
    readme:
      'https://raw.githubusercontent.com/RutamBhagat/Langgraph-arXiv/refs/heads/main/README.md',
    description:
      'Context7 clone for arXiv papers using LangGraph, scoped and hybrid retrieval, LangSmith tracing, and eval workflows',
    link: 'https://github.com/RutamBhagat/Langgraph-arXiv',
    video:
      'https://pub-a07f730072074955abe8d7b846f26a5b.r2.dev/portfolio-demo/arxiv7-langgraph/arxiv7-langgraph.mp4',
    id: 'project-arxiv7',
  },
  {
    name: 'Agent Console Alchemyst',
    blog: '/blog/agent-console-alchemyst',
    readme:
      'https://raw.githubusercontent.com/RutamBhagat/agent-console-alchemyst/refs/heads/main/README.md',
    description:
      'Next.js agentic frontend with WebSocket streaming, tool-call rendering, trace timelines, and context diff inspection',
    link: 'https://github.com/RutamBhagat/agent-console-alchemyst',
    video:
      'https://pub-a07f730072074955abe8d7b846f26a5b.r2.dev/portfolio-demo/alchemyst-agent-console/alchemyst-agent-console.mp4',
    id: 'project-agent-console',
  },
  {
    name: 'Intelligent Resume Assistant',
    blog: '/blog/intelligent-resume-assistant',
    readme:
      'https://raw.githubusercontent.com/RutamBhagat/intelligent-resume-assistant/refs/heads/main/README.md',
    description:
      'AI hiring assistant that extracts structured resume facts, answers candidate questions and grounding',
    link: 'https://github.com/RutamBhagat/intelligent-resume-assistant',
    video:
      'https://pub-a07f730072074955abe8d7b846f26a5b.r2.dev/portfolio-demo/ai-resume-chat/ai-resume-chat.mp4',
    id: 'project-resume-assistant',
  },
  {
    name: 'ringg',
    blog: '/blog/ringg',
    readme:
      'https://raw.githubusercontent.com/RutamBhagat/ringg/refs/heads/main/README.md',
    description:
      'Bun TypeScript voice CLI that streams microphone audio to Gemini Live with local VAD and speaker playback',
    link: 'https://github.com/RutamBhagat/ringg',
    video:
      'https://pub-a07f730072074955abe8d7b846f26a5b.r2.dev/portfolio-demo/realtime-voice-chat/realtime-voice-chat.mp4',
    id: 'project-ringg',
  },
]
