import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactProductionProfiling: true,
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
