// src/templates/single/page.js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import style from "../../styles/scss/post.module.css"
import FeaturedMedia from "../../components/featuredMedia"

export default ({ data }) => {
  const { page } = data
  const { title, content, featuredImage } = page

  return (
    <Layout>
     {/* <Seo title={title} description={excerpt} /> */}

      <article>
      <div className={style.page_title}> {title}</div>
  
        <FeaturedMedia image={featuredImage} /> 

          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
       
      </article>
    </Layout>
  )
}

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      ...PageContent
    }
    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
