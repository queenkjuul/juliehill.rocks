export async function load({ params }) {
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
