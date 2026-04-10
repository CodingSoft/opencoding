#!/usr/bin/env bun
/**
 * Script para optimizar logos PNG a SVG vectorial
 *
 * Uso:
 * bun scripts/optimize-logos.ts
 */

import { $ } from "bun"
import fs from "fs"
import path from "path"

const LOGO_DIR = path.join(import.meta.dir, "..", "packages", "console", "app", "src", "asset", "brand")

// Colores detectados en los logos
const COLORS = {
  // Cyan/Blue gradient colors from the logo
  cyanLight: "#00BCD4",
  cyanMedium: "#00A2B8",
  cyanDark: "#008899",
  blueLight: "#389EFF",
  blueMedium: "#0091FF",
  blueDark: "#0070CC",
  // Text colors
  textLight: "#211E1E",
  textDark: "#F1ECEC",
  // Detail colors
  detailLight: "#656363",
  detailDark: "#B7B1B1",
}

console.log("🎨 Optimizing CodingSoft logos to SVG...")
console.log("📁 Target directory:", LOGO_DIR)

// Función para crear SVG del logo completo (horizontal)
function createLogoSVG(theme: "light" | "dark") {
  const isLight = theme === "light"
  const textColor = isLight ? COLORS.textLight : COLORS.textDark
  const cyanMain = isLight ? COLORS.cyanLight : COLORS.blueLight
  const cyanInner = isLight ? COLORS.cyanMedium : COLORS.blueMedium

  return `<svg width="489" height="144" viewBox="0 0 489 144" xmlns="http://www.w3.org/2000/svg">
  <!-- CodingSoft Logo - ${theme} theme -->
  <defs>
    <linearGradient id="logo-gradient-${theme}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${cyanMain};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${cyanInner};stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Symbol (left side) -->
  <g transform="translate(12, 12)">
    <!-- Outer ring (C shape) -->
    <path d="M 60 108 A 48 48 0 1 1 108 60" 
          stroke="url(#logo-gradient-${theme})" 
          stroke-width="16" 
          fill="none" 
          stroke-linecap="round"/>
    <path d="M 60 12 A 48 48 0 1 1 12 60" 
          stroke="url(#logo-gradient-${theme})" 
          stroke-width="16" 
          fill="none" 
          stroke-linecap="round"/>
    
    <!-- Inner circle -->
    <circle cx="60" cy="60" r="20" fill="url(#logo-gradient-${theme})"/>
  </g>
  
  <!-- Text "CodingSoft" -->
  <text x="140" y="95" 
        font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" 
        font-size="64" 
        font-weight="600" 
        fill="${textColor}">
    Coding<tspan fill="${cyanMain}" font-weight="700">Soft</tspan>
  </text>
</svg>`
}

// Función para crear SVG del símbolo (cuadrado)
function createSymbolSVG(theme: "light" | "dark") {
  const cyanMain = theme === "light" ? COLORS.cyanLight : COLORS.blueLight
  const cyanInner = theme === "light" ? COLORS.cyanMedium : COLORS.blueDark

  return `<svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <!-- CodingSoft Symbol - ${theme} theme -->
  <defs>
    <linearGradient id="symbol-gradient-${theme}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${cyanMain};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${cyanInner};stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Outer ring (C shape) -->
  <g transform="translate(250, 250)">
    <!-- Outer C ring -->
    <path d="M 0 -180 A 180 180 0 1 1 -127.3 -127.3" 
          stroke="url(#symbol-gradient-${theme})" 
          stroke-width="40" 
          fill="none" 
          stroke-linecap="round"/>
    <path d="M 0 -180 A 180 180 0 1 1 127.3 -127.3" 
          stroke="url(#symbol-gradient-${theme})" 
          stroke-width="40" 
          fill="none" 
          stroke-linecap="round"/>
    
    <!-- Inner circle -->
    <circle cx="0" cy="0" r="60" fill="url(#symbol-gradient-${theme})"/>
  </g>
</svg>`
}

// Función para crear wordmark
function createWordmarkSVG(theme: "light" | "dark", simple = false) {
  const textColor = theme === "light" ? COLORS.textLight : COLORS.textDark
  const cyanMain = theme === "light" ? COLORS.cyanLight : COLORS.blueLight
  const fontWeight = simple ? "500" : "600"
  const cyanWeight = simple ? "600" : "700"

  return `<svg width="640" height="115" viewBox="0 0 640 115" xmlns="http://www.w3.org/2000/svg">
  <!-- CodingSoft Wordmark - ${theme} theme ${simple ? "(Simple)" : ""} -->
  <text x="0" y="85" 
        font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" 
        font-size="72" 
        font-weight="${fontWeight}" 
        fill="${textColor}">
    Coding<tspan fill="${cyanMain}" font-weight="${cyanWeight}">Soft</tspan>
  </text>
</svg>`
}

try {
  // Generar SVGs
  const files = [
    { name: "codingsoft-logo-light.svg", content: createLogoSVG("light") },
    { name: "codingsoft-logo-dark.svg", content: createLogoSVG("dark") },
    { name: "codingsoft-symbol.svg", content: createSymbolSVG("light") },
    { name: "codingsoft-logo-light-square.svg", content: createSymbolSVG("light") },
    { name: "codingsoft-logo-dark-square.svg", content: createSymbolSVG("dark") },
    { name: "codingsoft-wordmark-light.svg", content: createWordmarkSVG("light") },
    { name: "codingsoft-wordmark-dark.svg", content: createWordmarkSVG("dark") },
    { name: "codingsoft-wordmark-simple-light.svg", content: createWordmarkSVG("light", true) },
    { name: "codingsoft-wordmark-simple-dark.svg", content: createWordmarkSVG("dark", true) },
  ]

  // Escribir archivos
  for (const file of files) {
    const filePath = path.join(LOGO_DIR, file.name)
    fs.writeFileSync(filePath, file.content, "utf-8")
    console.log(`✅ Created: ${file.name}`)
  }

  console.log("\n🎉 All logos optimized successfully!")
  console.log("📦 Next step: Copy to header location")

  // Copiar al directorio del header
  const headerDir = path.join(import.meta.dir, "..", "packages", "console", "app", "src", "asset")
  fs.writeFileSync(path.join(headerDir, "logo-ornate-light.svg"), files[0].content, "utf-8")
  fs.writeFileSync(path.join(headerDir, "logo-ornate-dark.svg"), files[1].content, "utf-8")
  console.log("✅ Copied to header directory")
} catch (error) {
  console.error("❌ Error optimizing logos:", error)
  process.exit(1)
}
