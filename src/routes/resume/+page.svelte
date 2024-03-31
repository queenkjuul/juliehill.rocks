<script>
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'

  export let data

  const { mdPage, person } = data
  const { component, metadata } = mdPage
  const { firstName, lastName } = person

  $: console.log(metadata)
</script>

<svelte:head
  ><title>
    {firstName}
    {lastName} - Résumé
  </title>
</svelte:head>

<Breadcrumb class="mb-4 ml-4">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href={`/resume`}>Résumé</BreadcrumbItem>
</Breadcrumb>

<div class="mb-4 flex flex-row items-center justify-around">
  {#each metadata.featuredLanguages as language}
    <div class="flex flex-col">
      <div class="flex items-center justify-center">
        <i class={`devicon-${language.toLowerCase()}-plain text-5xl`} />
      </div>
      <div class="mt-2 text-center text-lg font-bold">{language}</div>
    </div>
  {/each}
</div>

<div class="mb-4 flex flex-row flex-wrap items-center justify-center gap-2">
  {#each metadata.skills as skill}
    <div class="mx-1 text-sm">{skill}</div>
  {/each}
</div>

<div class="resume rounded-lg bg-gray-50 p-4 dark:bg-gray-800 lg:p-8">
  <svelte:component this={component} />
</div>

<style lang="postcss">
  /* since mdsvex is handling the markdown "component" rendering,
    we have no choice but to use some global styles */
  .resume :global(hr) {
    @apply mb-4 mt-0 h-1 bg-primary-400;
  }

  .resume :global(h2) {
    @apply mt-4;
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
