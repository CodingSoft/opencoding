import { createMemo } from "solid-js"
import { useTheme } from "../theme/context"
import { getLogoUrl, legacyAssets } from "../assets/brand-index"

function useLogoSrc() {
  const theme = useTheme()
  return createMemo(() => getLogoUrl("full", theme.mode() === "dark" ? "dark" : "light", "svg"))
}

export const Mark = (props: { class?: string }) => {
  const src = useLogoSrc()
  return (
    <img data-component="logo-mark" classList={{ [props.class ?? ""]: !!props.class }} src={src()} alt="CodingSoft" />
  )
}

export const Splash = (props: { class?: string; ref?: any }) => {
  const theme = useTheme()
  const src = createMemo(() => getLogoUrl("full", theme.mode() === "dark" ? "dark" : "light", "svg"))

  return (
    <img
      ref={props.ref}
      data-component="logo-splash"
      classList={{ [props.class ?? ""]: !!props.class }}
      src={src()}
      alt="CodingSoft"
    />
  )
}

export const Logo = (props: { class?: string }) => {
  const src = useLogoSrc()
  return <img data-component="logo" classList={{ [props.class ?? ""]: !!props.class }} src={src()} alt="CodingSoft" />
}
