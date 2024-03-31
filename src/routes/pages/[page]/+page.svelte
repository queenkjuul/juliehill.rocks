<script>
  import { DATA_KEY } from '$lib'
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'
  import { getContext } from 'svelte'

  export let data
  const { metadata } = data.mdPage
  const { title } = metadata
  $: component = data.mdPage.component

  const context = getContext(DATA_KEY)
  const { person } = context
  const { firstName, lastName } = person
</script>

<svelte:head>
  <title>{firstName} {lastName} - {title}</title>
</svelte:head>

<Breadcrumb class="mb-4">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href={`/${title}`}>{title}</BreadcrumbItem>
</Breadcrumb>

<div>
  <svelte:component this={component} />
</div>
