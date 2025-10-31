import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Silence workspace root inference warning in nested repo setup
  outputFileTracingRoot: path.join(__dirname, ".."),
};

export default nextConfig;
