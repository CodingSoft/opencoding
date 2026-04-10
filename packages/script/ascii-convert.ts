#!/usr/bin/env bun
/**
 * Herramienta para convertir imágenes a ASCII art
 *
 * Uso:
 *   bun ascii-convert.ts <imagen> [ancho]
 *
 * Ejemplos:
 *   bun ascii-convert.ts logo.png 60
 *   bun ascii-convert.ts logo.png 80 --color
 *   bun ascii-convert.ts logo.png 60 --output logo-ascii.txt
 */

import { $ } from "bun"
import path from "path"
import fs from "fs"

const args = process.argv.slice(2)
const imagePath = args[0]
const width = args[1] || "60"
const useColor = args.includes("--color")
const output = args.find((arg) => arg.startsWith("--output="))?.split("=")[1]

if (!imagePath) {
  console.log(`
╔══════════════════════════════════════════════════╗
║  OpenCoding ASCII Image Converter                ║
╠══════════════════════════════════════════════════╣
║  Uso: bun ascii-convert.ts <imagen> [ancho]      ║
║                                                  ║
║  Ejemplos:                                       ║
║    bun ascii-convert.ts logo.png 60              ║
║    bun ascii-convert.ts logo.png 80 --color      ║
║    bun ascii-convert.ts logo.png 60 --output=out ║
╚══════════════════════════════════════════════════╝
  `)
  process.exit(0)
}

if (!fs.existsSync(imagePath)) {
  console.error(`Error: La imagen "${imagePath}" no existe`)
  process.exit(1)
}

try {
  console.log(`Convirtiendo "${imagePath}" a ASCII (ancho: ${width})...\n`)

  const colorFlag = useColor ? "--color" : ""
  const result = await $`jp2a --background=dark --width=${width} ${colorFlag} ${imagePath}`.text()

  if (output) {
    fs.writeFileSync(output, result)
    console.log(`✓ ASCII guardado en: ${output}`)
  } else {
    console.log(result)
  }
} catch (error: any) {
  console.error("Error:", error.message)
  process.exit(1)
}
