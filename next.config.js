const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */

const imageCDN = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
      port: '',
      pathname: `/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/**`,
    },
  ],
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  ...nextConfig,
  images: imageCDN,
  i18n,
}