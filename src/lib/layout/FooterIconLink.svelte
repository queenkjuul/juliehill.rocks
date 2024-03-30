<script>
  import { FooterIcon } from 'flowbite-svelte'

  export let href
  export let component
</script>

<FooterIcon>
  <a {href} target="_blank">
    <svelte:component this={component} />
  </a>
</FooterIcon>
