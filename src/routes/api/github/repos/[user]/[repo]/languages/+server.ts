import { env } from '$env/dynamic/private'
import { ghAuth } from '$src/lib/server'
import { request } from '@octokit/request'
import { error, json, type RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ params }) => {
  const { user, repo } = params
  if (!env.GITHUB_API_TOKEN) {
    console.error('No github token!')
    return json({ languages: [] })
  }

  let languages: Array<string> = []

  try {
    const languagesResponse = await request(`GET /repos/${user}/${repo}/languages`, ghAuth)
    const languagesData = await languagesResponse.data
    languages = Object.keys(languagesData)
  } catch (e) {
    console.error(e)
    error(500)
  }

  return json({ languages })
}
