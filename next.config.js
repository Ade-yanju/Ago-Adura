/** @type {import('next').NextConfig} */

// Set REPO_NAME to your GitHub repository name (e.g. "cac-ago-adura")
// This is needed for GitHub Pages which serves from /repo-name/
// Leave empty when deploying to Vercel or a custom domain (no basePath needed)
const repoName = process.env.REPO_NAME || "";
const isGitHubPages = Boolean(repoName);

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

module.exports = nextConfig;
