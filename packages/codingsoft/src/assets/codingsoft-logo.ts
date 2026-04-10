/**
 * CodingSoft Logo - ASCII Art con Colores ANSI
 * Versión optimizada con texto "CodingSoft" nítido y profesional
 */

// Códigos ANSI para colores
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",

  // Colores de texto
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  brightCyan: "\x1b[96m",
  brightBlue: "\x1b[94m",
  brightWhite: "\x1b[97m",

  // Colores de fondo
  bgBlack: "\x1b[40m",
  bgCyan: "\x1b[46m",
  bgBlue: "\x1b[44m",
}

/**
 * Versión 1: Logo Completo con texto "CodingSoft" en Cyan
 */
export const logoFull = `
${colors.brightCyan}██████╗ ██████╗ ███╗   ██╗███████╗████████╗ █████╗ ██████╗ 
${colors.cyan}██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗
${colors.brightCyan}██║     ██████╔╝██╔██╗ ██║███████╗   ██║   ███████║██████╔╝
${colors.cyan}██║     ██╔══██╗██║╚██╗██║╚════██║   ██║   ██╔══██║██╔══██╗
${colors.brightCyan}╚██████╗██║  ██║██║ ╚████║███████║   ██║   ██║  ██║██║  ██║
${colors.cyan} ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
${colors.reset}`

/**
 * Versión 2: Logo en Azul (color corporativo)
 */
export const logoBlue = `
${colors.brightBlue}██████╗ ██████╗ ███╗   ██╗███████╗████████╗ █████╗ ██████╗ 
${colors.blue}██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗
${colors.brightBlue}██║     ██████╔╝██╔██╗ ██║███████╗   ██║   ███████║██████╔╝
${colors.blue}██║     ██╔══██╗██║╚██╗██║╚════██║   ██║   ██╔══██║██╔══██╗
${colors.brightBlue}╚██████╗██║  ██║██║ ╚████║███████║   ██║   ██║  ██║██║  ██║
${colors.blue} ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
${colors.reset}`

/**
 * Versión 3: Logo en Blanco (para fondos oscuros)
 */
export const logoWhite = `
${colors.brightWhite}██████╗ ██████╗ ███╗   ██╗███████╗████████╗ █████╗ ██████╗ 
${colors.white}██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗
${colors.brightWhite}██║     ██████╔╝██╔██╗ ██║███████╗   ██║   ███████║██████╔╝
${colors.white}██║     ██╔══██╗██║╚██╗██║╚════██║   ██║   ██╔══██║██╔══██╗
${colors.brightWhite}╚██████╗██║  ██║██║ ╚████║███████║   ██║   ██║  ██║██║  ██║
${colors.white} ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
${colors.reset}`

/**
 * Versión 4: Logo Minimalista (solo símbolo)
 */
export const logoMinimal = `
${colors.brightCyan}  ██████╗ 
${colors.cyan}██╔═══${colors.brightCyan}██╗
${colors.cyan}██║   ${colors.brightCyan}██║
${colors.cyan}██║   ${colors.brightCyan}██║
${colors.cyan}╚██████${colors.brightCyan}╔╝
${colors.cyan} ╚═════${colors.brightCyan}╝ 
${colors.reset}`

/**
 * Versión 5: Logo Compacto (una línea)
 */
export const logoCompact = `${colors.brightCyan}CodingSoft${colors.reset}`

/**
 * Versión 6: Logo con borde decorativo
 */
export const logoBordered = `
${colors.dim}┌────────────────────────────────────────────┐
${colors.reset}
${colors.brightCyan}    ██████╗ ██████╗ ███╗   ██╗███████╗████████╗ █████╗ ██████╗ 
${colors.cyan}    ██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗
${colors.brightCyan}    ██║     ██████╔╝██╔██╗ ██║███████╗   ██║   ███████║██████╔╝
${colors.cyan}    ██║     ██╔══██╗██║╚██╗██║╚════██║   ██║   ██╔══██║██╔══██╗
${colors.brightCyan}    ╚██████╗██║  ██║██║ ╚████║███████║   ██║   ██║  ██║██║  ██║
${colors.cyan}     ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
${colors.reset}
${colors.dim}└────────────────────────────────────────────┘
${colors.reset}`

/**
 * Versión 7: Logo Pequeño (para headers)
 */
export const logoSmall = `
${colors.brightCyan}██████╗ ██████╗ 
${colors.cyan}██╔══${colors.brightCyan}██╗██╔══${colors.cyan}██╗
${colors.brightCyan}██║  ${colors.cyan}██║${colors.brightCyan}██████${colors.cyan}╔╝
${colors.cyan}██║  ${colors.brightCyan}██║${colors.cyan}██╔══${colors.brightCyan}██╗
${colors.cyan}╚██████${colors.brightCyan}╔╝${colors.cyan}██║  ${colors.brightCyan}██║
${colors.cyan} ╚═════${colors.brightCyan}╝ ${colors.cyan}╚═╝  ${colors.brightCyan}╚═╝
${colors.reset}`

/**
 * Exportación por defecto (objeto con todas las variantes)
 */
export const logo = {
  full: logoFull,
  blue: logoBlue,
  white: logoWhite,
  minimal: logoMinimal,
  compact: logoCompact,
  bordered: logoBordered,
  small: logoSmall,
}

/**
 * Funciones utilitarias para imprimir/obtener logos
 */
export function getLogo(variant: keyof typeof logo = "full"): string {
  return logo[variant] || logo.full
}

export function printLogo(variant?: keyof typeof logo) {
  console.log(getLogo(variant))
}

export function getAllLogos(): typeof logo {
  return logo
}

export function supportsColor(): boolean {
  // Detección básica de soporte de colores
  if (!process.stdout.isTTY) return false
  if (process.env.TERM === "dumb") return false
  return true
}

export default logo
