/**
 * CodingSoft Logo Component - Centralized Version
 *
 * Usage:
 * ```tsx
 * import { Logo } from '@/components/logo'
 *
 * // Auto-detect theme
 * <Logo variant="full" />
 *
 * // Force theme
 * <Logo variant="square" theme="dark" />
 *
 * // Custom size
 * <Logo variant="symbol" width={64} height={64} />
 *
 * // SVG format (default)
 * <Logo format="svg" />
 *
 * // PNG format
 * <Logo format="png" />
 * ```
 */

import { createMemo } from "solid-js"
import { useTheme } from "../theme/context"
import { getLogoUrl, type LogoVariant, type LogoFormat } from "../assets/brand-index"

export interface LogoProps {
  variant?: LogoVariant
  theme?: "light" | "dark" | "auto"
  format?: LogoFormat
  width?: number
  height?: number
  class?: string
  alt?: string
}

export function Logo(props: LogoProps) {
  const {
    variant = "full",
    theme = "auto",
    format = "svg",
    width,
    height,
    class: className,
    alt = "CodingSoft",
  } = props

  const themeContext = useTheme()

  // Determine effective theme
  const effectiveTheme = createMemo(() => {
    if (theme === "auto") {
      return themeContext.mode() === "dark" ? "dark" : "light"
    }
    return theme
  })

  // Get logo URL from centralized config
  const src = createMemo(() => getLogoUrl(variant, effectiveTheme(), format))

  // Default dimensions based on variant
  const dimensions = createMemo(() => {
    const defaults = {
      full: { width: 189, height: 54 },
      square: { width: 54, height: 54 },
      wordmark: { width: 140, height: 34 },
      wordmarkSimple: { width: 120, height: 28 },
      symbol: { width: 40, height: 40 },
    }
    return {
      width: width || defaults[variant].width,
      height: height || defaults[variant].height,
    }
  })

  return (
    <img
      src={src()}
      alt={alt}
      width={dimensions().width}
      height={dimensions().height}
      class={className}
      data-component="logo"
      data-variant={variant}
      data-theme={effectiveTheme()}
      data-format={format}
    />
  )
}

/**
 * Mark Component - Symbol only
 */
export function Mark(props: { class?: string; width?: number; height?: number }) {
  return <Logo variant="symbol" class={props.class} width={props.width} height={props.height} />
}

/**
 * Splash Component - Large logo for splash screens
 */
export function Splash(props: { class?: string; theme?: "light" | "dark" | "auto" }) {
  return <Logo variant="full" theme={props.theme || "auto"} width={300} height={162} class={props.class} />
}

/**
 * HeaderLogo Component - Optimized for headers
 */
export function HeaderLogo(props: { class?: string; theme?: "light" | "dark" | "auto" }) {
  return <Logo variant="full" theme={props.theme || "auto"} width={140} height={40} class={props.class} />
}
