<script>
  import { Alert, Button, Footer, FooterCopyright } from 'flowbite-svelte'
</script>

<div class="p-8">
  <h1>Julie Hill</h1>
  <Alert class="m-4">
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Button class="m-2">BUTTON</Button>
</div>
<Footer>
  <FooterCopyright href="/" by="Julie Hill" year={2024} />
  <a
    class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
    href="https://github.com/queenkjuul/juliehill.rocks"
    >Self-hosted on Ubuntu using Caddy and Docker</a
  >
</Footer>
