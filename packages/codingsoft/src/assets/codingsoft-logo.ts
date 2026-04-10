/**
 * CodingSoft Logo - ASCII Art con Colores ANSI
 * Basado en el logo original con símbolo circular y texto "CodingSoft"
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
  cyan: "\x1b[36m",
  brightCyan: "\x1b[96m",
  brightBlue: "\x1b[94m",

  // Colores de fondo
  bgBlack: "\x1b[40m",
  bgCyan: "\x1b[46m",
  bgBlue: "\x1b[44m",
}

/**
 * Versión 1: Logo Completo con gradiente cyan
 */
export const logoFull = `
   ${colors.brightCyan}╭───────╮${colors.reset}
  ${colors.brightCyan}╱   ${colors.cyan}╭─╮${colors.brightCyan}   ╲${colors.reset}     ${colors.bright}${colors.cyan}██████╗  ██████╗  ██████╗ ${colors.reset}
 ${colors.cyan}│   ╭╯ ╰╮   │${colors.reset}   ${colors.cyan}██╔════╝ ${colors.reset}${colors.cyan}██╔══${colors.reset}${colors.cyan}██╗${colors.reset}${colors.cyan}██╔══${colors.reset}${colors.cyan}██╗${colors.reset}${colors.cyan}██╔════╝${colors.reset}
 ${colors.cyan}│   │ ● │   │${colors.reset}   ${colors.cyan}██║  ${colors.reset}${colors.cyan}   ██████${colors.reset}${colors.cyan}║${colors.reset}${colors.cyan}██████${colors.reset}${colors.cyan}╔╝${colors.reset}${colors.cyan}█████╗  ${colors.reset}
  ${colors.cyan}╲   ╰─╯   ╱${colors.reset}    ${colors.cyan}██║  ${colors.reset}${colors.cyan}  ${colors.reset}${colors.cyan}  ██╔══${colors.reset}${colors.cyan}██╗${colors.reset}${colors.cyan}██╔══${colors.reset}${colors.cyan}██╗${colors.reset}${colors.cyan}██╔══╝  ${colors.reset}
   ${colors.cyan}╰───────╯${colors.reset}     ${colors.cyan}╚██████╗${colors.reset}${colors.cyan} ██║  ${colors.reset}${colors.cyan}██║${colors.reset}${colors.cyan}██████${colors.reset}${colors.cyan}╔╝${colors.reset}${colors.cyan}███████╗${colors.reset}
                   ${colors.cyan}╚═════╝${colors.reset}${colors.cyan} ╚═╝  ${colors.reset}${colors.cyan}╚═╝${colors.reset}${colors.cyan}╚═════╝ ${colors.reset}${colors.cyan}╚══════╝${colors.reset}
`

/**
 * Versión 2: Logo azul (color corporativo)
 */
export const logoBlue = `
   ${colors.brightBlue}╭───────╮${colors.reset}
  ${colors.brightBlue}╱   ${colors.blue}╭─╮${colors.brightBlue}   ╲${colors.reset}     ${colors.bright}${colors.blue}██████╗  ██████╗  ██████╗ ${colors.reset}
 ${colors.blue}│   ╭╯ ╰╮   │${colors.reset}   ${colors.blue}██╔════╝ ${colors.reset}${colors.blue}██╔══${colors.reset}${colors.blue}██╗${colors.reset}${colors.blue}██╔══${colors.reset}${colors.blue}██╗${colors.reset}${colors.blue}██╔════╝${colors.reset}
 ${colors.blue}│   │ ● │   │${colors.reset}   ${colors.blue}██║      ${colors.reset}${colors.blue}██████${colors.reset}${colors.blue}║${colors.reset}${colors.blue}██████${colors.reset}${colors.blue}╔╝${colors.reset}${colors.blue}█████╗  ${colors.reset}
  ${colors.blue}╲   ╰─╯   ╱${colors.reset}    ${colors.blue}██║     ${colors.reset}${colors.blue}  ██╔══${colors.reset}${colors.blue}██╗${colors.reset}${colors.blue}██╔══${colors.reset}${colors.blue}██╗${colors.reset}${colors.blue}██╔══╝  ${colors.reset}
   ${colors.blue}╰───────╯${colors.reset}     ${colors.blue}╚██████╗${colors.reset}${colors.blue} ██║  ${colors.reset}${colors.blue}██║${colors.reset}${colors.blue}██████${colors.reset}${colors.blue}╔╝${colors.reset}${colors.blue}███████╗${colors.reset}
                   ${colors.blue}╚═════╝ ${colors.reset}${colors.blue}╚═╝  ${colors.reset}${colors.blue}╚═╝${colors.reset}${colors.blue}╚═════╝ ${colors.reset}${colors.blue}╚══════╝${colors.reset}
`

/**
 * Versión 3: Minimalista
 */
