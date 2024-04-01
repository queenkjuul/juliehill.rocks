import pfp from '$assets/pfp.png'
import pdf from '$assets/resume.pdf'
import { loadMarkdownPages, type AppData, type Language } from '$src/lib'
import { getDeviconAttributes } from '$src/lib/util/devicons'
import { userConfig } from '$src/user.config'
import type { LayoutLoad } from './$types'

const defaultLanguage: Language = { displayName: 'JavaScript', deviconKey: 'javascript' }

export const load: LayoutLoad = async () => {
  const appData: AppData = {
    person: {
      firstName: userConfig.person.firstName,
      lastName: userConfig.person.lastName,
      occupation: userConfig?.person?.occupation,
      languages: userConfig?.person?.languages ?? [defaultLanguage],
      location: userConfig?.person?.location,
      email: userConfig?.person?.email ?? '',
    },
    languageImages: userConfig?.person?.languages?.map(getDeviconAttributes) ?? [],
    socials: userConfig?.socials ?? [],
    pfp,
    pdf,
    pages: await loadMarkdownPages(),
  }
  return appData
}
