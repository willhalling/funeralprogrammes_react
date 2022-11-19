/** @type {import('next').NextConfig} */
const webpack = require('webpack')
const nextConfig = {
  swcMinify: true,
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    config.module = {
      ...config.module,
      exprContextCritical: false,
    }

    return config
  },
}

module.exports = nextConfig
