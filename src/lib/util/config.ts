import _pfp from '$assets/pfp.png'
import { config } from '$src/site.config'
import type { ComponentType } from 'svelte'
import { derived, readable, writable } from 'svelte/store'

export interface Person {
  firstName: string
  lastName: string
  occupation: string
  languages?: Languages
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

export type Socials = Array<SocialLink>
export type Languages = Array<Language>

export type SiteConfig = {
  person: Person
  socials: Socials
}

const _person = writable<Person>()
const _socials = writable<Socials>()

export const pfp = readable(_pfp)
export const person = derived(_person, ($person) => $person)
export const socials = derived(_socials, ($socials) => $socials)

export function setup() {
  _person.set(config.person)
  _socials.set(config.socials)
}
