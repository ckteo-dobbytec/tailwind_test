import type { NextConfig } from "next";

const repository = "tailwind_test";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        basePath: `/${repository}`,
        assetPrefix: `/${repository}/`,
      }
    : {}),
};

export default nextConfig;
