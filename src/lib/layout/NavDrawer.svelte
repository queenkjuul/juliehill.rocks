<script>
  import { page } from '$app/stores'
  import {
    CloseButton,
    Drawer,
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
  } from 'flowbite-svelte'
  import { getContext } from 'svelte'
  import { sineIn } from 'svelte/easing'
  import { DRAWER_KEY, PAGELINKS_KEY } from '..'

  const drawerHidden = getContext(DRAWER_KEY)
  const pageLinks = getContext(PAGELINKS_KEY)

  const transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  }

  let activateClickOutside = true
  let activeUrl = $page.url.pathname

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
    <CloseButton on:click={closeDrawer} class="mb-4 dark:text-gray-300" />
  </div>
  <Sidebar asideClass="w-54">
    <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
      <SidebarGroup>
        <SidebarItem label="Home" href="/" active={activeUrl === `/`} on:click={closeDrawer} />
        {#each $pageLinks as { label, filename }}
          <SidebarItem
            {label}
            href={`/${filename}`}
            active={activeUrl === `/${filename}`}
            on:click={closeDrawer}
          />
        {/each}
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>
