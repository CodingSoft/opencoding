#!/bin/bash
# Script para convertir el logo CodingSoft a ASCII
# Guarda primero la imagen como codingsoft-logo.png en este directorio

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  CodingSoft Logo - Conversión ASCII                        ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

if [ ! -f "codingsoft-logo.png" ]; then
    echo "❌ Error: No se encontró codingsoft-logo.png"
    echo ""
    echo "📝 Instrucciones:"
    echo "   1. Guarda la imagen del logo como 'codingsoft-logo.png'"
    echo "   2. Ejecuta nuevamente este script"
    echo ""
    exit 1
fi

echo "✅ Imagen encontrada: codingsoft-logo.png"
echo "🎨 Convirtiendo con máxima calidad..."
echo ""

# Crear directorio de salida si no existe
mkdir -p packages/console/app/src/asset/brand/

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  Opción 1: Máxima calidad (Braille)                        ║"
echo "╚════════════════════════════════════════════════════════════╝"
ascii-image-converter --braille --width=200 codingsoft-logo.png

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║  Opción 2: Con colores (Braille + Color)                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
ascii-image-converter --braille --color --width=200 codingsoft-logo.png

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║  Opción 3: Complejo (Alto detalle)                         ║"
echo "╚════════════════════════════════════════════════════════════╝"
ascii-image-converter --complex --width=150 codingsoft-logo.png

echo ""
echo "💾 Guardando versión braille en archivo..."
ascii-image-converter --braille --width=200 codingsoft-logo.png > packages/console/app/src/asset/brand/codingsoft-logo-converted.txt

echo ""
echo "✅ Conversión completada!"
echo "📁 Archivo guardado en:"
echo "   packages/console/app/src/asset/brand/codingsoft-logo-converted.txt"
echo ""
echo "🔧 Comandos adicionales disponibles:"
echo "   --color          Mostrar con colores originales"
echo "   --grayscale      Escala de grises"
echo "   --dimensions=W,H Dimensiones específicas"
