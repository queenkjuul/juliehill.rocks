export async function load({ params }) {
  // Vite complained about dynamic imports when this was extracted to a util function
  // so we're not totally DRY :( this code is duplicated in resume/+page.ts
  let mdPage
  try {
    mdPage = await import(`../../../lib/content/pages/${params.page}.md`)
  } catch (e) {
    console.error(e)
  }
  const { default: component, metadata } = mdPage

  return {
    mdPage: {
      component,
      metadata,
    },
  }
}
