/**
 * CodingSoft Logo - ASCII Art
 * Versión JavaScript pura (sin TypeScript)
 *
 * Uso:
 *   const logo = require('./codingsoft-logo')
 *   logo.print()
 */

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  cyan: "\x1b[36m",
  blue: "\x1b[34m",
  brightCyan: "\x1b[96m",
  brightBlue: "\x1b[94m",
  bgCyan: "\x1b[46m",
  bgBlack: "\x1b[40m",
}

// Logo principal (cyan)
const logoFull = `
   ${colors.brightCyan}╭───────╮${colors.reset}
  ${colors.brightCyan}╱   ${colors.cyan}╭─╮${colors.brightCyan}   ╲${colors.reset}     ${colors.bright}${colors.cyan}██████╗ ██████╗ ██████╗ ███████╗${colors.reset}
 ${colors.cyan}│   ╭╯ ╰╮   │${colors.reset}   ${colors.cyan}██╔════╝██╔══██╗██╔══██╗██╔════╝${colors.reset}
 ${colors.cyan}│   │ ● │   │${colors.reset}   ${colors.cyan}██║     ███████║██████╔╝█████╗${colors.reset}  
  ${colors.cyan}╲   ╰─╯   ╱${colors.reset}    ${colors.cyan}██║     ██╔══██║██╔══██╗██╔══╝${colors.reset}  
   ${colors.cyan}╰───────╯${colors.reset}     ${colors.cyan}╚██████╗██║  ██║██████╔╝███████╗${colors.reset}
                   ${colors.cyan}╚═════╝╚═╝  ╚═╝╚═════╝ ╚══════╝${colors.reset}
`

// Logo azul
const logoBlue = `
   ${colors.brightBlue}╭───────╮${colors.reset}
  ${colors.brightBlue}╱   ${colors.blue}╭─╮${colors.brightBlue}   ╲${colors.reset}     ${colors.bright}${colors.blue}██████╗ ██████╗ ██████╗ ███████╗${colors.reset}
 ${colors.blue}│   ╭╯ ╰╮   │${colors.reset}   ${colors.blue}██╔════╝██╔══██╗██╔══██╗██╔════╝${colors.reset}
 ${colors.blue}│   │ ● │   │${colors.reset}   ${colors.blue}██║     ███████║██████╔╝█████╗${colors.reset}  
  ${colors.blue}╲   ╰─╯   ╱${colors.reset}    ${colors.blue}██║     ██╔══██║██╔══██╗██╔══╝${colors.reset}  
   ${colors.blue}╰───────╯${colors.reset}     ${colors.blue}╚██████╗██║  ██║██████╔╝███████╗${colors.reset}
                   ${colors.blue}╚═════╝╚═╝  ╚═╝╚═════╝ ╚══════╝${colors.reset}
`

// Minimalista
const logoMinimal = `
  ${colors.cyan}╭─────╮${colors.reset}
 ${colors.cyan}│${colors.reset}  ${colors.brightCyan}●${colors.reset}  ${colors.cyan}│${colors.reset}   ${colors.bright}${colors.cyan}CodingSoft${colors.reset}
  ${colors.cyan}╰─────╯${colors.reset}
`

// Con slogan
const logoWithSlogan = `
   ${colors.cyan}╭───────╮${colors.reset}
  ${colors.cyan}╱   ╭─╮   ╲${colors.reset}    ${colors.bright}${colors.cyan}CodingSoft${colors.reset}
 ${colors.cyan}│   ╭╯ ╰╮   │${colors.reset}
 ${colors.cyan}│   │ ● │   │${colors.reset}   Software Solutions
  ${colors.cyan}╲   ╰─╯   ╱${colors.reset}
   ${colors.cyan}╰───────╯${colors.reset}    for Modern Coders
`

