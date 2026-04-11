/**
 * CodingSoft ASCII Logo - Punto de entrada principal
 *
 * Uso:
 * ```ts
 * import { printLogo, getLogo } from '@codingsoft/codingsoft/assets'
 *
 * printLogo('full')
 * console.log(getLogo('minimal'))
 * ```
 */

export {
  // Logos
  logoFull as logoWithSlogan,
  logoBlue,
  logoMinimal as symbolOnly,
  logoBordered as logoBanner,
  logoWhite as logoNoColor,
  logoCompact as logoSplash,

  // Funciones
  getLogo,
  printLogo,
  getAllLogos,
  supportsColor,

  // Utilidades
  colors,
} from "./codingsoft-logo"

// Tipo LogoType
export type LogoType = keyof typeof import("./codingsoft-logo").logo

// Re-exportar todo por defecto
export { default } from "./codingsoft-logo"
