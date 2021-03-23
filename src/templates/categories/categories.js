// src/templates/categories.js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PostEntry from "../../components/postEntry"
import ArchivePagination from "../../components/archivePagination"


const Categories = (props ) => {
  //const { catName } = pageContext
  const {
    data: {
      allWpPost: { nodes, pageInfo  },
    },
    //pageContext
    pageContext: {  archivePath },
   // pageContex: { pageNumber, hasNextPage, itemsPerPage, allPosts },
  // pagecontext: { categories, name, post },
  } = props
  
  return (
    <Layout>
    {/*  <Seo title="Home" description="Welcome to the Twenty Twenty Theme." /> */}
    
     <h1> Categories Archive </h1> 
      {nodes &&
        nodes.map((post, index) => {
          return (
            <PostEntry
              key={index}
              post={post}
              isLast={index === nodes.length - 1}
            />
          )
        })}
    
  <ArchivePagination {...pageInfo} archivePath={archivePath} /> 
  
    </Layout>
  )
}

export const query = graphql`
    query Category($categoryDatabaseId: Int!, $offset: Int!, $perPage: Int!) {
        allWpPost(
            limit: $perPage
            skip: $offset
            sort: { fields: date, order: DESC }
            filter: {
                categories: {
                    nodes: {
                        elemMatch: { databaseId: { eq: $categoryDatabaseId } }
                    }
                }
            }
        ) {
            nodes {
                ...PostPreviewContent
            }
     pageInfo {
        hasNextPage
        hasPreviousPage
        currentPage
        pageCount
      } 
    }
  }
`

export default Categories

