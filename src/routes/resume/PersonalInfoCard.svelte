<script>
  import { DATA_KEY } from '$src/lib'
  import { Avatar, Card, Heading } from 'flowbite-svelte'
  import { getContext } from 'svelte'

  export let blurb

  const { person, pfp } = getContext(DATA_KEY)
  const { firstName, lastName, email } = person
</script>

<Card class="mb-8 items-center justify-center gap-4">
  <Avatar src={pfp} rounded class="h-24 w-24" />
  <div class="w-full flex-col items-center justify-center text-center">
    <Heading>{firstName} {lastName}</Heading>
    <div class={email ? '' : 'hidden'}>
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </div>
    <div class="italic text-black dark:text-white">
      {blurb}
    </div>
  </div>
</Card>
