<script>
  import Breadcrumbs from '$lib/layout/Breadcrumbs.svelte'
  import Title from '$lib/layout/Title.svelte'
  import ContentWrapper from '$src/lib/layout/ContentWrapper.svelte'

  export let data
  const { metadata } = data.mdPage
  const { title } = metadata
  $: component = data.mdPage.component
</script>

<Title {title} />

<Breadcrumbs {title} />

<ContentWrapper class="flex flex-col gap-4 md:mx-auto md:w-2/3">
  <svelte:component this={component} />
</ContentWrapper>
