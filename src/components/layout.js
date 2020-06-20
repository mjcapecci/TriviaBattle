import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/StyleComponents/global"
import * as theme from "../components/theme"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Trivia Battle</strong> by{" "}
              <a href="https://www.michaelcapecci.com">Michael Capecci</a>
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
