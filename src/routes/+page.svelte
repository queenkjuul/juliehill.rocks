<script>
  import { person, pfp } from '$lib'
  import { Heading, Img } from 'flowbite-svelte'
  // @ts-ignore
  import About from '../lib/content/about.md'
  const { firstName, lastName, occupation } = $person
</script>

<div
  class="
    flex w-full
    flex-col
    items-center
    justify-center
    gap-4
    rounded-lg
    bg-white
    p-4
    dark:bg-gray-800
    md:flex-row
    md:p-8"
>
  <Img
    class="rounded-2xl"
    src={$pfp}
    size="w-32 h-32 md:w-64 md:h-64"
    alt={`${firstName} ${lastName}'s Profile Picture'`}
  />
  <div class="flex w-full flex-col items-center justify-center gap-2 lg:gap-4">
    <Heading tag="h1" class="text-center lg:text-left">{firstName} {lastName}</Heading>
    <Heading tag="h2" class="text-center lg:text-left">{occupation}</Heading>
    <About />
  </div>
</div>
