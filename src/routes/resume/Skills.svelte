<script>
  export let skills
</script>

<div class="mb-4 flex flex-row flex-wrap items-center justify-center gap-2">
  {#each skills as skill}
    <div class="mx-1 text-sm">{skill}</div>
  {/each}
</div>
