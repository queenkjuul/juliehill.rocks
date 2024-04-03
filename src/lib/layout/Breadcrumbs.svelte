<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'

  export let title: string
  export let href: string | null = null
</script>

<Breadcrumb class="mb-4 ml-4">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href={`/${href ?? title.toLowerCase()}`}>{title}</BreadcrumbItem>
</Breadcrumb>
