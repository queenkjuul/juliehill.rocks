import type { ComponentType } from 'svelte'
import type { HTMLImgAttributes } from 'svelte/elements'

export const DATA_KEY = Symbol.for('appData')
export const DRAWER_KEY = Symbol.for('drawer')
export const PAGELINKS_KEY = Symbol.for('pagelinks')

export interface Person {
  firstName: string
  lastName: string
  occupation?: string
  location?: string
  languages?: Languages
  email?: string
  github?: string
}

export interface Language {
  displayName: string
  deviconKey: string
}

export interface SocialLink {
  name: string
  href: string
  component: ComponentType
}

export interface Page {
  metadata: Partial<{ title: string }>
  path?: string
  // unsure of MDsveX component type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any
}

export interface PageLink {
  label: string
  filename: string
}

export type Socials = Array<SocialLink>
export type Languages = Array<Language>
export type Pages = Array<Page>

export type UserConfig = {
  person: Person
  socials: Socials
}

export type AppData = {
  person: Person
  socials: Socials
  languageImages: HTMLImgAttributes[]
  pfp: string
  pdf: string
  pages: Pages
}
