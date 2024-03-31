import { defineMDSveXConfig as defineConfig } from 'mdsvex'

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [],
  rehypePlugins: [],
  layout: {
    _: './src/routes/pages/[page]/MdPageLayout.svelte',
    resume: './src/routes/resume/MdResumeLayout.svelte',
  },
})

export default config
