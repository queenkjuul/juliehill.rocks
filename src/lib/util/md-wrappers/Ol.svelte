<script>
  import { List } from 'flowbite-svelte'
</script>

<List tag="ol" {...$$restProps}>
  <slot />
</List>
