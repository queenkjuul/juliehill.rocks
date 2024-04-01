<script>
  import { getContext } from 'svelte'
  import { DATA_KEY } from '..'

  const context = getContext(DATA_KEY)
  const { firstName, lastName } = context.person

  export let title
</script>

<svelte:head
  ><title>
    {firstName}
    {lastName} - {title}
  </title>
</svelte:head>
