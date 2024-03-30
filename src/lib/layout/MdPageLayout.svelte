<script context="module">
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

<div
  class="flex flex-col gap-4 rounded-lg bg-gray-50 p-4 text-gray-800 dark:bg-gray-800 dark:text-white"
>
  <slot />
</div>
