/**
 * CodingSoft Logo Component - Wrapper Centralizado
 *
 * Este componente ahora es un wrapper que delega toda la lógica
 * al componente centralizado `Logo` para mantener compatibilidad
 * con código legacy mientras usa la nueva infraestructura.
 */

import { Logo } from "./logo-centralized"

export interface CodingSoftLogoProps {
  variant?: "full" | "wordmark" | "symbol" | "square"
  theme?: "light" | "dark" | "auto"
  width?: number
  height?: number
  class?: string
  alt?: string
}

/**
 * CodingSoftLogo - Componente principal
 * @deprecated Usa directamente `Logo` de './logo-centralized' en código nuevo
 */
export function CodingSoftLogo(props: CodingSoftLogoProps) {
  return <Logo {...props} />
}

/**
 * CodingSoftMark - Acceso directo al símbolo
 */
export function CodingSoftMark(props: { class?: string }) {
  return <Logo variant="symbol" width={40} height={40} class={props.class} />
}

/**
 * CodingSoftSplash - Logo grande para splash screens
 */
export function CodingSoftSplash(props: { class?: string }) {
  return <Logo variant="full" width={300} height={162} class={props.class} />
}

export default CodingSoftLogo
