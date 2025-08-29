import { GITHUB_API_TOKEN } from '$env/static/private'
import { ghAuth } from '$src/lib/server'
import type { RepoCardData } from '$src/routes/code/RepoInfoCard.svelte'
import { request } from '@octokit/request'
import type { Endpoints } from '@octokit/types'
import { error, json, type RequestHandler } from '@sveltejs/kit'
import LanguageColors from 'language-colors'

type GithubRepo = Endpoints['GET /repos/{owner}/{repo}']['response']['data']

export const GET: RequestHandler = async ({ params }) => {
  let repos: Array<RepoCardData> = []
  let repoResponse

  try {
    try {
      repoResponse = await request(
        `GET /users/${params.user}/repos`,
        GITHUB_API_TOKEN ? ghAuth : {}
      )
    } catch (_e) {
      // swallow error, we'll try again without auth
      // we can still access public repo data without a token
    }

    if (!repoResponse) {
      repoResponse = await request(`GET /users/${params.user}/repos`)
    }

    const rawRepos: Array<GithubRepo> = await repoResponse.data
    repos = rawRepos
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .map(({ name, description, html_url, stargazers_count, language }) => {
        return {
          name,
          description,
          url: html_url,
          primaryLanguage: {
            name: language,
            color: LanguageColors[language?.toLowerCase()]?.hex(),
          },
          stargazerCount: stargazers_count,
        } as RepoCardData
      })
  } catch (e) {
    console.error(e)
    error(500)
  }

  return json({ repos })
}
