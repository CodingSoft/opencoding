# CodingSoft - ASCII Logo Collection

Colección completa de ASCII art del logo de **CodingSoft** para uso en terminal, CLI tools, documentación y más.

## 📁 Archivos Disponibles

| Archivo                     | Descripción                       | Uso               |
| --------------------------- | --------------------------------- | ----------------- |
| `ascii-logo.txt`            | Colección completa en texto plano | Referencia visual |
| `codingsoft-logo-ascii.txt` | Versiones basadas en el logo real | Principal         |
| `codingsoft-logo.ts`        | Versión TypeScript con colores    | Proyectos TS      |
| `codingsoft-logo.js`        | Versión JavaScript con colores    | Proyectos JS      |
| `codingsoft-logo-colors.ts` | Módulo de colores ANSI            | Utilidad          |

## 🚀 Uso Rápido

### JavaScript/Node.js

```javascript
const logo = require("./codingsoft-logo")

// Imprimir logo principal
logo.print()

// O con tipo específico
logo.printLogo("blue")
logo.printLogo("minimal")
logo.printLogo("splash")
```

### TypeScript

```typescript
import { printLogo, getLogo } from "./codingsoft-logo"

// Imprimir directamente
printLogo("full")

// Obtener como string
const logoText = getLogo("banner")
console.log(logoText)
```

### ES Modules

```javascript
import logo from "./codingsoft-logo.js"

logo.print()
// o
console.log(logo.logoFull)
```

## 🎨 Versiones Disponibles

### 1. `full` - Logo Completo

```
   ╭───────╮
  ╱   ╭─╮   ╲     ██████╗ ██████╗ ██████╗ ███████╗
 │   ╭╯ ╰╮   │   ██╔════╝██╔══██╗██╔══██╗██╔════╝
 │   │ ● │   │   ██║     ███████║██████╔╝█████╗
  ╲   ╰─╯   ╱    ██║     ██╔══██║██╔══██╗██╔══╝
   ╰───────╯     ╚██████╗██║  ██║██████╔╝███████╗
                   ╚═════╝╚═╝  ╚═╝╚═════╝ ╚══════╝
```

### 2. `blue` - Versión Azul

Mismo diseño que `full` pero en color azul corporativo.

### 3. `minimal` - Minimalista

```
  ╭─────╮
 │  ●  │   CodingSoft
  ╰─────╯
```

### 4. `slogan` - Con Slogan

Incluye el tagline "Software Solutions for Modern Coders"

### 5. `splash` - Splash Screen

Con fondo y bordes decorativos, ideal para pantallas de bienvenida.

### 6. `symbol` - Símbolo Solo

Versión detallada del ícono circular sin texto.

### 7. `banner` - Banner

Enmarcado en un recuadro, perfecto para documentación.

### 8. `nocolor` - Sin Colores

Fallback automático para terminales sin soporte de color.

## 🌈 Colores ANSI

Los logos usan los siguientes códigos:

| Color       | Código     | Nombre          |
| ----------- | ---------- | --------------- |
| Cyan        | `\x1b[36m` | Color principal |
| Bright Cyan | `\x1b[96m` | Énfasis         |
| Blue        | `\x1b[34m` | Alternativa     |
| Bright Blue | `\x1b[94m` | Énfasis azul    |

## 💡 Ejemplos de Uso

### CLI Tool Welcome

```javascript
const logo = require("./codingsoft-logo")

console.clear()
logo.printLogo("splash")
console.log("\nBienvenido a CodingSoft CLI\n")
```

### Package.json Script

```json
{
  "scripts": {
    "logo": "node -e \"require('./codingsoft-logo').print()\""
  }
}
```

### Documentación

```javascript
// En tu archivo de configuración de docs
import { getLogo } from "./codingsoft-logo"

const logo = getLogo("banner")
fs.writeFileSync("docs/logo.txt", logo)
```

### React/Node App

```typescript
import { printLogo } from "./codingsoft-logo"

// En el startup de tu app
printLogo("full")
console.log("Iniciando servidor...")
```

