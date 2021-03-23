// src/templates/index.js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostEntry from "../components/postEntry"
import ArchivePagination from "../components/archivePagination"

const Archive = (props) => {
  const {
    data: {
      allWpPost: { nodes, pageInfo  },
    },
    //pageContext
    pageContext: {  archivePath },
   // pageContex: { pageNumber, hasNextPage, itemsPerPage, allPosts },
  } = props

  return (
    <Layout>
    {/*  <Seo title="Home" description="Welcome to the Twenty Twenty Theme." /> */}
    
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
  query ArchivePage(
    $offset: Int!
    $perPage: Int!
    $userDatabaseId: Int
    $categoryDatabaseId: Int
    $tagDatabaseId: Int
  ) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: {
        author: {
          node: { databaseId: { eq: $userDatabaseId } }}
        categories: {
          nodes: { elemMatch: { databaseId: { eq: $categoryDatabaseId } } }
        }
        tags: {
          nodes: { elemMatch: { databaseId: { eq: $tagDatabaseId } } }
        }
      }
      sort: { fields: date, order: DESC }
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

export default Archive
