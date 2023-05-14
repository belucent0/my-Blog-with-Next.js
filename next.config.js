/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  },
  // rules: [
  //   {
  //     test: /\.html$/,
  //     use: 'html-loader',
  //   },
  // ],
}



module.exports = nextConfig
