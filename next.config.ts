import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API: process.env.API,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['vercel.app'],
  },
};

export default nextConfig;