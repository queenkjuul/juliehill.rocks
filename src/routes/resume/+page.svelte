<script>
  import Breadcrumbs from '$lib/layout/Breadcrumbs.svelte'
  import Title from '$lib/layout/Title.svelte'
  import { RESUME_LABEL } from '$src/lib'
  import { wrapperClass } from '$src/lib/layout/ContentWrapper.svelte'
  import { Tooltip } from 'flowbite-svelte'
  import { DownloadSolid, PrinterSolid } from 'flowbite-svelte-icons'
  import FeaturedLanguages from './FeaturedLanguages.svelte'
  import PersonalInfoCard from './PersonalInfoCard.svelte'
  import Skills from './Skills.svelte'

  export let data

  const title = RESUME_LABEL

  const { mdPage, pdf } = data
  const { component, metadata } = mdPage
  const { blurb, featuredLanguages, skills } = metadata
</script>

<Title {title} />

<div class="flex flex-row justify-between print:hidden">
  <Breadcrumbs href="resume" {title} />
  <div class="grow" />
  <button
    on:click={() => window.print()}
    class="mr-8 mt-0.5 flex flex-col text-sm text-gray-700 dark:text-gray-400"
    ><PrinterSolid /></button
  >
  <Tooltip>Print Page</Tooltip>
  <a href={pdf} class={`${pdf ? '' : 'hidden'} mr-2 text-sm text-gray-700 dark:text-gray-400`}
    ><DownloadSolid /></a
  >
  <Tooltip>Download PDF {RESUME_LABEL}</Tooltip>
</div>

<div class="flex flex-col gap-4 md:flex-row">
  <div class="flex flex-col items-center justify-center md:justify-start">
    <PersonalInfoCard {blurb} />

    <FeaturedLanguages {featuredLanguages} />

    <Skills {skills} />
  </div>

  <div class={`resume ${wrapperClass}`}>
    <svelte:component this={component} />
  </div>
</div>

<style lang="postcss">
  /* since mdsvex is handling the markdown "component" rendering,
    we have no choice but to use some global styles, but with the 
    .resume prefix, they will not be applied outside this component */
  .resume :global(hr) {
    @apply mb-4 mt-0 h-1 bg-primary-400;
  }

  .resume :global(h1) {
    @apply text-4xl;
  }

  .resume :global(h2) {
    @apply mt-4 text-3xl;
  }

  .resume :global(h3) {
    @apply text-2xl;
  }

  .resume :global(h4) {
    @apply text-xl italic;
  }

  .resume :global(h5),
  .resume :global(h6) {
    @apply text-lg;
  }
</style>
