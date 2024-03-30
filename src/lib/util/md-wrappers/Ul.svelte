<script>
  import { List } from 'flowbite-svelte'
</script>

<List tag="ul" {...$$restProps}>
  <slot />
</List>
