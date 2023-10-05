/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.kakaocdn.net'
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
      },
    ],
  },

}


module.exports = nextConfig