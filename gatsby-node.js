// gatsby-node.js
const path = require(`path`)
const glob = require(`glob`)

const createBlog = require(`./create/createBlog`)
const createContentTypes = require(`./create/createContentTypes`)
const createCategories = require(`./create/createCategories`)

const getTemplates = () => {
  const sitePath = path.resolve(`./`)
  return glob.sync(`./src/templates/**/*.js`, { cwd: sitePath })
}

exports.createPages = async (props) => {
  const { data: wpSettings } = await props.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const perPage = wpSettings.wp.readingSettings.postsPerPage || 10
  const blogURI = "/"
  const templates = getTemplates()

  await createContentTypes(props, { templates })
  await createBlog(props, { perPage, blogURI })
  await createCategories(props, { perPage })
}