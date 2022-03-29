import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import SplashScreen from "components/splash/splash-screen";
import Blog from "./blog";

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const showSplashScreenStorage = localStorage.getItem("showSplashScreen");
    // if (!showSplashScreenStorage) {
    //   setShowSplashScreen(true);
    // }
  }, [])

  return (
    <>
      {
        showSplashScreen ? <SplashScreen /> : <Blog />
      }
    </>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
