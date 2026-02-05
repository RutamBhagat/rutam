import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'static.wixstatic.com'
            },
            {
                protocol: 'https',
                hostname: 'assets-global.website-files.com'
            },
            {
                protocol: 'https',
                hostname: 'github.com'
            }
        ]
    },
}

export default withNextIntl(nextConfig)
