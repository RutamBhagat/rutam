import { WEBSITE_URL } from '@/lib/constants'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EDUCATION,
  EMAIL,
  SOCIAL_LINKS,
} from '../data'

export async function GET() {
  function projectBlogUrl(blog: string) {
    return blog.startsWith('http') ? blog : `${WEBSITE_URL}${blog}`
  }

  const content = `# Rutam Bhagat

> Full Stack Engineer specializing in AI/ML, building production-ready applications with Next.js, React, and modern web technologies.

## Contact
- Website: ${WEBSITE_URL}
- Email: ${EMAIL}
${SOCIAL_LINKS.filter((link) => link.label !== 'Resume pdf')
  .map((link) => `- ${link.label}: ${link.link}`)
  .join('\n')}

## Current Role
${WORK_EXPERIENCE[0].title} at ${WORK_EXPERIENCE[0].company}
${WORK_EXPERIENCE[0].details.map((d) => `- ${d}`).join('\n')}

## Education
${EDUCATION.map((edu) => `- ${edu.degree} from ${edu.school} (${edu.start} - ${edu.end}) - CGPA: ${edu.cgpa}`).join('\n')}

## Projects

${PROJECTS.map(
  (project) => `### ${project.name}
${project.description}
- Live: ${project.link}
- Blog: ${projectBlogUrl(project.blog)}
`,
).join('\n')}

## Work Experience

${WORK_EXPERIENCE.map(
  (work) => `### ${work.company} - ${work.title}
${work.start} - ${work.end}
${work.details.map((d) => `- ${d}`).join('\n')}
`,
).join('\n')}

## Technical Skills
- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Python, FastAPI
- AI/ML: LangChain, Mastra, OpenAI, Anthropic
- Databases: PostgreSQL, Redis, Drizzle ORM
- Infrastructure: Vercel, AWS, Docker

## Optional Links
- Resume: https://pub-a07f730072074955abe8d7b846f26a5b.r2.dev/resume/Rutam_Bhagat_Resume.pdf
- Projects: ${WEBSITE_URL}/#projects
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
