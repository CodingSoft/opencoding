/**
 * Dynamic URL Configuration for Multi-Tenant Support
 *
 * This module provides dynamic URL resolution for multi-tenant deployments.
 * URLs are resolved based on the current window.location for web deployments,
 * allowing each client to have their own custom domain.
 */

/** Check if we're in a browser environment */
const isBrowser = typeof window !== "undefined"

/** Get the current origin (e.g., "https://client.codingsoft.ai") */
export function getOrigin(): string {
  if (!isBrowser) return "https://codingsoft.ai"
  return window.location.origin
}

/** Get the current hostname */
export function getHostname(): string {
  if (!isBrowser) return "codingsoft.ai"
  return window.location.hostname
}

/** Check if we're running on the official codingsoft.ai domain */
export function isOfficialDomain(): boolean {
  return getHostname().includes("codingsoft.ai")
}

/** Configuration URLs */
export const urls = {
  /** Main website */
  get website() {
    return isOfficialDomain() ? "https://codingsoft.ai" : getOrigin()
  },

  /** Documentation */
  get docs() {
    return `${this.website}/docs`
  },

  /** Changelog JSON endpoint */
  get changelog() {
    return `${this.website}/changelog.json`
  },

  /** Zen (cloud) service */
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

  /** Favicon for notifications */
  get favicon96() {
    return `${getOrigin()}/favicon-96x96-v3.png`
  },

  /** Default favicon */
  get favicon() {
    return `${getOrigin()}/favicon.svg`
  },
} as const

/**
 * Get server URL based on current environment
 * This matches the logic in entry.tsx
 */
export function getServerUrl(): string {
  if (!isBrowser) return "http://localhost:4096"

  // For codingsoft.ai domain, use localhost (development)
  if (isOfficialDomain()) return "http://localhost:4096"

  // Otherwise use the current origin (for self-hosted deployments)
  return getOrigin()
}
