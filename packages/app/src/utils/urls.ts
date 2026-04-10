/**
 * Dynamic URL Configuration for Multi-Tenant Installations
 *
 * This module provides URL resolution based on the current deployment context,
 * supporting multiple domains and installation types.
 *
 * Supported configurations:
 * - ia.codingsoft.org (dedicated AI subdomain)
 * - app.codingsoft.org (general app subdomain)
 * - codingsoft.org/ai (path-based)
 * - Custom domains via window.location
 * - Local development (localhost)
 *
 * @example
 * import { urls } from "@/utils/urls"
 *
 * // Automatically resolves to current domain
 * const favicon = urls.favicon
 * // "https://ia.codingsoft.org/favicon.svg" or "http://localhost:4444/favicon.svg"
 */

/** Check if running in browser environment */
const isBrowser = typeof window !== "undefined"

/** Get current origin or fallback */
function getOrigin(): string {
  if (!isBrowser) return "https://ia.codingsoft.org"
  return window.location.origin
}

/** Get current hostname */
function getHostname(): string {
  if (!isBrowser) return "ia.codingsoft.org"
  return window.location.hostname
}

/** Check if running on official CodingSoft domains */
function isOfficialDomain(): boolean {
  const hostname = getHostname()
  return hostname.includes("codingsoft.org") || hostname.includes("codingsoft.ai")
}

/** Check if running in local development */
function isLocalhost(): boolean {
  const hostname = getHostname()
  return hostname === "localhost" || hostname === "127.0.0.1"
}

/**
 * URL Configuration
 * All URLs are computed dynamically based on current deployment
 */
export const urls = {
  /** Current deployment origin (e.g., https://ia.codingsoft.org) */
  get origin() {
    return getOrigin()
  },

  /** Main website - uses current domain */
  get website() {
    // For official domains, use the subdomain structure
    // For custom domains, use as-is
    return getOrigin()
  },

  /** Documentation endpoint */
  get docs() {
    return `${this.website}/docs`
  },

  /** Changelog JSON endpoint */
  get changelog() {
    return `${this.website}/changelog.json`
  },

  /** Zen/Cloud service endpoint */
  get zen() {
    return `${this.website}/zen`
  },

  /** Desktop feedback page */
  get desktopFeedback() {
    return `${this.website}/desktop-feedback`
  },

  /** Providers documentation */
  get providers() {
    return `${this.docs}/providers`
  },

  /** Custom provider documentation */
  get customProvider() {
    return `${this.providers}/#custom-provider`
  },

  /** Themes documentation */
  get themes() {
    return `${this.docs}/themes/`
  },

  /** Favicon for notifications (96x96) */
  get favicon96() {
    return `${this.origin}/favicon-96x96-v3.png`
  },

  /** Default favicon (SVG) */
  get favicon() {
    return `${this.origin}/favicon.svg`
  },

  /** Social share image */
  get socialShare() {
    return `${this.origin}/social-share.png`
  },
} as const

/**
 * Get server URL for API connections
 * Automatically detects local vs production environment
 */
export function getServerUrl(): string {
  if (!isBrowser) return "http://localhost:4096"

  const hostname = getHostname()

  // Local development
  if (isLocalhost()) {
    return "http://localhost:4096"
  }

  // For official domains, assume server runs on same origin
  // This allows codingsoft.org, ia.codingsoft.org, app.codingsoft.org, etc.
  if (isOfficialDomain()) {
    return getOrigin()
  }

  // For custom domains, use same origin (self-hosted)
  return getOrigin()
}

/**
 * Get WebSocket URL for real-time connections
 */
export function getWebSocketUrl(): string {
  const serverUrl = getServerUrl()
  return serverUrl.replace(/^http/, "ws")
}

/**
 * Configuration metadata for debugging
 */
export const urlConfig = {
  origin: getOrigin(),
  hostname: getHostname(),
  isOfficial: isOfficialDomain(),
  isLocalhost: isLocalhost(),
  serverUrl: getServerUrl(),
  webSocketUrl: getWebSocketUrl(),
} as const

// Log configuration in development
if (isBrowser && import.meta.env?.DEV) {
  console.log("[URL Config]", urlConfig)
}
