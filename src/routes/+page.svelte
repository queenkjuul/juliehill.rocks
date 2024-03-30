<script>
  import { person, pfp } from '$lib'
  import { Img } from 'flowbite-svelte'
  const { firstName, lastName, occupation } = $person
</script>

<div class="flex w-full flex-row gap-2 rounded-lg bg-white p-2 dark:bg-gray-800 md:p-8">
  <Img
    class="rounded-2xl"
    src={$pfp}
    size="w-64"
    alt={`${firstName} ${lastName}'s Profile Picture'`}
  />
  <div class="flex w-full flex-col">
    <h1>{firstName} {lastName}</h1>
    <h2>{occupation}</h2>
  </div>
</div>
