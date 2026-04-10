#!/usr/bin/env bun
import { $ } from "bun"

// Usar jp2a con caracteres personalizados para máxima calidad
const chars = " .'`^\",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$"

const width = process.argv[2] || "150"
const inputFile = "codingsoft-logo.png"
const outputFile = "packages/console/app/src/asset/brand/codingsoft-ascii-max.txt"

console.log(`Generando ASCII de máxima calidad...`)
console.log(`Ancho: ${width} caracteres`)
console.log(`Caracteres: ${chars.length} niveles`)

try {
  // Usar jp2a con mapa personalizado
  const result = await $`jp2a --width=${width} --background=dark --chars="${chars}" ${inputFile}`.text()

  await Bun.write(outputFile, result)

  const lines = result.split("\n").length
  console.log(`\n✅ Generado exitosamente!`)
  console.log(`Archivo: ${outputFile}`)
  console.log(`Líneas: ${lines}`)
  console.log(`\nPreview:`)
  console.log(result.split("\n").slice(0, 15).join("\n"))
} catch (error) {
  console.error("Error:", error)
}
