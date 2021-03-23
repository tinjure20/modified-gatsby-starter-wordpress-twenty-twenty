//create/createContentTypes.js
const { resolve } = require(`path`)

module.exports = async ({ actions, graphql }, options) => {
  const { templates } = options

  const {
    data: {
      allWpContentNode: { nodes: contentNodes },
    },
  } = await graphql(/* GraphQL */ `
    query ALL_CONTENT_NODES {
      allWpContentNode(
        sort: { fields: modifiedGmt, order: DESC }
        filter: { nodeType: { ne: "MediaItem" } }
      ) {
        nodes {
          nodeType
          uri
          id
        }
      }
    }
  `)

  const contentTypeTemplateDirectory = `./src/templates/single/`
    const contentTypeTemplates = templates.filter((path) =>
      path.includes(contentTypeTemplateDirectory)
    )
    await Promise.all(
      contentNodes.map(async (node, i) => {
        const { nodeType, uri, id } = node
        // this is a super super basic template hierarchy
        // this doesn't reflect what our hierarchy will look like.
        // this is for testing/demo purposes
        const templatePath = `${contentTypeTemplateDirectory}${nodeType}.js`

        const contentTypeTemplate = contentTypeTemplates.find(
          (path) => path === templatePath
        )
        await actions.createPage({
            component: resolve(contentTypeTemplate),
            path: uri,
            context: {
              id,
              nextPage: (contentNodes[i + 1] || {}).id,
              previousPage: (contentNodes[i - 1] || {}).id,
            },
          })
        })
      )
  }
