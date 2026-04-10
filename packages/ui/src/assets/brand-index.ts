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

// Wordmarks (Text Only)
import wordmarkLightSvg from "../../../console/app/src/asset/brand/codingsoft-wordmark-light.svg"
import wordmarkDarkSvg from "../../../console/app/src/asset/brand/codingsoft-wordmark-dark.svg"

// Simple Wordmarks
import wordmarkSimpleLightSvg from "../../../console/app/src/asset/brand/codingsoft-wordmark-simple-light.svg"
import wordmarkSimpleDarkSvg from "../../../console/app/src/asset/brand/codingsoft-wordmark-simple-dark.svg"

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

// Wordmarks
import wordmarkLightPng from "../../../console/app/src/asset/brand/codingsoft-wordmark-light.png"
import wordmarkDarkPng from "../../../console/app/src/asset/brand/codingsoft-wordmark-dark.png"

// Simple Wordmarks
import wordmarkSimpleLightPng from "../../../console/app/src/asset/brand/codingsoft-wordmark-simple-light.png"
import wordmarkSimpleDarkPng from "../../../console/app/src/asset/brand/codingsoft-wordmark-simple-dark.png"

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

export type LogoVariant = "full" | "square" | "wordmark" | "wordmarkSimple" | "symbol"
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
  wordmark: {
    light: wordmarkLightSvg,
    dark: wordmarkDarkSvg,
  },
  wordmarkSimple: {
    light: wordmarkSimpleLightSvg,
    dark: wordmarkSimpleDarkSvg,
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
  wordmark: {
    light: wordmarkLightPng,
    dark: wordmarkDarkPng,
  },
  wordmarkSimple: {
    light: wordmarkSimpleLightPng,
    dark: wordmarkSimpleDarkPng,
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
    wordmark: assets.wordmark[theme],
    wordmarkSimple: assets.wordmarkSimple[theme],
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
  wordmarkLightSvg,
  wordmarkDarkSvg,
  wordmarkSimpleLightSvg,
  wordmarkSimpleDarkSvg,
  symbolSvg,

  // PNGs
  logoLightPng,
  logoDarkPng,
  logoLightSquarePng,
  logoDarkSquarePng,
  wordmarkLightPng,
  wordmarkDarkPng,
  wordmarkSimpleLightPng,
  wordmarkSimpleDarkPng,
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
