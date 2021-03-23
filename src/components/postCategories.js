// src/components/postCategories.js
//2020

import React from "react"
import { Link } from "gatsby"
import style from "../styles/scss/postMeta.module.scss"

const PostCategories = ({ categories }) => {
  if (!categories?.nodes || categories.nodes === 0) return null

  return (
    <div className={style.entry_categories}>
    
        {categories.nodes.map((category, index) => (
          <Link to={category.uri} key={index} rel="category tag">
          
            {category.name}
          </Link>
        ))}
      </div>
  )
}

export default PostCategories