# 🎨 Guía de Gestión de Logos - CodingSoft

## 📋 Resumen Ejecutivo

Esta guía te permite **reemplazar todos los logos de forma práctica y centralizada**.

---

## 🚀 Solución Implementada

### 1. **Configuración Centralizada** ✅

**Archivo:** `packages/ui/src/assets/brand-index.ts`

Este archivo es el **single source of truth** para todos los logos. Todos los imports deben venir de aquí.

**Ventajas:**

- ✅ Un solo lugar para cambiar logos
- ✅ Tipificación TypeScript
- ✅ Sin duplicación
- ✅ Fácil mantenimiento

### 2. **Componente Mejorado** ✅

**Archivo:** `packages/ui/src/components/logo-centralized.tsx`

```tsx
import { Logo } from '@/components/logo-centralized'

// Automático (detecta tema)
<Logo />

// Forzar tema
<Logo theme="dark" />

// Diferente variante
<Logo variant="square" />
<Logo variant="symbol" />
<Logo variant="wordmark" />

// Formato PNG
<Logo format="png" />

// Tamaño personalizado
<Logo width={100} height={100} />
```

### 3. **Script de Gestión** ✅

**Archivo:** `scripts/brand-manager.ts`

```bash
# Listar todos los assets
bun run scripts/brand-manager.ts list

# Verificar integridad
bun run scripts/brand-manager.ts check

# Actualizar desde carpeta
bun run scripts/brand-manager.ts update /ruta/a/nuevos/logos

# Menú interactivo
bun run scripts/brand-manager.ts
```

---

## 📁 Estructura de Archivos

### Ubicación Principal (Single Source of Truth)

```
packages/console/app/src/asset/brand/
├── codingsoft-logo-light.svg          ✅
├── codingsoft-logo-dark.svg           ✅
├── codingsoft-logo-light-square.svg   ✅
├── codingsoft-logo-dark-square.svg    ✅
├── codingsoft-wordmark-light.svg      ✅
├── codingsoft-wordmark-dark.svg       ✅
├── codingsoft-wordmark-simple-light.svg ✅
├── codingsoft-wordmark-simple-dark.svg  ✅
└── codingsoft-symbol.svg              ✅
```

### Ubicación Legacy (A eliminar)

```
packages/ui/src/assets/images/
├── logo-header-light.png  ❌ DUPLICADO
├── logo-header-dark.png   ❌ DUPLICADO
└── logo-splash.png        ❌ DUPLICADO
```

---

## 🔄 Cómo Reemplazar Logos

### Opción 1: Reemplazo Manual (Recomendado)

1. **Prepara tus nuevos archivos** en formato SVG (preferible) o PNG:

   ```
   mis-nuevos-logos/
   ├── codingsoft-logo-light.svg
   ├── codingsoft-logo-dark.svg
   ├── codingsoft-logo-light-square.svg
   └── ... (todos los necesarios)
   ```

2. **Copia a la carpeta de brand:**

   ```bash
   cp mis-nuevos-logos/*.svg packages/console/app/src/asset/brand/
   ```

3. **Verifica la integridad:**

   ```bash
   bun run scripts/brand-manager.ts check
   ```

4. **Reconstruye el bundle:**
   ```bash
   bun dev
   ```

### Opción 2: Usando el Script

```bash
# Actualizar todos los logos desde una carpeta
bun run scripts/brand-manager.ts update /ruta/a/mis-nuevos-logos
```

### Opción 3: Reemplazo Individual

Si solo quieres cambiar un logo específico:

```bash
# Reemplazar solo el logo light
cp mi-logo.svg packages/console/app/src/asset/brand/codingsoft-logo-light.svg

# Reemplazar solo el symbol
cp mi-symbolo.svg packages/console/app/src/asset/brand/codingsoft-symbol.svg
```

---

## 📐 Especificaciones Técnicas

### SVG (Recomendado)

- **Formato:** SVG 1.1 o 2.0
- **ViewBox:** Definir apropiadamente
- **Colores:** Usar variables CSS o inline
- **Tamaño:** Optimizado para web (< 10KB ideal)

