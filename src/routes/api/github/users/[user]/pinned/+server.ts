import { GITHUB_API_TOKEN } from '$env/static/private'
import { Client } from 'get-pinned-repos'

import { error, json, type RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ params, platform }) => {
  let pinned: Array<IPinnedRepo> = []

  // we can access public repo data without auth, but request limits are quite low
  // so we only make extra calls for language data if we have a token
  // (also get-pinned-repos might not work at all without one)
  if (!GITHUB_API_TOKEN && !process.env.GITHUB_API_TOKEN) {
    console.error('No github token!')
    return json(pinned)
  }

  try {
    Client.setToken(GITHUB_API_TOKEN ?? process.env.GITHUB_API_TOKEN)
    const pinnedResponse = await Client.getPinnedRepos(params.user)
    pinned =
      pinnedResponse?.map((pinned) => {
        return {
          ...pinned,
          languages: pinned?.languages?.map?.((lang) => lang.name),
        }
      }) ?? []
  } catch (e) {
    console.error(e)
    error(500)
  }

  return json(pinned)
}
