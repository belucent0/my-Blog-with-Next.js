/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com'
      },
      {
        protocol: 'https',
        hostname: 'blog.kakaocdn.net'
      },
    ],
  },
  webpack : (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}


module.exports = nextConfig
