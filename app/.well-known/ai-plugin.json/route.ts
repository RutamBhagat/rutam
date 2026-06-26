import { WEBSITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'
import { EMAIL } from '@/app/data'

export async function GET() {
  const plugin = {
    schema_version: 'v1',
    name_for_human: SITE_NAME,
    name_for_model: 'dibas_portfolio',
    description_for_human: SITE_DESCRIPTION,
    description_for_model:
      'Portfolio website of Rutam Bhagat, a Full Stack Engineer specializing in AI/ML. Contains information about projects, work experience, education, and blog posts about AI-powered applications.',
    auth: {
      type: 'none',
    },
    api: {
      type: 'openapi',
      url: `${WEBSITE_URL}/llms.txt`,
    },
    logo_url: `${WEBSITE_URL}/opengraph-image`,
    contact_email: EMAIL,
    legal_info_url: `${WEBSITE_URL}`,
  }

  return Response.json(plugin, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
