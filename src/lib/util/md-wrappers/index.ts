// mappings for mdsvex to use Flowbite components in place of raw HTML elements
import { A, Blockquote, Heading, Hr, Img, Li, P } from 'flowbite-svelte'
import Heading2 from './Heading2.svelte'
import Heading3 from './Heading3.svelte'
import Heading4 from './Heading4.svelte'
import Heading5 from './Heading5.svelte'
import Heading6 from './Heading6.svelte'
import Ol from './Ol.svelte'
import Ul from './Ul.svelte'

export const h1 = Heading

export const h2 = Heading2

export const h3 = Heading3

export const h4 = Heading4

export const h5 = Heading5

export const h6 = Heading6

export const p = P

export const a = A

export const blockquote = Blockquote

export const hr = Hr

export const img = Img

export const li = Li

export const ul = Ul

export const ol = Ol
