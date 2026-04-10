#!/usr/bin/env bun
/**
 * Demostración de ASCII Logos de CodingSoft
 *
 * Uso:
 * bun run packages/codingsoft/src/assets/demo.ts
 *
 * O desde la raíz:
 * bun run logo
 */

import { printLogo, getLogo, getAllLogos, supportsColor } from "./codingsoft-logo"

console.log("\n\x1b[1m\x1b[36m╔══════════════════════════════════════════════════════════════╗\x1b[0m")
console.log("\x1b[1m\x1b[36m║ CodingSoft ASCII Logo - Demo ║\x1b[0m")
console.log("\x1b[1m\x1b[36m╚══════════════════════════════════════════════════════════════╝\x1b[0m\n")

console.log(`Soporte de colores: ${supportsColor() ? "✅ Sí" : "❌ No"}\n`)

// Demo de cada versión
const versions = [
  { id: "full", name: "Completo" },
  { id: "blue", name: "Azul" },
  { id: "minimal", name: "Minimalista" },
  { id: "slogan", name: "Con Slogan" },
  { id: "banner", name: "Banner" },
  { id: "splash", name: "Splash" },
  { id: "symbol", name: "Símbolo" },
  { id: "nocolor", name: "Sin Color" },
] as const

for (const version of versions) {
  console.log(`\n\x1b[1m\x1b[33m▸ ${version.name} (${version.id}):\x1b[0m`)
  console.log("─".repeat(60))
  printLogo(version.id as any)
  console.log()
}

console.log("\n\x1b[1m\x1b[32m✅ Demo completada\x1b[0m\n")

// Mostrar información
console.log("\n\x1b[1mUso:\x1b[0m")
console.log('  import { printLogo, getLogo } from "@codingsoft/codingsoft/assets"')
console.log("")
console.log('  printLogo("full")     # Imprimir logo completo')
console.log('  printLogo("minimal")  # Imprimir logo minimalista')
console.log('  getLogo("banner")    # Obtener como string')
console.log("")
