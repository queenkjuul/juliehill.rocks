import { GITHUB_API_TOKEN } from '$env/static/private'

export const ghAuth = {
  headers: {
    authorization: `token ${GITHUB_API_TOKEN}`,
  },
}
