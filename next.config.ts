import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Pin the Turbopack workspace root to this project directory so module/CSS
  // resolution (e.g. `@import "tailwindcss"`) doesn't anchor to a parent folder.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
