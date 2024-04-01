export async function load() {
  let mdPage
  try {
    mdPage = await import(`../../lib/content/resume.md`)
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
