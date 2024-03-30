<script lang="ts">
  import {
    DATA_KEY,
    DRAWER_KEY,
    PAGELINKS_KEY,
    generatePageLinks,
    type AppData,
    type PageLink,
  } from '$src/lib'
  import Footer from '$src/lib/layout/Footer.svelte'
  import Header from '$src/lib/layout/Header.svelte'
  import NavDrawer from '$src/lib/layout/NavDrawer.svelte'
  import { setContext } from 'svelte'
  import { readable, writable } from 'svelte/store'
  import { fade } from 'svelte/transition'
  import '../app.pcss'
  import type { PageData } from './$types.js'

  export let data: PageData

  const { pages, person } = data
  const { firstName, lastName, occupation } = person

  const drawerHidden = writable<boolean>(true)
  setContext(DRAWER_KEY, drawerHidden)

  const pageLinks = readable<Array<PageLink>>(generatePageLinks(pages))
  setContext(PAGELINKS_KEY, pageLinks)

  $: setContext<AppData>(DATA_KEY, data)
</script>

<svelte:head>
  <title>{firstName} {lastName} - {occupation}</title>
</svelte:head>

<NavDrawer />

<div class="p-2 md:p-4" in:fade>
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>