### PNG (Solo si es necesario)

- **Fondo:** Transparente
- **Tamaños recomendados:**
  - Logo completo: 489×144px
  - Square: 500×500px
  - Wordmark: 640×115px
  - Symbol: 500×500px
- **Resolución:** 2x para Retina displays

### Paleta de Colores Corporativa

```css
/* Light Theme */
--color-cyan-primary: #00bcd4;
--color-cyan-bright: #00a2b8;
--color-text: #211e1e;

/* Dark Theme */
--color-cyan-bright: #389eff;
--color-blue-corporate: #0091ff;
--color-text: #f1ecec;
```

---

## 🛠️ Migración de Código Legacy

### Antes (Incorrecto)

```tsx
import logoLight from "../assets/images/logo-header-light.png"
import logoDark from "../assets/images/logo-header-dark.png"

function Header() {
  return <img src={isDark ? logoDark : logoLight} />
}
```

### Después (Correcto)

```tsx
import { Logo } from "@/components/logo-centralized"

function Header() {
  return <Logo variant="full" theme="auto" />
}
```

### Opción Intermedia

```tsx
import { getLogoUrl } from "@/assets/brand-index"

function Header() {
  const src = getLogoUrl("full", isDark ? "dark" : "light", "svg")
  return <img src={src} />
}
```

---

## ✅ Checklist de Verificación

### Después de Reemplazar Logos

- [ ] Ejecutar `bun run scripts/brand-manager.ts check`
- [ ] Verificar en modo light theme
- [ ] Verificar en modo dark theme
- [ ] Probar en desktop app
- [ ] Probar en web app
- [ ] Probar en terminal (ASCII art)
- [ ] Verificar tamaños de archivo
- [ ] Comprobar en página de brand (`/brand`)
- [ ] Testear downloads (SVG y PNG)

---

## 🎯 Variantes Disponibles

| Variante         | Descripción                     | Uso Recomendado                  |
| ---------------- | ------------------------------- | -------------------------------- |
| `full`           | Logo completo (símbolo + texto) | Headers, footers, marketing      |
| `square`         | Logo cuadrado                   | Favicons, avatares, thumbnails   |
| `wordmark`       | Solo texto                      | Branding textual                 |
| `wordmarkSimple` | Texto simplificado              | Espacios reducidos               |
| `symbol`         | Solo ícono                      | Botones, iconos, marcas pequeñas |

---

## 🔧 Solución de Problemas

### Problema: Logo no se actualiza

**Solución:** Limpiar cache del bundler

```bash
bun run dev --clean
```

### Problema: Importación incorrecta

**Solución:** Verificar ruta en `brand-index.ts`

```tsx
// Asegurar que el import existe
import logoLightSvg from "../console/app/src/asset/brand/codingsoft-logo-light.svg"
```

### Problema: Colores incorrectos

**Solución:** Revisar gradientes en SVG

```xml
<!-- Verificar que los colores coincidan con la paleta -->
<stop offset="0%" style="stop-color:#00BCD4;stop-opacity:1" />
```

---

## 📦 Descarga de Assets

Los usuarios pueden descargar todos los assets desde:

- **Web:** `/brand` - Página oficial de brand assets
- **Directo:** `/codingsoft-brand-assets.zip` - ZIP con todos los assets

---

## 🚨 Importante

⚠️ **NO** modifiques directamente los archivos en:

- `packages/ui/src/assets/images/` (legacy)
- `packages/web/src/assets/` (duplicado)
- `packages/docs/logo/` (usar imports centralizados)

✅ **SIEMPRE** usa:

- `packages/console/app/src/asset/brand/` (single source of truth)
- `packages/ui/src/assets/brand-index.ts` (config centralizada)

---

## 📞 Soporte

Si encuentras problemas:

1. Ejecuta `bun run scripts/brand-manager.ts check`
2. Revisa `/brand` en el navegador
3. Verifica la consola de errores
4. Consulta `BRANDING-IMPLEMENTATION.md`

---

**Última actualización:** 2026-04-09
**Versión:** 1.0.0
