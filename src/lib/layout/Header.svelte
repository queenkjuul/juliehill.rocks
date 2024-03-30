<script>
  import pfp from '$assets/pfp.png'
  import ToolbarSocialLink from '$src/lib/toolbar/ToolbarSocialLink.svelte'
  import { person, socials } from '$util/config'
  import { Avatar, DarkMode, NavBrand, NavHamburger, Navbar, Toolbar } from 'flowbite-svelte'

  const { firstName, lastName } = $person
</script>

<Navbar rounded color="form" class="mb-4 py-1.5">
  <div class="navbar-title-section flex flex-row justify-center gap-4">
    <NavHamburger class="md:block lg:block" />
    <NavBrand><Avatar src={pfp} class="mr-4" />{firstName} {lastName}</NavBrand>
  </div>
  <div class="navbar-buttons-section">
    <Toolbar>
      {#each $socials as social}
        <ToolbarSocialLink {social} class="xs:hidden" />
      {/each}
      <DarkMode />
    </Toolbar>
  </div>
</Navbar>
