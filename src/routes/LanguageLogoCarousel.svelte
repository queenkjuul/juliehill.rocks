<script>
  import { Carousel } from 'flowbite-svelte'
  import { getContext } from 'svelte'
  import { fade } from 'svelte/transition'
  import { DATA_KEY } from '../lib'
  const context = getContext(DATA_KEY)
  const images = context.languageImages

  let label = ''
</script>

{#if images && images.length !== 0}
  <div class="w-full">
    {#key label}
      <div
        class="h-10 w-full rounded p-2 text-center text-lg font-extrabold dark:text-gray-300 lg:text-2xl"
        in:fade
      >
        <span>{label}</span>
      </div>
    {/key}
    <Carousel
      class="my-2 h-10"
      imgClass="object-contain h-full w-fit rounded-sm"
      duration={3500}
      {images}
      let:Controls
      on:change={({ detail }) => {
        label = detail.title
      }}
    >
      <Controls />
    </Carousel>
  </div>
{/if}
