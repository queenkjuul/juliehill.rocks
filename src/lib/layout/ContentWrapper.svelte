<script context="module">
  // expose class - using component breaks nested global styling in /resume
  export const wrapperClass = `divide-gray-100 
    rounded-lg 
    border 
    border-gray-100 
    bg-white 
    p-4 
    shadow-md 
    dark:divide-gray-700 
    dark:border-gray-700 
    dark:bg-gray-800 
    lg:p-8`
</script>

<script>
  let cssClass
  export { cssClass as class }
</script>

<div
  class={`
  ${cssClass} 
  ${wrapperClass}`}
>
  <slot />
</div>
