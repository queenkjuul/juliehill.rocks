import { GITHUB_API_TOKEN } from '$env/static/private'
import { json, type RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ params, platform }) => {
  const tonk = JSON.stringify(GITHUB_API_TOKEN)
  const pronk = JSON.stringify(platform)
  return json(tonk + pronk)
}
