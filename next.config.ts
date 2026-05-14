import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'brauni.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.tusfacturas.app',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
