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
  logoFull,
  logoBlue,
  logoMinimal,
  logoWithSlogan,
  logoSplash,
  symbolOnly,
  logoBanner,
  logoNoColor,

  // Funciones
  getLogo,
  printLogo,
  getAllLogos,
  supportsColor,

  // Tipos
  type LogoType,

  // Utilidades
  colors,
} from "./codingsoft-logo"

// Re-exportar todo por defecto
export { default } from "./codingsoft-logo"