## 🔧 Personalización

### Cambiar Colores

Edita los códigos ANSI en `codingsoft-logo.js`:

```javascript
// Cambiar cyan a verde
const colors = {
  cyan: "\x1b[32m", // era '\x1b[36m'
}
```

### Crear Nueva Versión

Copia una existente y modifica:

```javascript
const logoCustom = `
   ${colors.cyan}╭───────╮${colors.reset}
  ${colors.cyan}╱       ╲${colors.reset}    TU TEXTO
   ${colors.cyan}╰───────╯${colors.reset}
`
```

## 📏 Dimensiones Recomendadas

| Versión | Ancho | Alto | Terminal Mínima |
| ------- | ----- | ---- | --------------- |
| full    | 80    | 8    | 80x24           |
| minimal | 40    | 4    | 40x10           |
| splash  | 80    | 15   | 80x30           |
| banner  | 60    | 12   | 60x20           |

## 🖥️ Compatibilidad

| Terminal               | Soporte                  |
| ---------------------- | ------------------------ |
| macOS Terminal         | ✅ Completo              |
| iTerm2                 | ✅ Completo              |
| Windows Terminal       | ✅ Completo              |
| VS Code Terminal       | ✅ Completo              |
| Linux (gnome-terminal) | ✅ Completo              |
| CMD Windows            | ⚠️ Parcial (sin colores) |

## 🎯 Casos de Uso

### 1. Startup de Aplicación

```javascript
logo.printLogo("splash")
```

### 2. Header de Documentación

```javascript
logo.printLogo("banner")
```

### 3. Mensaje de Bienvenida CLI

```javascript
logo.printLogo("minimal")
console.log("v1.0.0")
```

### 4. Logo en Logs

```javascript
console.log(logo.getLogo("nocolor"))
```

## 📦 Exportaciones

```javascript
// Todas las exportaciones
import {
  // Logos como strings
  logoFull,
  logoBlue,
  logoMinimal,
  logoWithSlogan,
  logoSplash,
  symbolOnly,
  logoBanner,
  logoNoColor,

  // Funciones
  getLogo,
  printLogo,
  print,
  getAllLogos,
  supportsColor,

  // Utilidades
  colors,
} from "./codingsoft-logo"
```

## 🔍 Detección de Color Automática

El módulo detecta automáticamente si la terminal soporta colores:

```javascript
import { supportsColor, getLogo } from "./codingsoft-logo"

if (supportsColor()) {
  console.log("✅ Colores disponibles")
} else {
  console.log("❌ Sin colores")
}

// Automáticamente usa versión sin color si no hay soporte
console.log(getLogo("full"))
```

## 📝 Notas

1. **Fallback automático**: Si la terminal no soporta colores, se usa automáticamente la versión `nocolor`
2. **Variables de entorno**:
   - `NO_COLOR`: Si está presente, deshabilita colores
   - `TERM=dumb`: Terminal sin colores
3. **Recomendado**: Usar terminales modernos para mejor experiencia

## 🎨 Ejemplo de Salida

```bash
$ node -e "require('./codingsoft-logo').print()"

   ╭───────╮
  ╱   ╭─╮   ╲     ██████╗ ██████╗ ██████╗ ███████╗
 │   ╭╯ ╰╮   │   ██╔════╝██╔══██╗██╔══██╗██╔════╝
 │   │ ● │   │   ██║     ███████║██████╔╝█████╗
  ╲   ╰─╯   ╱    ██║     ██╔══██║██╔══██╗██╔══╝
   ╰───────╯     ╚██████╗██║  ██║██████╔╝███████╗
                   ╚═════╝╚═╝  ╚═╝╚═════╝ ╚══════╝
```

## 📚 Recursos Adicionales

- [ANSI Escape Codes](https://en.wikipedia.org/wiki/ANSI_escape_code)
- [Node.js Terminal Support](https://nodejs.org/api/process.html#process_process_stdout)
- [Terminal Colors Guide](https://github.com/termstandard/colors)

---

**CodingSoft** - Software Solutions for Modern Coders
