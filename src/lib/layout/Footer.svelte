<script lang="ts">
  import { Footer, FooterCopyright } from 'flowbite-svelte'
  import { getContext } from 'svelte'
  import { DATA_KEY, type AppData } from '..'
  import FooterIconLink from './FooterIconLink.svelte'

  const context: AppData = getContext(DATA_KEY)
  const { socials, person } = context
  const { firstName, lastName } = person
</script>

<Footer class="mt-4">
  <div class="flex flex-col items-center gap-4">
    <FooterCopyright href="/" by={`${firstName} ${lastName}`} year={new Date().getFullYear()} />
    <div class="flex flex-row items-center justify-center gap-4">
      {#each socials as { href, component }}
        <FooterIconLink {href} {component} />
      {/each}
    </div>
  </div>
</Footer>
