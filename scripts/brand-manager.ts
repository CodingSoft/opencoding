#!/usr/bin/env bun
/**
 * Brand Asset Manager
 *
 * Script para gestionar el reemplazo centralizado de logos
 *
 * Usage:
 *   bun run scripts/brand-manager.ts          # Menu interactivo
 *   bun run scripts/brand-manager.ts list     # Listar todos los assets
 *   bun run scripts/brand-manager.ts check    # Verificar integridad
 *   bun run scripts/brand-manager.ts update   # Actualizar desde carpeta
 *
 */

import { $ } from "bun"
import path from "node:path"
import fs from "node:fs"

const BRAND_DIR = path.join(import.meta.dir, "../packages/console/app/src/asset/brand")
const UI_ASSETS_DIR = path.join(import.meta.dir, "../packages/ui/src/assets/images")

interface BrandAsset {
  name: string
  svg?: string
  png?: string
  size?: string
}

const ASSETS: Record<string, BrandAsset> = {
  logo: {
    name: "Logo Completo",
    svg: "codingsoft-logo-light.svg",
    png: "codingsoft-logo-light.png",
  },
  "logo-dark": {
    name: "Logo Dark",
    svg: "codingsoft-logo-dark.svg",
    png: "codingsoft-logo-dark.png",
  },
  "logo-square": {
    name: "Logo Cuadrado",
    svg: "codingsoft-logo-light-square.svg",
    png: "codingsoft-logo-light-square.png",
  },
  "logo-square-dark": {
    name: "Logo Cuadrado Dark",
    svg: "codingsoft-logo-dark-square.svg",
    png: "codingsoft-logo-dark-square.png",
  },
  wordmark: {
    name: "Wordmark",
    svg: "codingsoft-wordmark-light.svg",
    png: "codingsoft-wordmark-light.png",
  },
  "wordmark-dark": {
    name: "Wordmark Dark",
    svg: "codingsoft-wordmark-dark.svg",
    png: "codingsoft-wordmark-dark.png",
  },
  "wordmark-simple": {
    name: "Wordmark Simple",
    svg: "codingsoft-wordmark-simple-light.svg",
    png: "codingsoft-wordmark-simple-light.png",
  },
  "wordmark-simple-dark": {
    name: "Wordmark Simple Dark",
    svg: "codingsoft-wordmark-simple-dark.svg",
    png: "codingsoft-wordmark-simple-dark.png",
  },
  symbol: {
    name: "Símbolo",
    svg: "codingsoft-symbol.svg",
    png: "codingsoft-symbol.png",
  },
}

async function listAssets() {
  console.log("\n📦 Brand Assets\n")
  console.log("Ubicación:", BRAND_DIR + "\n")
  console.log(
    "┌─────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┐",
  )
  console.log(
    "│ Asset                       │ SVG                                   │ PNG                                   │",
  )
  console.log(
    "├─────────────────────────────┼───────────────────────────────────────┼───────────────────────────────────────┤",
  )

  for (const [key, asset] of Object.entries(ASSETS)) {
    const svgExists = asset.svg && fs.existsSync(path.join(BRAND_DIR, asset.svg))
    const pngExists = asset.png && fs.existsSync(path.join(BRAND_DIR, asset.png))

    const svgStr = svgExists ? `✅ ${asset.svg}` : `❌ ${asset.svg || "N/A"}`
    const pngStr = pngExists ? `✅ ${asset.png}` : `❌ ${asset.png || "N/A"}`

    console.log(`│ ${asset.name.padEnd(27)} │ ${svgStr.padEnd(37)} │ ${pngStr.padEnd(37)} │`)
  }

  console.log(
    "└─────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┘\n",
  )
}

async function checkIntegrity() {
  console.log("\n🔍 Verificando integridad de assets...\n")

  let issues = 0

  for (const [key, asset] of Object.entries(ASSETS)) {
    const issues_list: string[] = []

    if (asset.svg && !fs.existsSync(path.join(BRAND_DIR, asset.svg))) {
      issues_list.push(`Falta SVG: ${asset.svg}`)
    }

    if (asset.png && !fs.existsSync(path.join(BRAND_DIR, asset.png))) {
      issues_list.push(`Falta PNG: ${asset.png}`)
    }

    if (issues_list.length > 0) {
      console.log(`❌ ${asset.name}:`)
      issues_list.forEach((issue) => console.log(`   - ${issue}`))
      issues++
    } else {
      console.log(`✅ ${asset.name}`)
    }
  }

  // Check UI assets duplication
  console.log("\n📋 Verificando duplicación en UI assets...")
  const uiLogos = ["logo-header-light.png", "logo-header-dark.png", "logo-splash.png"]

  for (const logo of uiLogos) {
    const uiPath = path.join(UI_ASSETS_DIR, logo)
    if (fs.existsSync(uiPath)) {
      console.log(`⚠️  ${logo} - DUPLICADO en ${UI_ASSETS_DIR}`)
      console.log(`   Sugerencia: Eliminar y usar import desde brand-index.ts`)
      issues++
    }
  }

  console.log(`\n${issues === 0 ? "✅ Sin problemas" : `❌ ${issues} problema(s) encontrado(s)`}\n`)
}

async function updateFromFolder(sourceFolder: string) {
  console.log(`\n🔄 Actualizando assets desde: ${sourceFolder}\n`)

  if (!fs.existsSync(sourceFolder)) {
    console.log(`❌ La carpeta fuente no existe: ${sourceFolder}`)
    return
  }

  const files = fs.readdirSync(sourceFolder)
  let updated = 0

  for (const file of files) {
    // Match pattern: codingsoft-logo-*.svg/png
    if (file.startsWith("codingsoft-") && (file.endsWith(".svg") || file.endsWith(".png"))) {
      const sourcePath = path.join(sourceFolder, file)
      const destPath = path.join(BRAND_DIR, file)

      // Copy file
      const sourceContent = fs.readFileSync(sourcePath)
      fs.writeFileSync(destPath, sourceContent)

      console.log(`✅ Actualizado: ${file}`)
      updated++
    }
  }

  console.log(`\n✅ ${updated} archivo(s) actualizado(s)\n`)
}

async function showMenu() {
  console.log("\n🎨 Brand Asset Manager\n")
  console.log("1. Listar todos los assets")
  console.log("2. Verificar integridad")
  console.log("3. Actualizar desde carpeta")
  console.log("4. Generar variantes (próximamente)")
  console.log("5. Salir\n")

  const input = await $`read -p "Selecciona una opción: "`.text()
  const choice = input.trim()

  switch (choice) {
    case "1":
      await listAssets()
      break
    case "2":
      await checkIntegrity()
      break
    case "3":
      const folder = await $`read -p "Carpeta fuente: "`.text()
      await updateFromFolder(folder.trim())
      break
    default:
      console.log("Opción no válida")
  }
}

// Main
const args = process.argv.slice(2)
const command = args[0]

if (command === "list") {
  await listAssets()
} else if (command === "check") {
  await checkIntegrity()
} else if (command === "update" && args[1]) {
  await updateFromFolder(args[1])
} else {
  await showMenu()
}
