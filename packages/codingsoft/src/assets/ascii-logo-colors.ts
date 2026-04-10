/**
 * OpenCoding ASCII Art con Colores ANSI
 * Versiones para terminal con soporte de color
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

  // Colores de fondo
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
}

/**
 * Versión 1: Logo con gradiente cyan → blue
 */
export const logoCyanBlue = `
${colors.cyan}${colors.bright}   ____                   _____          __  ${colors.reset}
${colors.cyan}  / __ \\____  ____  ____ / ___/___  ____/ /__${colors.reset}
${colors.blue} / /_/ / __ \\/ __ \\/ ___/\\__ \\/ _ \\/ __  / _ \\${colors.reset}
${colors.blue}/ ____/ /_/ / /_/ (__  )___/ /  __/ /_/ /  __/${colors.reset}
${colors.magenta}/_/    \\__,_/ .___/____//____/\\___/\\__,_/\\___/ ${colors.reset}
${colors.magenta}           /_/                                ${colors.reset}
`

/**
 * Versión 2: Logo con banner y colores alternados
 */
export const logoBannerColor = `
${colors.cyan}  ╔═══════════════════════════════════════════════════════════════╗${colors.reset}
${colors.cyan}  ║${colors.reset}                                                               ${colors.cyan}║${colors.reset}
${colors.cyan}  ║${colors.reset}      ${colors.bright}${colors.yellow}____${colors.reset}                   ${colors.yellow}_____${colors.reset}          ${colors.yellow}__${colors.reset}                 ${colors.cyan}║${colors.reset}
${colors.cyan}  ║${colors.reset}     ${colors.bright}${colors.green}/ __ \\${colors.reset}____  ____  ____ ${colors.green}/ ___/${colors.reset}___  ${colors.bright}____${colors.reset}${colors.green}/ /__${colors.reset}              ${colors.cyan}║${colors.reset}
${colors.cyan}  ║${colors.reset}    ${colors.bright}${colors.cyan}/ /_/ /${colors.reset} __ \\/ __ \\/ ___/${colors.bright}\\__ \\${colors.reset}${colors.cyan}/ _ \\/${colors.reset}  ${colors.cyan}__${colors.reset}  ${colors.bright}/ _ \\${colors.reset}             ${colors.cyan}║${colors.reset}
${colors.cyan}  ║${colors.reset}   ${colors.bright}${colors.blue}/ ____/${colors.reset} /_/ / /_/ (__  )${colors.bright}___/ /${colors.reset}  ${colors.blue}__/${colors.reset} ${colors.bright}/_/ /${colors.reset}  ${colors.blue}__/${colors.reset}             ${colors.cyan}║${colors.reset}
${colors.cyan}  ║${colors.reset}  ${colors.bright}${colors.magenta}/_/${colors.reset}    ${colors.bright}\\__,_/${colors.reset} ${colors.bright}.${colors.reset}___/____//____/${colors.bright}\\___/\\__,_/${colors.reset}${colors.bright}\\___/${colors.reset}              ${colors.cyan}║${colors.reset}
${colors.cyan}  ║${colors.reset}             ${colors.bright}/${colors.reset}_/                                              ${colors.cyan}║${colors.reset}
${colors.cyan}  ║${colors.reset}                                                               ${colors.cyan}║${colors.reset}
${colors.cyan}  ╚═══════════════════════════════════════════════════════════════╝${colors.reset}
`

/**
 * Versión 3: Estilo splash con fondo cyan
 */
export const logoSplash = `
${colors.bgCyan}${colors.black}  ╔═════════════════════════════════════════════════════════╗  ${colors.reset}
${colors.bgCyan}${colors.black}  ║                                                         ║  ${colors.reset}
${colors.bgCyan}${colors.bright}          ██████╗ ██████╗ ██████╗ ███████╗              ${colors.reset}
${colors.bgCyan}${colors.bright}          ██╔═══██╗██╔══██╗██╔══██╗██╔════╝              ${colors.reset}
${colors.bgCyan}${colors.bright}          ██║   ██║██████╔╝██████╔╝█████╗                ${colors.reset}
${colors.bgCyan}${colors.bright}          ██║   ██║██╔══██╗██╔══██╗██╔══╝                ${colors.reset}
${colors.bgCyan}${colors.bright}          ╚██████╔╝██████╔╝██████╔╝███████╗              ${colors.reset}
${colors.bgCyan}${colors.bright}           ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝              ${colors.reset}
${colors.bgCyan}${colors.reset}
${colors.bgCyan}${colors.bright}                   ██████╗ ██████╗                       ${colors.reset}
${colors.bgCyan}${colors.bright}                  ██╔═══██╗██╔══██╗                      ${colors.reset}
${colors.bgCyan}${colors.bright}                  ██║   ██║██████╔╝                      ${colors.reset}
${colors.bgCyan}${colors.bright}                  ██║   ██║██╔══██╗                      ${colors.reset}
${colors.bgCyan}${colors.bright}                  ╚██████╔╝██████╔╝                      ${colors.reset}
${colors.bgCyan}${colors.bright}                   ╚═════╝ ╚═════╝                       ${colors.reset}
${colors.bgCyan}${colors.reset}
${colors.bgCyan}${colors.bright}              [ Your AI Coding Assistant ]               ${colors.reset}
${colors.bgCyan}${colors.reset}
${colors.bgCyan}${colors.black}  ╚═════════════════════════════════════════════════════════╝  ${colors.reset}
`

