# juliehill.rocks

## Personal portfolio website of Julie Hill

[_See it live at https://juliehill.rocks_](https://juliehill.rocks)

![cloudflare pages status badge](https://img.shields.io/endpoint?url=https://cloudflare-pages-badges.qkj49.workers.dev/?projectName=juliehill)

![playwright status badge](https://github.com/queenkjuul/juliehill.rocks/actions/workflows/playwright.yml/badge.svg)

![CI status badge](https://github.com/queenkjuul/juliehill.rocks/actions/workflows/ci.yml/badge.svg)

### Technology

- SvelteKit
- PostCSS
- TailwindCSS
- Flowbite
- Playwright
- mdsvex
- Prettier
- ESLint
- TypeScript

### Features

- Customizable and extensible
- Highlight skills with language logos on front page
- Add content via Markdown

### Summary

This project was built from scratch using as much modern tooling and industry best-practice as possible. The repo is setup with branch protection and CI, CD is handled via Cloudflare Pages, commit messages are consistent and informative, and linting, formatting, and testing are all enforced.

Designed to be modular and reusable, other users can simply modify `user.config.ts` to use the app for their own personal site. Social media links can be added or removed, but the icon components will need to be imported in the config file to be used. Icon handling is not great, and requires an ambiguously defined subset of [Devicons](https://devicon.dev/) - as long as the icon has an SVG version with a filename of `{language}-original.svg` will work. Aiming to improve this behavior for public release.

Additional content can be added via Markdown files. Anything in `$content/pages` will get a Nav link generated for it and will be accessible via route `/{filename}`. MDsveX allows you to import any Markdown file to be used as a component, as such:

```svelte
<script>
  import Markdown from '$content/markdown.md'
</script>

<Markdown />
```

Layout and styling need to be improved still.

### Philosophy

I knew I wanted to use Svelte, so I started looking for a component library that was aesthetically pleasing to me and looked like it included all of the components I expected to use. I found several suitable ones, and considered Bootstrap, but Flowbite won me over thanks to the Tailwind underpinnings, which is another tool I'm not sure how I'd live without.

The goal is to demonstrate thoroughly modern, high quality, well-documented, and reusable code.
