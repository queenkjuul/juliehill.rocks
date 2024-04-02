<script lang="ts">
  import Breadcrumbs from '$src/lib/layout/Breadcrumbs.svelte'
  import MasonryLayout from '$src/lib/layout/MasonryLayout.svelte'
  import Title from '$src/lib/layout/Title.svelte'
  import { Heading, Hr } from 'flowbite-svelte'
  import type { RepoCardData } from './RepoInfoCard.svelte'
  import RepoInfoCard from './RepoInfoCard.svelte'

  export let data

  const { repos, pinned } = data
  const breakpoints = [768, 1140] // tailwindcss.config.cjs import doesn't work, but those bp's dont work perfectly here either
  const component = RepoInfoCard
  const gap = 'gap-4'
  const title = 'Code'

  $: pinnedNames = pinned?.map?.(({ name }) => name) ?? []
  $: ghRepoCardData = repos?.filter((repo: RepoCardData) => !pinnedNames.includes(repo.name))
</script>

<Title {title} />

<Breadcrumbs {title} />

{JSON.stringify(data.tonkason)}

<!-- if no github token, we will only get public repos, not pinned rpos -->
{#if pinned.length > 0}
  <Heading class="text-center">Featured Repos</Heading>
  <Hr hrClass="mt-0 h-1 bg-primary-400 border-primary-400 mb-4 mx-auto w-1/2" />
  <MasonryLayout items={pinned} {component} {breakpoints} {gap} divClass="mb-4" />
{/if}

<Heading class="text-center">Public Repositories</Heading>
<Hr hrClass="mt-0 h-1 bg-primary-400 border-primary-400 mb-4 mx-auto w-1/2" />
<MasonryLayout items={ghRepoCardData} {component} {breakpoints} {gap} compact />