// Splash con fondo
const logoSplash = `
${colors.bgCyan}${colors.black}  ╔═══════════════════════════════════════════════════════╗  ${colors.reset}
${colors.bgCyan}${colors.black}  ║                                                       ║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║     ${colors.reset}${colors.brightCyan}╭───────╮${colors.reset}${colors.bgCyan}${colors.black}                                    ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║    ${colors.reset}${colors.brightCyan}╱   ╭─╮   ╲${colors.reset}${colors.bgCyan}${colors.black}       ${colors.reset}${colors.bright}${colors.cyan}CodingSoft${colors.reset}${colors.bgCyan}${colors.black}                      ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║   ${colors.reset}${colors.cyan}│   ╭╯ ╰╮   │${colors.reset}${colors.bgCyan}${colors.black}                                      ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║   ${colors.reset}${colors.cyan}│   │ ● │   │${colors.reset}${colors.bgCyan}${colors.black}      ${colors.reset}${colors.bright}${colors.cyan}Software Solutions${colors.reset}${colors.bgCyan}${colors.black}                ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║    ${colors.reset}${colors.cyan}╲   ╰─╯   ╱${colors.reset}${colors.bgCyan}${colors.black}                                      ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║     ${colors.reset}${colors.cyan}╰───────╯${colors.reset}${colors.bgCyan}${colors.black}        ${colors.reset}${colors.bright}${colors.cyan}for Modern Coders${colors.reset}${colors.bgCyan}${colors.black}               ${colors.reset}${colors.bgCyan}${colors.black}║  ${colors.reset}
${colors.bgCyan}${colors.black}  ║                                                       ║  ${colors.reset}
${colors.bgCyan}${colors.black}  ╚═══════════════════════════════════════════════════════╝  ${colors.reset}
`

// Símbolo solo
const symbolOnly = `
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

// Banner
const logoBanner = `
  ${colors.cyan}┌─────────────────────────────────────────┐${colors.reset}
  ${colors.cyan}│${colors.reset}                                         ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}    ${colors.brightCyan}╭───────╮${colors.reset}                              ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}   ${colors.brightCyan}╱   ╭─╮   ╲${colors.reset}     ${colors.bright}${colors.cyan}CodingSoft${colors.reset}                ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}  ${colors.cyan}│   ╭╯ ╰╮   │${colors.reset}                              ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}  ${colors.cyan}│   │ ● │   │${colors.reset}     Software Solutions         ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}   ${colors.cyan}╲   ╰─╯   ╱${colors.reset}                              ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}    ${colors.cyan}╰───────╯${colors.reset}     for Modern Coders            ${colors.cyan}│${colors.reset}
  ${colors.cyan}│${colors.reset}                                         ${colors.cyan}│${colors.reset}
  ${colors.cyan}└─────────────────────────────────────────┘${colors.reset}
`

// Sin colores
const logoNoColor = `
   ╭───────╮
  ╱   ╭─╮   ╲     ██████╗ ██████╗ ██████╗ ███████╗
 │   ╭╯ ╰╮   │   ██╔════╝██╔══██╗██╔══██╗██╔════╝
 │   │ ● │   │   ██║     ███████║██████╔╝█████╗  
  ╲   ╰─╯   ╱    ██║     ██╔══██║██╔══██╗██╔══╝  
   ╰───────╯     ╚██████╗██║  ██║██████╔╝███████╗
                   ╚═════╝╚═╝  ╚═╝╚═════╝ ╚══════╝
`

/**
 * Detecta si la terminal soporta colores
 */
function supportsColor() {
  if (typeof process !== "undefined") {
    if (process.env?.NO_COLOR !== undefined) return false
    if (process.env?.TERM === "dumb") return false
    if (!process.stdout?.isTTY) return false
  }
  return true
}

/**
 * Obtiene el logo especificado
 */
function getLogo(type = "full") {
  const logos = {
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
    return logoNoColor
  }

  return logos[type] || logoFull
}

/**
 * Imprime el logo en consola
 */
function printLogo(type = "full") {
  console.log(getLogo(type))
}

/**
 * Imprime el logo principal
 */
function print() {
  printLogo("full")
}

// Exportar
module.exports = {
  logoFull,
  logoBlue,
  logoMinimal,
  logoWithSlogan: logoWithSlogan,
  logoSplash,
  symbolOnly,
  logoBanner,
  logoNoColor,
  getLogo,
  printLogo,
  print,
  supportsColor,
  colors,
}

// Si se ejecuta directamente
if (require.main === module) {
  print()
}
