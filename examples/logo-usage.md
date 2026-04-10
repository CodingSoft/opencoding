# 💡 Ejemplos de Uso - Sistema de Logos Centralizado

## Importación Básica

```tsx
// Opción 1: Importar componente completo
import { Logo } from '@/components/logo-centralized'

// Opción 2: Importar función helper
import { getLogoUrl } from '@/assets/brand-index'

// Opción 3: Importar assets directamente
import { logoLightSvg, logoDarkSvg } from '@/assets/brand-index'
```

---

## Ejemplos por Caso de Uso

### 1. Logo Automático (Detecta Tema)

```tsx
import { Logo } from '@/components/logo-centralized'

function Header() {
  return (
    <header>
      <Logo />
    </header>
  )
}
```

**Resultado:** Muestra logo light o dark según el tema del sistema.

---

### 2. Logo Forzando Tema

```tsx
import { Logo } from '@/components/logo-centralized'

function DarkHeader() {
  return (
    <header>
      {/* Siempre muestra logo dark */}
      <Logo theme="dark" />
    </header>
  )
}
```

---

### 3. Diferentes Variantes

```tsx
import { Logo } from '@/components/logo-centralized'

function Branding() {
  return (
    <div>
      {/* Logo completo (default) */}
      <Logo variant="full" />
      
      {/* Logo cuadrado */}
      <Logo variant="square" />
      
      {/* Solo wordmark (texto) */}
      <Logo variant="wordmark" />
      
      {/* Solo símbolo */}
      <Logo variant="symbol" />
    </div>
  )
}
```

---

## Casos de Uso Comunes

### Header de Navegación
```tsx
import { HeaderLogo } from '@/components/logo-centralized'

function Navbar() {
  return (
    <nav>
      <HeaderLogo />
    </nav>
  )
}
```

### Splash Screen
```tsx
import { Splash } from '@/components/logo-centralized'

function LoadingScreen() {
  return (
    <div class="splash">
      <Splash />
    </div>
  )
}
```

### Avatar/Icono
```tsx
import { Mark } from '@/components/logo-centralized'

function UserAvatar() {
  return (
    <div class="avatar">
      <Mark width={40} height={40} />
    </div>
  )
}
```

---

## Migración de Código Legacy

### Antes (Incorrecto)
```tsx
import logoLight from "../assets/images/logo-header-light.png"
import logoDark from "../assets/images/logo-header-dark.png"

function Header() {
  const src = isDark ? logoDark : logoLight
  return <img src={src} alt="Logo" />
}
```

### Después (Correcto)
```tsx
import { Logo } from '@/components/logo-centralized'

function Header() {
  return <Logo theme="auto" />
}
```

---

## Referencias

- **Guía Completa:** `/docs/BRAND-GUIDE.md`
- **Revisión:** `/BRAND-REVIEW.md`
