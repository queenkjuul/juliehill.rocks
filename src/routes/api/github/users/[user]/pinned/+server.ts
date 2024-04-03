import { GITHUB_API_TOKEN } from '$env/static/private'
import { ghAuth } from '$src/lib/server'
import { graphql, type GraphQlQueryResponseData } from '@octokit/graphql'
import { error, json, type RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ params }) => {
  let pinned: Array<any> = []
  // we can access public repo data without auth, but request limits are quite low
  // so we only make extra calls for language data if we have a token
  // (also get-pinned-repos might not work at all without one)
  if (!GITHUB_API_TOKEN) {
    console.error('No github token!')
    return json(pinned)
  }

  const { user } = params
  const query = `
  {
    user(login: "${user}") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
              name
              url
              stargazerCount
              primaryLanguage {
                name
                color
                id
              }
              description
              createdAt
              forkCount
              isFork
              isInOrganization
              languages(first: 100) {
                edges {
                  node {
                    name
                    id
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  try {
    const response: GraphQlQueryResponseData = await graphql(query, ghAuth)
    const rawNodes = await response.user.pinnedItems.nodes
    pinned = rawNodes.map((repo) => {
      const languages = repo.languages.edges.map((edge) => edge.node.name)
      return {
        ...repo,
        languages,
      }
    })
  } catch (e) {
    console.error(e)
    error(500)
  }

  return json(pinned)
}
