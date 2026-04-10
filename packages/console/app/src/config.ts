/**
 * Application-wide constants and configuration
 */
export const config = {
  // Base URL
  baseUrl: "https://codingsoft.ai",

  // GitHub
  github: {
    repoUrl: "https://github.com/anomalyco/codingsoft",
    starsFormatted: {
      compact: "120K",
      full: "120,000",
    },
  },

  // Social links
  social: {
    twitter: "https://x.com/codingsoft",
    discord: "https://discord.gg/codingsoft",
  },

  // Static stats (used on landing page)
  stats: {
    contributors: "800",
    commits: "10,000",
    monthlyUsers: "5M",
  },
} as const