export const logoMinimal = `
 ${colors.cyan}╭─────╮${colors.reset}
${colors.cyan}│${colors.reset} ${colors.brightCyan}●${colors.reset} ${colors.cyan}│${colors.reset} ${colors.bright}${colors.cyan}CodingSoft${colors.reset}
 ${colors.cyan}╰─────╯${colors.reset}
`

/**
 * Versión 4: Con tagline
 */
export const logoWithSlogan = `
   ${colors.cyan}╭───────╮${colors.reset}
  ${colors.cyan}╱   ╭─╮   ╲${colors.reset}    ${colors.bright}${colors.cyan}██████╗  ██████╗  ██████╗ ${colors.reset}
 ${colors.cyan}│   ╭╯ ╰╮   │${colors.reset}   ${colors.cyan}██╔════╝  ${colors.reset}${colors.cyan}██╔══${colors.reset}${colors.cyan}██╗${colors.reset}${colors.cyan}██╔══${colors.reset}${colors.cyan}██╗${colors.reset}
 ${colors.cyan}│   │ ● │   │${colors.reset}   ${colors.cyan}██║       ${colors.reset}${colors.cyan}██████${colors.reset}${colors.cyan}║${colors.reset}${colors.cyan}██████${colors.reset}${colors.cyan}╔╝${colors.reset}
  ${colors.cyan}╲   ╰─╯   ╱${colors.reset}    ${colors.cyan}██║      ${colors.reset} ${colors.cyan} ██╔══${colors.reset}${colors.cyan}██╗${colors.reset}${colors.cyan}██╔══${colors.reset}${colors.cyan}██╗${colors.reset}
   ${colors.cyan}╰───────╯${colors.reset}     ${colors.cyan}╚██████╗ ${colors.reset}${colors.cyan}██║  ${colors.reset}${colors.cyan}██║${colors.reset}${colors.cyan}██████${colors.reset}${colors.cyan}╔╝${colors.reset}
                   ${colors.cyan}╚═════╝ ${colors.reset}${colors.cyan}╚═╝  ${colors.reset}${colors.cyan}╚═╝${colors.reset}${colors.cyan}╚═════╝ ${colors.reset}

  ${colors.dim}The open source AI coding agent${colors.reset}
`

/**
 * Versión 5: Splash con fondo
 */
export const logoSplash = `
${colors.bgCyan}${colors.black}  ╔═══════════════════════════════════════════════════════╗  ${colors.reset}
${colors.bgCyan}${colors.black}  ║                                                       ║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║     ${colors.reset}${colors.brightCyan}╭───────╮${colors.reset}${colors.bgCyan}${colors.black}                                    ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║    ${colors.reset}${colors.brightCyan}╱   ╭─╮   ╲${colors.reset}${colors.bgCyan}${colors.black}       ${colors.reset}${colors.bright}${colors.cyan}██████╗  ██████╗  ██████╗ ${colors.reset}${colors.bgCyan}${colors.black}    ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║   ${colors.reset}${colors.cyan}│   ╭╯ ╰╮   │${colors.reset}${colors.bgCyan}${colors.black}     ${colors.reset}${colors.cyan}██╔════╝  ${colors.reset}${colors.cyan}██╔══${colors.reset}${colors.cyan}██╗${colors.reset}${colors.cyan}██╔══${colors.reset}${colors.cyan}██╗${colors.reset}${colors.bgCyan}${colors.black}    ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║   ${colors.reset}${colors.cyan}│   │ ● │   │${colors.reset}${colors.bgCyan}${colors.black}     ${colors.reset}${colors.cyan}██║       ${colors.reset}${colors.cyan}██████${colors.reset}${colors.cyan}║${colors.reset}${colors.cyan}██████${colors.reset}${colors.cyan}╔╝${colors.reset}${colors.bgCyan}${colors.black}    ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║    ${colors.reset}${colors.cyan}╲   ╰─╯   ╱${colors.reset}${colors.bgCyan}${colors.black}      ${colors.reset}${colors.cyan}██║      ${colors.reset} ${colors.reset}${colors.cyan}██╔══${colors.reset}${colors.cyan}██╗${colors.reset}${colors.cyan}██╔══${colors.reset}${colors.cyan}██╗${colors.reset}${colors.bgCyan}${colors.black}   ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║     ${colors.reset}${colors.cyan}╰───────╯${colors.reset}${colors.bgCyan}${colors.black}        ${colors.reset}${colors.cyan}╚██████╗ ${colors.reset}${colors.cyan}██║  ${colors.reset}${colors.cyan}██║${colors.reset}${colors.cyan}██████${colors.reset}${colors.cyan}╔╝${colors.reset}${colors.bgCyan}${colors.black}   ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║                     ${colors.reset}${colors.cyan}╚═════╝ ${colors.reset}${colors.cyan}╚═╝  ${colors.reset}${colors.cyan}╚═╝${colors.reset}${colors.cyan}╚═════╝ ${colors.reset}${colors.bgCyan}${colors.black}       ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║                                                       ║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║     ${colors.bright}${colors.cyan}The open source AI coding agent${colors.reset}${colors.bgCyan}${colors.black}                ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║                                                       ║  ${colors.reset}
${colors.bgCyan}${colors.black}  ╚═══════════════════════════════════════════════════════╝  ${colors.reset}
`

