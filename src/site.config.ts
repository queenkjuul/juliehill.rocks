import { GithubSolid, LinkedinSolid, YoutubeSolid } from 'flowbite-svelte-icons'
import type { SiteConfig } from './lib/util/config'

export const config: SiteConfig = {
  person: {
    firstName: 'Julie',
    lastName: 'Hill',
    occupation: 'Frontend Engineer',
    languages: [
      {
        displayName: 'TypeScript',
        deviconKey: 'typescript',
      },
      {
        displayName: 'Svelte+SvelteKit',
        deviconKey: 'svelte',
      },
      {
        displayName: 'React',
        deviconKey: 'react',
      },
      {
        displayName: 'Angular',
        deviconKey: 'angular',
      },
    ],
  },
  socials: [
    {
      name: 'GitHub',
      href: 'https://github.com/queenkjuul',
      component: GithubSolid,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/juliehill606',
      component: LinkedinSolid,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCVYoAvIry5NJbeURmc1qYrg',
      component: YoutubeSolid,
    },
  ],
}
