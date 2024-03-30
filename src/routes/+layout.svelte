<script lang="ts">
  import Footer from '$src/lib/layout/Footer.svelte'
  import Header from '$src/lib/layout/Header.svelte'
  import { person } from '$util/config'
  import '../app.pcss'

  const { firstName, lastName, occupation } = $person
</script>

<svelte:head>
  <title>{firstName} {lastName} - {occupation}</title>
</svelte:head>

<div class="p-2 md:p-4">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>
