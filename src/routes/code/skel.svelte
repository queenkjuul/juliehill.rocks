<script>
  import { Heading, Hr, Skeleton } from 'flowbite-svelte'

  const style = 'w-[320px] max-w-[320px] text-black'
  const nums = [...Array(9).keys()]
</script>

<div class="md:max-w-2/3 mx-auto mt-[40px] h-full grow basis-full md:w-2/3">
  <Heading tag="h1" class="animate-pulse text-center text-gray-50 dark:text-gray-800"
    >Fetching GitHub data</Heading
  >
  <Hr class="animate-pulse" />
  <div class="lg:max-w-2/3 m-4 grid h-[180px] grid-flow-row gap-4 md:grid-cols-2 lg:grid-cols-3">
    {#each nums as _i}
      <Skeleton class={style} />
    {/each}
  </div>
</div>
