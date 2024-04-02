<script>
  import {
    CloseButton,
    DarkMode,
    Drawer,
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
    Toolbar,
  } from 'flowbite-svelte'
  import { getContext } from 'svelte'
  import { sineIn } from 'svelte/easing'
  import { DATA_KEY, DRAWER_KEY, PAGELINKS_KEY, RESUME_LABEL } from '..'
  import ToolbarSocialLink from '../toolbar/ToolbarSocialLink.svelte'

  const drawerHidden = getContext(DRAWER_KEY)
  const pageLinks = getContext(PAGELINKS_KEY)
  const appData = getContext(DATA_KEY)
  const { socials } = appData

  const transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  }

  let activateClickOutside = true

  function closeDrawer() {
    $drawerHidden = true
  }
</script>

<Drawer
  transitionType="fly"
  {transitionParams}
  bind:hidden={$drawerHidden}
  bind:activateClickOutside
  width="w-64"
  class="overflow-scroll pb-32"
  id="sidebar"
>
  <div class="flex items-center">
    <DarkMode class="ml-7 hidden bg-gray-200 dark:bg-gray-600 xs:block" />
    <CloseButton on:click={closeDrawer} class="mb-4 dark:text-gray-300" />
  </div>
  <Sidebar asideClass="w-54">
    <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
      <SidebarGroup>
        <SidebarItem
          label="Home"
          href="/"
          on:click={closeDrawer}
          activeClass="dark:bg-primary-300 bg-primary-800 text-gray-800 dark:text-gray-300"
        />
        <SidebarItem
          label={RESUME_LABEL}
          href="/resume"
          on:click={closeDrawer}
          activeClass="dark:bg-primary-300 bg-primary-800 text-gray-800 dark:text-gray-300"
        />
        <SidebarItem
          label="Code"
          href="/code"
          on:click={closeDrawer}
          activeClass="dark:bg-primary-300 bg-primary-800 text-gray-800 dark:text-gray-300"
        />
        {#each $pageLinks as { label, filename }}
          <SidebarItem {label} href={`/pages/${filename}`} on:click={closeDrawer} />
        {/each}
      </SidebarGroup>
      <div class="grow" />
      <SidebarGroup class="hidden xs:block">
        <Toolbar>
          {#each socials as social}
            <ToolbarSocialLink {social} />
          {/each}
        </Toolbar>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>
