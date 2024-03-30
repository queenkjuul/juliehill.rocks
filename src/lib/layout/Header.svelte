<script>
  import { page } from '$app/stores'
  import pfp from '$assets/pfp.png'
  import ToolbarSocialLink from '$src/lib/toolbar/ToolbarSocialLink.svelte'
  import { Avatar, DarkMode, NavBrand, NavHamburger, Navbar, Toolbar } from 'flowbite-svelte'
  import { getContext } from 'svelte'
  import { DATA_KEY, DRAWER_KEY } from '..'

  const context = getContext(DATA_KEY)
  const { person, socials } = context
  const { firstName, lastName } = person

  const drawerHidden = getContext(DRAWER_KEY)

  $: hideAvatar = $page.url.pathname == '/'
</script>

<Navbar rounded color="form" class="mb-4 mt-2 py-1.5 md:mt-0">
  <div class="navbar-title-section flex flex-row items-center justify-center gap-4">
    <NavHamburger
      class="md:block lg:block"
      onClick={() => {
        $drawerHidden = false
      }}
    />
    <NavBrand
      href="/"
      class="jutify-center align-center mt-[3px] font-header text-3xl text-primary-400 dark:text-primary-300"
      ><Avatar src={pfp} class={`mr-4 ${hideAvatar ? 'hidden' : ''}`} />
      <div>{firstName} {lastName}</div></NavBrand
    >
  </div>
  <div class="navbar-buttons-section xs:hidden">
    <Toolbar>
      {#each socials as social}
        <ToolbarSocialLink {social} />
      {/each}
      <DarkMode />
    </Toolbar>
  </div>
</Navbar>
