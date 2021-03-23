// from 2020 starter Henrik's 2020
//modified after morten
import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Menu from "./menu"

import style from "../styles/scss/header.module.css"
import logo from '../images/gatsby-icon.png'

const Header = ( ) => {
  const { wp } = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  return (
    <header className={style.masthead}>
      <div className={style.masthead_info}>
       
         <Link to="/">
           <img src={logo} alt="logo" width="100" height="100" display="inline-block" marginBottom= "0"  className={style.site_logo} />
          </Link>
          <div className={style.site_header} >
              <div className={style.site_title}>
                <Link
                  to="/"
                  dangerouslySetInnerHTML={{ __html: wp.generalSettings.title }} /> 
                </div>
              <div className={style.site_description}
                  dangerouslySetInnerHTML={{
                    __html: wp.generalSettings.description }} />
            </div>
           </div>
           <Menu />
          
    </header>
  )
}

export default Header
