// src/components/postEntry.js
import React from "react"
import { Link } from "gatsby"
import style from "../styles/scss/blogindex.module.scss"
import PostCategories from "./postCategories"
import FeaturedMedia from "./featuredMedia"

const PostPreview = ({ post}) => {
  return (
    <>
      <article
        className={style.article} >
           <PostCategories categories={post.categories} /> 
            <div className={style.index_entrytitle}>
              <Link 
                to={post.uri}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </div>

            {/*   <PostMeta
                  title={post.title}
                  author={post.author}
                  date={post.date}
            /> */}
         
          <FeaturedMedia image={post.featuredImage} /> 
          <div className="excerpt">
           <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </div>
      </article>
    </>
  )
}

export default PostPreview