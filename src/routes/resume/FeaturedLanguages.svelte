<script>
  export let featuredLanguages
</script>

<div class="mb-4 flex w-full flex-row items-center justify-around">
  {#each featuredLanguages as language}
    <div class="flex flex-col">
      <div class="flex items-center justify-center">
        <i class={`devicon-${language.toLowerCase()}-plain text-5xl`} />
      </div>
      <div class="mt-2 text-center text-lg font-bold">{language}</div>
    </div>
  {/each}
</div>
