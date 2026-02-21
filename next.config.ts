import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  trailingSlash: true,
};

export default nextConfig;
