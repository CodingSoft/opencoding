# OpenCoding Assets

<p align="center">
  <img src="https://img.shields.io/badge/ASCII-Art-blue?style=flat-square" alt="ASCII Art" />
  <img src="https://img.shields.io/badge/TUI-Terminal-brightgreen?style=flat-square" alt="TUI" />
</p>

<pre>
   ╭───────╮
  ╱   ╭─╮   ╲     ██████╗   ██████╗   ██████╗
 │   ╭╯ ╰╮   │   ██╔════╝   ██╔══██╗  ██╔══██╗  ██╔════╝
 │   │ ● │   │   ██║        ██████║   ██████╔╝  █████╗
  ╲   ╰─╯   ╱    ██║        ██╔══██╗  ██╔══██╗  ██╔══╝
   ╰───────╯     ╚██████╗   ██║  ██║  ██████╔╝  ███████╗
                   ╚═════╝   ╚═╝  ╚═╝  ╚═════╝   ╚══════╝
</pre>

<p align="center"><i>The open source AI coding agent</i></p>

---

## 📦 Descripción

OpenCoding es tu asistente de programación impulsado por IA de código abierto, diseñado para trabajar directamente en tu terminal.

## 🚀 Instalación

```bash
# YOLO
curl -fsSL https://opencoding.vercel.app/install | bash

# Package managers
npm i -g @opencoding/cli@latest # or bun/pnpm/yarn
```

## 🎨 ASCII Logo

El logo de OpenCoding está disponible en formato ASCII para usar en tu terminal, CLI tools, y documentación.

### Uso

```typescript
import { printLogo, getLogo } from "@opencoding/cli/assets"

// Imprimir logo directamente
printLogo("full")
printLogo("minimal")
printLogo("splash")

// Obtener como string
const logo = getLogo("banner")
console.log(logo)
```

### Versiones Disponibles

| Versión   | Descripción                 | Uso                    |
| --------- | --------------------------- | ---------------------- |
| `full`    | Logo completo con texto     | Startup de aplicación  |
| `blue`    | Versión en azul corporativo | Alternativa a full     |
| `minimal` | Versión minimalista         | Logs, mensajes rápidas |
| `slogan`  | Con tagline                 | Documentación          |
| `banner`  | Enmarcado                   | README, docs           |
| `splash`  | Splash screen con fondo     | Pantalla de bienvenida |
| `symbol`  | Solo el símbolo             | Icono                  |
| `nocolor` | Sin colores                 | Fallback automático    |

### Demo

Ejecuta la demo para ver todas las versiones:

```bash
bun run packages/codingsoft/src/assets/demo.ts
```

## 🎨 ASCII Logo

El logo de CodingSoft está disponible en formato ASCII para usar en tu terminal, CLI tools, y documentación.

### Uso

```typescript
import { printLogo, getLogo } from "@codingsoft/codingsoft/assets"

// Imprimir logo directamente
printLogo("full")
printLogo("minimal")
printLogo("splash")

// Obtener como string
const logo = getLogo("banner")
console.log(logo)
```

### Versiones Disponibles

| Versión   | Descripción                 | Uso                    |
| --------- | --------------------------- | ---------------------- |
| `full`    | Logo completo con texto     | Startup de aplicación  |
| `blue`    | Versión en azul corporativo | Alternativa a full     |
| `minimal` | Versión minimalista         | Logs, mensajes rápidas |
| `slogan`  | Con tagline                 | Documentación          |
| `banner`  | Enmarcado                   | README, docs           |
| `splash`  | Splash screen con fondo     | Pantalla de bienvenida |
| `symbol`  | Solo el símbolo             | Icono                  |
| `nocolor` | Sin colores                 | Fallback automático    |

### Ejemplo de Salida

```
   ╭───────╮
  ╱   ╭─╮   ╲     ██████╗ ██████╗ ██████╗ ███████╗
 │   ╭╯ ╰╮   │   ██╔════╝██╔══██╗██╔══██╗██╔════╝
 │   │ ● │   │   ██║     ███████║██████╔╝█████╗
  ╲   ╰─╯   ╱    ██║     ██╔══██║██╔══██╗██╔══╝
   ╰───────╯     ╚██████╗██║  ██║██████╔╝███████╗
                   ╚═════╝╚═╝  ╚═╝╚═════╝ ╚══════╝
```

### Demo

Ejecuta la demo para ver todas las versiones:

```bash
bun run packages/codingsoft/src/assets/demo.ts
```

## 📚 Documentación

Para más información, visita [nuestra documentación](https://opencoding.vercel.app/docs).

## 🔧 Desarrollo

### Instalar dependencias

```bash
bun install
```

### Ejecutar

```bash
bun run index.ts
```

### Ejecutar demo de logos

```bash
bun run packages/codingsoft/src/assets/demo.ts
```

## 📖 Recursos Adicionales

- [ASCII Logo README](../../packages/codingsoft/src/assets/ASCII-LOGO-README.md) - Documentación completa
- [codingsoft-logo.ts](../../packages/codingsoft/src/assets/codingsoft-logo.ts) - Módulo TypeScript
- [codingsoft-logo.js](../../packages/codingsoft/src/assets/codingsoft-logo.js) - Módulo JavaScript

## 📄 Licencia

MIT - CodingSoft SA de CV

---

**CodingSoft** - Software Solutions for Modern Coders
