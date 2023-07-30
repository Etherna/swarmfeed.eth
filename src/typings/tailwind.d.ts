import type * as CSS from "csstype"

declare module "react" {
  interface TailwindProperties {
    "--tw-border-spacing-x"?: number
    "--tw-border-spacing-y"?: number
    "--tw-translate-x"?: number
    "--tw-translate-y"?: number
    "--tw-rotate"?: number
    "--tw-skew-x"?: number
    "--tw-skew-y"?: number
    "--tw-scale-x"?: number
    "--tw-scale-y"?: number
    "--tw-pan-x"?: number
    "--tw-pan-y"?: number
    "--tw-pinch-zoom"?: string
    "--tw-scroll-snap-strictness"?: string
    "--tw-gradient-from-position"?: string
    "--tw-gradient-via-position"?: string
    "--tw-gradient-to-position"?: string
    "--tw-ordinal"?: string
    "--tw-slashed-zero"?: string
    "--tw-numeric-figure"?: string
    "--tw-numeric-spacing"?: string
    "--tw-numeric-fraction"?: string
    "--tw-ring-inset"?: string
    "--tw-ring-offset-width"?: string
    "--tw-ring-offset-color"?: string
    "--tw-ring-color"?: string
    "--tw-ring-offset-shadow"?: string
    "--tw-ring-shadow"?: string
    "--tw-shadow"?: string
    "--tw-shadow-colored"?: string
    "--tw-blur"?: string
    "--tw-brightness"?: string
    "--tw-contrast"?: string
    "--tw-grayscale"?: string
    "--tw-hue-rotate"?: string
    "--tw-invert"?: string
    "--tw-saturate"?: string
    "--tw-sepia"?: string
    "--tw-drop-shadow"?: string
    "--tw-backdrop-blur"?: string
    "--tw-backdrop-brightness"?: string
    "--tw-backdrop-contrast"?: string
    "--tw-backdrop-grayscale"?: string
    "--tw-backdrop-hue-rotate"?: string
    "--tw-backdrop-invert"?: string
    "--tw-backdrop-opacity"?: string
    "--tw-backdrop-saturate"?: string
    "--tw-backdrop-sepia"?: string
  }

  interface CSSProperties extends TailwindProperties {
    test?: string
  }
}
