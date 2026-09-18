import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio_Friend",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
