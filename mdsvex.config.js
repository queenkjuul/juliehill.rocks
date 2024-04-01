import { defineMDSveXConfig as defineConfig } from 'mdsvex'

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [],
  rehypePlugins: [],
  layout: {
    _: './src/lib/util/md-wrappers/MdPageLayout.svelte',
  },
})

export default config
