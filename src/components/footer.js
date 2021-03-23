// src/components/footer.js
import React from "react"

import style from "../styles/scss/footer.module.css"

export default () => (
  <footer className={style.colophon}>
  <p>  © {new Date().getFullYear()} | This site is Powered by
          {'   ' }
    <a href="https://www.gatsbyjs.org"> GatsbyJS</a>  {'   and  '}  <a href="https://www.wordpress.org">WordPress</a></p>
  </footer>
)