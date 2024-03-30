import type { HTMLImgAttributes } from 'svelte/elements'
import { type Language } from '..'

export function getDeviconAttributes(language: Language): HTMLImgAttributes {
  return {
    alt: language.displayName,
    title: language.displayName,
    src: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${language.deviconKey}/${language.deviconKey}-original.svg`,
  }
}
