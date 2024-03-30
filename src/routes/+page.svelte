<script>
  import { person, pfp } from '$lib'
  import { Heading, Img } from 'flowbite-svelte'
  // @ts-ignore
  import About from '../lib/content/about.md'
  const { firstName, lastName, occupation } = $person
</script>

<div class="flex w-full flex-row gap-4 rounded-lg bg-white p-2 dark:bg-gray-800 md:p-8">
  <Img
    class="rounded-2xl"
    src={$pfp}
    size="w-64"
    alt={`${firstName} ${lastName}'s Profile Picture'`}
  />
  <div class="flex w-full flex-col gap-2 lg:gap-4">
    <Heading tag="h1">{firstName} {lastName}</Heading>
    <Heading tag="h2">{occupation}</Heading>
    <About />
  </div>
</div>
