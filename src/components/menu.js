// Menu from 2020
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import style from "../styles/scss/mainNav.module.css"
import { normalizePath } from "../utils/get-url-path"

const Menu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "main-menu" }) {
        name
        menuItems {
          nodes {
            label
            url
            parentId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  if (!!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes === 0) return null

  return (
      <nav className={style.navigation} >
        <ul>
          {wpMenu.menuItems.nodes.map((menuItem, i) => {
            if (menuItem.parentId) {
              return null
            }

            const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

            return (
              <li>
                <Link key={i + menuItem.url}
                  to={normalizePath(path)} 
                  >
                    {menuItem.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
   
  ) 
}
export default Menu