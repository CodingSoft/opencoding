#!/usr/bin/env bun
/**
 * Conversor de imágenes a ASCII con máxima calidad
 * Usa ascii-image-converter para obtener los mejores resultados
 *
 * Uso:
 *   bun codingsoft-logo-ascii.ts <imagen> [opciones]
 *
 * Ejemplos:
 *   bun codingsoft-logo-ascii.ts logo.png
 *   bun codingsoft-logo-ascii.ts logo.png --quality=max
 *   bun codingsoft-logo-ascii.ts logo.png --braille
 *   bun codingsoft-logo-ascii.ts logo.png --color --width=100
 */

import { $ } from "bun"
import fs from "fs"

const args = process.argv.slice(2)
const imagePath = args.find((arg) => !arg.startsWith("--"))

if (!imagePath) {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║       CodingSoft Logo ASCII Converter - Máxima Calidad       ║
╠══════════════════════════════════════════════════════════════╣
║  Uso: bun codingsoft-logo-ascii.ts <imagen> [opciones]       ║
║                                                              ║
║  Opciones de calidad:                                        ║
║    --quality=max     Máxima calidad (complejo)               ║
║    --quality=braille Usar caracteres braille (más detalle)   ║
║    --quality=custom  Caracteres personalizados               ║
║                                                              ║
║  Opciones de color:                                          ║
║    --color           Mostrar con colores originales          ║
║    --grayscale       Escala de grises                        ║
║                                                              ║
║  Opciones de tamaño:                                         ║
║    --width=100       Ancho en caracteres                     ║
║    --height=50       Alto en caracteres                      ║
║    --dimensions=100,50  Ancho y alto específicos             ║
║                                                              ║
║  Ejemplos:                                                   ║
║    bun codingsoft-logo-ascii.ts logo.png                     ║
║    bun codingsoft-logo-ascii.ts logo.png --color             ║
║    bun codingsoft-logo-ascii.ts logo.png --braille --width=150 ║
╚══════════════════════════════════════════════════════════════╝
  `)
  process.exit(0)
}

if (!fs.existsSync(imagePath)) {
  console.error(`❌ Error: La imagen "${imagePath}" no existe`)
  process.exit(1)
}

// Parsear argumentos
const useColor = args.includes("--color")
const useGrayscale = args.includes("--grayscale")
const useBraille = args.includes("--braille") || args.includes("--quality=braille")
const useComplex = args.includes("--quality=max") || args.includes("--complex")
const width = args.find((arg) => arg.startsWith("--width="))?.split("=")[1]
const height = args.find((arg) => arg.startsWith("--height="))?.split("=")[1]
const dimensions = args.find((arg) => arg.startsWith("--dimensions="))?.split("=")[1]
const output = args.find((arg) => arg.startsWith("--output="))?.split("=")[1]

console.log("╔══════════════════════════════════════════════════════════════╗")
console.log("║       Convirtiendo logo a ASCII con máxima calidad...        ║")
console.log("╚══════════════════════════════════════════════════════════════╝")
console.log(`📁 Imagen: ${imagePath}`)
console.log(`🎨 Color: ${useColor ? "Sí" : useGrayscale ? "Escala de grises" : "Blanco y negro"}`)
console.log(`📐 Modo: ${useBraille ? "Braille (máximo detalle)" : useComplex ? "Complejo" : "Estándar"}`)
console.log("")

try {
  // Construir comando
  let cmd = "ascii-image-converter"

  // Calidad
  if (useBraille) {
    cmd += " --braille"
  } else if (useComplex) {
    cmd += " --complex"
  }

  // Color
  if (useColor) {
    cmd += " --color"
  } else if (useGrayscale) {
    cmd += " --grayscale"
  }

  // Dimensiones
  if (dimensions) {
    cmd += ` --dimensions=${dimensions}`
  } else if (width) {
    cmd += ` --width=${width}`
  } else if (height) {
    cmd += ` --height=${height}`
  } else {
    // Default: ancho máximo para mejor calidad
    cmd += " --width=150"
  }

  cmd += ` "${imagePath}"`

  console.log(`🔧 Comando: ${cmd}\n`)

  const result = await $`${{ raw: cmd }}`.text()

  if (output) {
    fs.writeFileSync(output, result)
    console.log(`\n✅ ASCII guardado en: ${output}`)
  } else {
    console.log(result)
  }

  console.log("\n╔══════════════════════════════════════════════════════════════╗")
  console.log("║  ✅ Conversión completada exitosamente                       ║")
  console.log("╚══════════════════════════════════════════════════════════════╝")
} catch (error: any) {
  console.error("❌ Error durante la conversión:", error.message)
  process.exit(1)
}
