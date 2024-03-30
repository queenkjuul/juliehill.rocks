<script>
  import { DATA_KEY } from '$lib'
  import { getContext } from 'svelte'

  export let data
  const { metadata } = data.mdPage
  $: component = data.mdPage.component

  const context = getContext(DATA_KEY)
  const { person } = context
  const { firstName, lastName } = person
</script>

<svelte:head>
  <title>{firstName} {lastName} - {metadata.title}</title>
</svelte:head>

<div>
  <svelte:component this={component} />
</div>
