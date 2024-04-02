<script context="module" lang="ts">
  export type RepoCardData = {
    name: string
    url: string
    description: string
    // eslint fails to find global.d.ts types, unsure why
    // eslint-disable-next-line no-undef
    primaryLanguage: Partial<ILanguage>
    languages?: Array<string>
    stargazerCount: number
  }
</script>

<script lang="ts">
  import Color from 'color'
  import { Card, Heading, P } from 'flowbite-svelte'
  import { FileCodeSolid, StarSolid } from 'flowbite-svelte-icons'

  export let compact: boolean = false
  export let item

  let langElem: HTMLElement

  const { url, name, stargazerCount, description, primaryLanguage, languages } = item
  const languageColor = Color(primaryLanguage.color)
  let adjustedLanguageColor
  let langElemBgColor: string
  $: if (langElem) {
    langElemBgColor = window.getComputedStyle(langElem).getPropertyValue('background-color')
  }
  $: contrast = langElemBgColor ? languageColor.contrast(Color(langElemBgColor)) : -1
  $: if (contrast > 0 && contrast < 1.2) {
    adjustedLanguageColor = languageColor.darken(0.25)
  }
</script>

<Card href={url} class="repo-card flex h-min w-[360px] max-w-[360px] flex-col">
  <div class="flex flex-row items-center justify-between">
    <Heading tag={compact ? 'h6' : 'h4'}>{name}</Heading>
    <div
      class="flex flex-row items-center gap-2 text-lg font-bold"
      class:text-sm={compact}
      class:hidden={stargazerCount === 0}
    >
      {stargazerCount}
      <StarSolid class="text-amber-500" />
    </div>
  </div>
  <P class={`${compact ? 'text-sm' : 'text-md'}`}>{description}</P>
  <div
    bind:this={langElem}
    class:text-sm={compact}
    class:mt-4={!compact}
    class:mt-2={compact}
    class={`flex h-10 max-h-10 flex-row flex-wrap items-center gap-2 overflow-hidden text-ellipsis rounded-lg bg-gray-200 p-2 text-sm font-bold dark:bg-gray-600 ${primaryLanguage?.name ? '' : 'hidden'}`}
  >
    <FileCodeSolid color={adjustedLanguageColor ?? primaryLanguage?.color} />
    <div class="text-black dark:text-white" class:text-sm={compact}>
      {primaryLanguage?.name ?? ''}
    </div>
    {#if languages}
      {#each languages as language}
        <span
          class="no-wrap text-ellipsis text-nowrap text-gray-400"
          class:text-sm={compact}
          class:hidden={language === primaryLanguage?.name}
        >
          {language}
        </span>
      {/each}
    {/if}
  </div>
</Card>
