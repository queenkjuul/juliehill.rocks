<script>
  import About from '$lib/content/about.md'
  import ContentWrapper from '$src/lib/layout/ContentWrapper.svelte'
  import { Heading, Img } from 'flowbite-svelte'
  import { getContext } from 'svelte'
  import { DATA_KEY } from '../lib'

  const context = getContext(DATA_KEY)
  const { person, pfp } = context
  const { firstName, lastName, occupation, location } = person
</script>

<ContentWrapper
  class="
    flex w-full
    flex-col
    items-center
    justify-center
    gap-4
    md:flex-row
    md:items-start
    md:p-8"
>
  <Img
    class="rounded-2xl"
    src={pfp}
    size="w-32 h-32 md:w-64 md:h-64"
    alt={`${firstName} ${lastName}'s Profile Picture'`}
  />
  <div class="flex w-full flex-col items-center justify-center gap-2">
    <Heading
      tag="h1"
      class="text-center text-primary-400 dark:text-primary-400 md:ml-8 md:text-left"
      >{firstName} {lastName}</Heading
    >
    <Heading tag="h2" class="text-center md:ml-8 md:text-left">{occupation}</Heading>
    {#if location}
      <Heading tag="h6" class="text-center md:ml-8 md:text-left">{location}</Heading>
    {/if}
    <About />
  </div>
</ContentWrapper>
