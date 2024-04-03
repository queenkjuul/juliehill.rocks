<script lang="ts">
  import { navigating } from '$app/stores'
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
  import Title from '$src/lib/layout/Title.svelte'
  import { Spinner } from 'flowbite-svelte'
  import { setContext } from 'svelte'
  import { readable, writable } from 'svelte/store'
  import { fade } from 'svelte/transition'
  import '../app.pcss'
  import type { PageData } from './$types.js'
  import Skel from './code/skel.svelte'

  export let data: PageData

  const { pages, person } = data
  const { occupation } = person

  const drawerHidden = writable<boolean>(true)
  setContext(DRAWER_KEY, drawerHidden)

  const pageLinks = readable<Array<PageLink>>(generatePageLinks(pages))
  setContext(PAGELINKS_KEY, pageLinks)

  $: setContext<AppData>(DATA_KEY, data)
</script>

<Title title={occupation} />
<NavDrawer />

<div class="p-2 md:p-4">
  <Header />
  {#if $navigating && $navigating.to?.route.id === '/code'}
    <Skel />
  {:else if $navigating}
    <div class="flex h-full w-full grow flex-col items-center justify-center">
      <Spinner class="absolute top-1/2 my-auto" size={32} />
    </div>
  {:else}
    <main in:fade>
      <slot />
    </main>
    <Footer />
  {/if}
</div>