/**
 * Versión 6: Símbolo solo
 */
export const symbolOnly = `
      ${colors.cyan}██████████${colors.reset}
    ${colors.cyan}████          ████${colors.reset}
   ${colors.cyan}██      ██████      ██${colors.reset}
   ${colors.cyan}██    ██      ██    ██${colors.reset}
  ${colors.cyan}██    ██   ●    ██    ██${colors.reset}
  ${colors.cyan}██    ██      ██    ██${colors.reset}
   ${colors.cyan}██    ██      ██    ██${colors.reset}
   ${colors.cyan}██      ██████      ██${colors.reset}
    ${colors.cyan}████          ████${colors.reset}
      ${colors.cyan}██████████${colors.reset}
`

/**
 * Versión 7: Banner simple
 */
export const logoBanner = `
  ${colors.cyan}┌─────────────────────────────────────────┐${colors.reset}
  ${colors.cyan}│${colors.reset}                                         ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}    ${colors.brightCyan}╭───────╮${colors.reset}                              ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}   ${colors.brightCyan}╱   ╭─╮   ╲${colors.reset}     ${colors.bright}${colors.cyan}OpenCoding${colors.reset}                  ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}  ${colors.cyan}│   ╭╯ ╰╮   │${colors.reset}                              ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}  ${colors.cyan}│   │ ● │   │${colors.reset}     The open source            ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}   ${colors.cyan}╲   ╰─╯   ╱${colors.reset}                              ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}    ${colors.cyan}╰───────╯${colors.reset}     AI coding agent              ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}                                         ${colors.cyan}│${colors.reset}
  ${colors.cyan}└─────────────────────────────────────────┘${colors.reset}
`

/**
 * Versión 8: Sin colores (fallback)
 */
export const logoNoColor = `
   ╭───────╮
  ╱   ╭─╮   ╲     ██████╗  ██████╗  ██████╗ 
 │   ╭╯ ╰╮   │   ██╔════╝  ██╔══██╗  ██╔══██╗  ██╔════╝
 │   │ ● │   │   ██║       ██████║  ██████╔╝  █████╗  
  ╲   ╰─╯   ╱    ██║       ██╔══██╗  ██╔══██╗  ██╔══╝  
   ╰───────╯     ╚██████╗  ██║  ██║  ██████╔╝  ███████╗
                   ╚═════╝  ╚═╝  ╚═╝  ╚═════╝   ╚══════╝
`

/**
 * Función para detectar soporte de colores
 */
export function supportsColor(): boolean {
  if (typeof process !== "undefined") {
    if (process.env?.NO_COLOR !== undefined) return false
    if (process.env?.TERM === "dumb") return false
    if (!process.stdout?.isTTY) return false
  }
  return true
}

/**
 * Tipos de logo disponibles
 */
export type LogoType = "full" | "blue" | "minimal" | "slogan" | "splash" | "symbol" | "banner" | "nocolor"

/**
 * Obtiene el logo especificado
 * @param type - Tipo de logo a obtener
 * @returns String con el logo formateado
 */
export function getLogo(type: LogoType = "full"): string {
  const logos: Record<LogoType, string> = {
    full: logoFull,
    blue: logoBlue,
    minimal: logoMinimal,
    slogan: logoWithSlogan,
    splash: logoSplash,
    symbol: symbolOnly,
    banner: logoBanner,
    nocolor: logoNoColor,
  }

  if (!supportsColor() && type !== "nocolor") {
    return logos[type] || logoFull
  }

  return logos[type] || logoFull
}

/**
 * Imprime el logo en consola
 * @param type - Tipo de logo a imprimir
 */
export function printLogo(type: LogoType = "full"): void {
  console.log(getLogo(type))
}

/**
 * Obtiene todas las variantes del logo
 */
export function getAllLogos(): Record<LogoType, string> {
  return {
    full: logoFull,
    blue: logoBlue,
    minimal: logoMinimal,
    slogan: logoWithSlogan,
    splash: logoSplash,
    symbol: symbolOnly,
    banner: logoBanner,
    nocolor: logoNoColor,
  }
}

// Exportar colores para uso externo
export { colors }

// Export por defecto
export default {
  logoFull,
  logoBlue,
  logoMinimal,
  logoWithSlogan,
  logoSplash,
  symbolOnly,
  logoBanner,
  logoNoColor,
  getLogo,
  printLogo,
  getAllLogos,
  supportsColor,
  colors,
}
