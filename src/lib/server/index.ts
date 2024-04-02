import { env } from '$env/dynamic/private'

export const ghAuth = {
  headers: {
    authorization: `token ${env.GITHUB_API_TOKEN}`,
  },
}
