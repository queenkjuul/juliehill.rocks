import type { Page, PageLink, Pages } from '..'

export async function loadMarkdownPages(): Promise<Pages> {
  // can't figure out MDsveX types here
  // looks like Proxy<Component> where Component is the page
  // like Proxy<Additional> for a file additional.md
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type MdPagesGlob = Record<string, () => Promise<any>>

  const mdPages: MdPagesGlob = import.meta.glob('$content/pages/*.md')
  const iterablePages = Object.entries(mdPages)
  const pages = await Promise.all(
    iterablePages.map(async ([path, resolver]) => {
      const resolved = await resolver()
      const { default: component, metadata } = resolved
      return {
        metadata,
        component,
        path,
      } as Page
    })
  )
  return pages
}

export function generatePageLinks(pages: Pages): Array<PageLink> {
  return pages.map((page) => {
    return {
      // trick to get filename from path
      // https://stackoverflow.com/questions/423376/how-to-get-the-file-name-from-a-full-path-using-javascript
      filename: page?.path?.split('\\')?.pop()?.split('/')?.pop()?.slice(0, -3) ?? '',
      label: page.metadata.title ?? '',
    }
  })
}
