/**
 * CodingSoft Brand Assets - Centralized Configuration
 *
 * This module provides a single source of truth for all brand assets.
 * Import from here instead of directly from asset folders.
 *
 * @module @/brand
 */

// ============================================================================
// SVG ASSETS (Vector - Preferred)
// ============================================================================

// Complete Logos (Horizontal)
import logoLightSvg from "../../../console/app/src/asset/brand/codingsoft-logo-light.svg"
import logoDarkSvg from "../../../console/app/src/asset/brand/codingsoft-logo-dark.svg"

// Square Logos
import logoLightSquareSvg from "../../../console/app/src/asset/brand/codingsoft-logo-light-square.svg"
import logoDarkSquareSvg from "../../../console/app/src/asset/brand/codingsoft-logo-dark-square.svg"

// Symbol Only
import symbolSvg from "../../../console/app/src/asset/brand/codingsoft-symbol.svg"

// ============================================================================
// PNG ASSETS (Raster - For specific use cases)
// ============================================================================

// Complete Logos
import logoLightPng from "../../../console/app/src/asset/brand/codingsoft-logo-light.png"
import logoDarkPng from "../../../console/app/src/asset/brand/codingsoft-logo-dark.png"

// Square Logos
import logoLightSquarePng from "../../../console/app/src/asset/brand/codingsoft-logo-light-square.png"
import logoDarkSquarePng from "../../../console/app/src/asset/brand/codingsoft-logo-dark-square.png"

// Symbol
import symbolPng from "../../../console/app/src/asset/brand/codingsoft-symbol.png"

// Legacy UI Assets (To be deprecated)
// Estos archivos ya fueron eliminados, importamos desde brand-index
import logoLightLegacy from "../../../console/app/src/asset/brand/codingsoft-logo-light.png"
import logoDarkLegacy from "../../../console/app/src/asset/brand/codingsoft-logo-dark.png"
import logoSplashLegacy from "../../../console/app/src/asset/brand/codingsoft-logo-light-square.png"

const logoHeaderLightPng = logoLightLegacy
const logoHeaderDarkPng = logoDarkLegacy
const logoSplashPng = logoSplashLegacy

// ============================================================================
// Type Definitions
// ============================================================================

export type LogoVariant = "full" | "square" | "symbol"
export type LogoFormat = "svg" | "png"
export type Theme = "light" | "dark"

export interface LogoAsset {
  variant: LogoVariant
  theme: Theme
  svg: string
  png: string
}

// ============================================================================
// Asset Maps (Single Source of Truth)
// ============================================================================

/**
 * All SVG assets mapped by variant and theme
 */
export const svgAssets = {
  full: {
    light: logoLightSvg,
    dark: logoDarkSvg,
  },
  square: {
    light: logoLightSquareSvg,
    dark: logoDarkSquareSvg,
  },
  symbol: {
    light: symbolSvg,
    dark: symbolSvg, // Symbol is theme-neutral
  },
} as const

/**
 * All PNG assets mapped by variant and theme
 */
export const pngAssets = {
  full: {
    light: logoLightPng,
    dark: logoDarkPng,
  },
  square: {
    light: logoLightSquarePng,
    dark: logoDarkSquarePng,
  },
  symbol: {
    light: symbolPng,
    dark: symbolPng, // Symbol is theme-neutral
  },
} as const

/**
 * Legacy assets (to be deprecated)
 */
export const legacyAssets = {
  header: {
    light: logoHeaderLightPng,
    dark: logoHeaderDarkPng,
  },
  splash: logoSplashPng,
} as const

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get logo URL by variant, theme, and format
 *
 * @example
 * ```tsx
 * const src = getLogoUrl('full', 'dark', 'svg')
 * <img src={src} alt="Logo" />
 * ```
 */
export function getLogoUrl(variant: LogoVariant, theme: Theme = "light", format: LogoFormat = "svg"): string {
  if (format === "svg") {
    return svgAssets[variant][theme]
  }
  return pngAssets[variant][theme]
}

/**
 * Get all variants for a specific theme and format
 */
export function getLogosByTheme(theme: Theme, format: LogoFormat = "svg") {
  const assets = format === "svg" ? svgAssets : pngAssets
  return {
    full: assets.full[theme],
    square: assets.square[theme],
    symbol: assets.symbol[theme],
  }
}

/**
 * Get all themes for a specific variant and format
 */
export function getLogosByVariant(variant: LogoVariant, format: LogoFormat = "svg") {
  const assets = format === "svg" ? svgAssets : pngAssets
  return {
    light: assets[variant].light,
    dark: assets[variant].dark,
  }
}

// ============================================================================
// Exports (All Assets)
// ============================================================================

export {
  // SVGs
  logoLightSvg,
  logoDarkSvg,
  logoLightSquareSvg,
  logoDarkSquareSvg,
  symbolSvg,

  // PNGs
  logoLightPng,
  logoDarkPng,
  logoLightSquarePng,
  logoDarkSquarePng,
  symbolPng,

  // Legacy
  logoHeaderLightPng,
  logoHeaderDarkPng,
  logoSplashPng,
}

// Default export
export default {
  svg: svgAssets,
  png: pngAssets,
  legacy: legacyAssets,
  getLogoUrl,
  getLogosByTheme,
  getLogosByVariant,
}
