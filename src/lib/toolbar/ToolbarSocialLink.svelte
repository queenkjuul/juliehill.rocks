<script lang="ts">
  import type { SocialLink } from '$util/config'
  import ToolbarLink from './ToolbarLink.svelte'

  export let social: SocialLink

  const { name, href, component } = social
</script>

<ToolbarLink {name} {href}>
  <svelte:component this={component} />
</ToolbarLink>
