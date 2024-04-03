<script lang="ts">
  import { fade } from 'svelte/transition'

  // hours turned to days as every third-party masonry layout
  // library from across the land was tried, and one by one each
  // failed to work correctly (even Flowbite Gallery)
  // so screw it, we'll do it live
  import type { ComponentType } from 'svelte'

  // eslint not properly picking up svelte generic
  // eslint-disable-next-line no-undef
  type T = $$Generic
  export let items: Array<T> = []
  export let breakpoints: Array<number> = [768, 1024]
  export let component: ComponentType
  export let divClass: string = ''
  export let gap: string = 'gap-4'

  let columns: Array<Array<T>>
  let currentWidth = -1

  $: assignColumnsArrays(breakpoints, currentWidth, items)

  function assignColumnsArrays(breakpoints: Array<number>, currentWidth: number, items: Array<T>) {
    columns = [[]]
    breakpoints.forEach((bp) => {
      if (currentWidth >= bp) {
        columns.push([])
      }
    })

    const mod = columns.length
    for (let i = 0; i < mod; i++) {
      columns[i] = items.filter((item, index) => index % mod === i)
    }
  }
</script>

{#key columns}
  {#if items && columns && items.length > 0}
    <div
      class={`flex flex-row justify-center ${divClass} ${gap}`}
      bind:clientWidth={currentWidth}
      transition:fade
    >
      {#each columns as column}
        <div class={`flex flex-col justify-start ${gap}`}>
          {#each column as item}
            <svelte:component this={component} {item} {...$$restProps} />
          {/each}
        </div>
      {/each}
    </div>
  {/if}
{/key}
