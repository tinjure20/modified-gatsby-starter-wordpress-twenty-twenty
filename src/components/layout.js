import React from "react"
import Header from "./header"
import Footer from "./footer"
import styles from "../styles/scss/site.module.css"
import "../styles/main.css"

const Layout = ({ children }) => (
  <section>
    <Header />
      <div className={styles.site_main}>
        <div className={styles.site_content}>
          {children}
        </div>
      </div>
    <Footer />
  </section>
)

export default Layout
