import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Required for next-mdx-remote on Turbopack / some Vercel builds
  transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
