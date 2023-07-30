/*
 *  Copyright 2021-present Etherna Sagl
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

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
