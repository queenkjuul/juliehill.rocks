<script context="module">
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'
    import {
        a,
        blockquote,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        img,
        li,
        ol,
        p,
        ul,
    } from '../util/md-wrappers'
  export { a, blockquote, h1, h2, h3, h4, h5, h6, hr, img, li, ol, p, ul }
</script>

<script>
  export let title
</script>

<div class="flex flex-col gap-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
  <slot {title} />
</div>
