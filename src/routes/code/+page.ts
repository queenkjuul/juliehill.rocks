import { goto } from '$app/navigation'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, parent }) => {
  const parentData = await parent()
  const { github } = parentData.person
  // can't proceed without a username
  if (!github) {
    goto('/')
  }

  const ghRepoResponse = await fetch(`/api/github/users/${github}/repos`)
  const ghRepoObject = await ghRepoResponse.json()
  const ghRepos = await ghRepoObject.repos

  const pinnedResponse = await fetch(`/api/github/users/${github}/pinned`)
  const pinned = await pinnedResponse.json()

  for (let i = 0; i < ghRepos.length; i++) {
    const langResponse = await fetch(`/api/github/repos/${github}/${ghRepos[i].name}/languages`)
    const langJson = await langResponse.json()
    const { languages } = langJson
    ghRepos[i] = {
      ...ghRepos[i],
      languages,
    }
  }

  return {
    repos: ghRepos,
    pinned,
  }
}
