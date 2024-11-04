import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'localhost'],
  },
};

export default nextConfig;
