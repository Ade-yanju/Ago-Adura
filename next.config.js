/** @type {import('next').NextConfig} */

// Set REPO_NAME to your GitHub repository name (e.g. "cac-ago-adura")
// This is needed for GitHub Pages which serves from /repo-name/
// Leave empty if using Vercel or a custom domain (no basePath needed)
const isProd = process.env.NODE_ENV === "production";
const repoName = process.env.REPO_NAME || "cac-ago-adura";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Apply basePath only for GitHub Pages production builds
  ...(isProd && repoName
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

module.exports = nextConfig;
