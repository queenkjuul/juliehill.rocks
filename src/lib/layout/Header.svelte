<script>
  import { page } from '$app/stores'
  import pfp from '$assets/pfp.png'
  import ToolbarSocialLink from '$src/lib/toolbar/ToolbarSocialLink.svelte'
  import {
    Avatar,
    DarkMode,
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
    Navbar,
    Toolbar,
  } from 'flowbite-svelte'
  import { getContext } from 'svelte'
  import { DATA_KEY, DRAWER_KEY, RESUME_LABEL } from '..'

  const hideAvatarPaths = ['/', '/resume']

  const context = getContext(DATA_KEY)
  const { person, socials } = context
  const { firstName, lastName } = person

  const drawerHidden = getContext(DRAWER_KEY)

  $: hideAvatar = hideAvatarPaths.includes($page.url.pathname)
</script>

<Navbar
  rounded
  color="form"
  class={`mb-4 mt-2 py-1.5 shadow-md dark:border dark:border-gray-600 md:mt-0 ${hideAvatar ? 'print:hidden' : ''}`}
>
  <div class="navbar-title-section flex flex-row items-center justify-center gap-4">
    <NavHamburger
      class="md:block lg:block"
      onClick={() => {
        $drawerHidden = false
      }}
    />
    <NavBrand
      href="/"
      class="jutify-center align-center font-header mt-[3px] text-3xl text-primary-400 dark:text-primary-300"
      ><Avatar src={pfp} class={`mr-4 ${hideAvatar ? 'hidden lg:block' : ''}`} />
      <div>{firstName} {lastName}</div></NavBrand
    >
    <NavUl>
      <NavLi href="/resume">{RESUME_LABEL}</NavLi>
      <NavLi href="/code">Code</NavLi>
    </NavUl>
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