/**
 * Versión 4: Estilo minimalista con borde
 */
export const logoMinimal = `
${colors.bright}${colors.cyan}┌────────────────────────────────────────┐${colors.reset}
${colors.bright}${colors.cyan}│${colors.reset}                                        ${colors.bright}${colors.cyan}│${colors.reset}
${colors.bright}${colors.cyan}│${colors.reset}   ${colors.yellow}___  ____  ____  ____${colors.reset}              ${colors.bright}${colors.cyan}│${colors.reset}
${colors.bright}${colors.cyan}│${colors.reset}  ${colors.green}/ _ \\/ __ \\/ __ \\/ __ \\${colors.reset}             ${colors.bright}${colors.cyan}│${colors.reset}
${colors.bright}${colors.cyan}│${colors.reset} ${colors.cyan}/ // / /_/ / / / / /_/ /${colors.reset}             ${colors.bright}${colors.cyan}│${colors.reset}
${colors.bright}${colors.cyan}│${colors.reset}${colors.blue}/____/\\__,_/_/ /_/\\__, /${colors.reset}              ${colors.bright}${colors.cyan}│${colors.reset}
${colors.bright}${colors.cyan}│${colors.reset}                    ${colors.magenta}/____/${colors.reset}               ${colors.bright}${colors.cyan}│${colors.reset}
${colors.bright}${colors.cyan}│${colors.reset}                                        ${colors.bright}${colors.cyan}│${colors.reset}
${colors.bright}${colors.cyan}└────────────────────────────────────────┘${colors.reset}
`

/**
 * Versión 5: Estilo Matrix/Hacker
 */
export const logoMatrix = `
${colors.bright}${colors.green}   ____                   _____          __  ${colors.reset}
${colors.green}  / __ \\____  ____  ____ / ___/___  ____/ /__${colors.reset}
${colors.dim}${colors.green} / /_/ / __ \\/ __ \\/ ___/\\__ \\/ _ \\/ __  / _ \\${colors.reset}
${colors.dim}${colors.green}/ ____/ /_/ / /_/ (__  )___/ /  __/ /_/ /  __/${colors.reset}
${colors.dim}${colors.green}/_/    \\__,_/ .___/____//____/\\___/\\__,_/\\___/ ${colors.reset}
${colors.dim}${colors.green}           /_/                                ${colors.reset}
`

/**
 * Función helper para imprimir logo con colores
 */
export function printLogo(variant: "cyanBlue" | "banner" | "splash" | "minimal" | "matrix" = "cyanBlue") {
  const logos = {
    cyanBlue: logoCyanBlue,
    banner: logoBannerColor,
    splash: logoSplash,
    minimal: logoMinimal,
    matrix: logoMatrix,
  }

  console.log(logos[variant])
}

/**
 * Función para detectar soporte de colores
 */
export function supportsColor(): boolean {
  if (process.env.NO_COLOR !== undefined) return false
  if (process.env.TERM === "dumb") return false
  if (!process.stdout.isTTY) return false
  return true
}

/**
 * Función para obtener logo (con o sin color)
 */
export function getLogo(variant: "cyanBlue" | "banner" | "splash" | "minimal" | "matrix" = "cyanBlue"): string {
  if (!supportsColor()) {
    // Versión sin colores
    return `
   ____                   _____          __  
  / __ \\____  ____  ____ / ___/___  ____/ /__
 / /_/ / __ \\/ __ \\/ ___/\\__ \\/ _ \\/ __  / _ \\
/ ____/ /_/ / /_/ (__  )___/ /  __/ /_/ /  __/
/_/    \\__,_/ .___/____//____/\\___/\\__,_/\\___/ 
           /_/                                
`
  }

  const logos = {
    cyanBlue: logoCyanBlue,
    banner: logoBannerColor,
    splash: logoSplash,
    minimal: logoMinimal,
    matrix: logoMatrix,
  }

  return logos[variant]
}

// Exportar colores para uso externo
export { colors }
