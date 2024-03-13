/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
        NEXT_PUBLIC_GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "blog.kakaocdn.net",
            },
            {
                protocol: "https",
                hostname: "s3.amazonaws.com",
            },
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "cdn.imweb.me" },
        ],
    },

    output: "standalone", // dockerize시 standalone 폴더를 사용(빌드 파일 용량 측소)
};

module.exports = nextConfig;
