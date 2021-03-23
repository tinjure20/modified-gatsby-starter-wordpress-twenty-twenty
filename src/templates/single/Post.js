//src/templates/single/post.js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import style from "../../styles/scss/post.module.css"
import ContentTypePagination from "../../components/contentTypePagination"

import PostCategories from "../../components/postCategories"
import FeaturedMedia from "../../components/featuredMedia"

export default ({ data }) => {
  const { nextPage, previousPage, page } = data
 // const {  page } = data
  const {
    title,
    content,
    featuredImage,
    categories,
    //excerpt,
    //databaseId,
   // author,
    //date,
  } = page

  return (
    <Layout>
    {/* <Seo title={title} description={excerpt} /> */}

      <article>
       <PostCategories categories={categories} /> 
        <div className={style.single_entry_title}> {title}</div>
           
            {/* <PostMeta title={title} author={author} date={date} /> */}
  
     <FeaturedMedia image={featuredImage} /> 

          <div className="entry-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        
         {/* add post-pagination below*/}
    
        <div className="section-inner">
       {/*   <AuthorBio author={author} /> */}

         <ContentTypePagination
            previousPage={previousPage}
            nextPage={nextPage}
            contentType={"Post"}
        /> 
        </div>
         {/* <Comments /> */}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      ...PostContent
    }
    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`