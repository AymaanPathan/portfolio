import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Lets a preview build use its own folder so it never collides with `next dev`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
