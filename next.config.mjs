import million from "million/compiler";
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

const millionConfig = {
    auto: true,// if you're using RSC: auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);
