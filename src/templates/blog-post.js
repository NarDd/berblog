import * as React from "react"
import { Link, graphql } from "gatsby"
import { Box, Text, HStack, VStack } from '@chakra-ui/react'
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { FiCornerLeftUp } from "@react-icons/all-files/fi/FiCornerLeftUp"

const BlogPostTemplate = ({ data, location }) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const { previous, next } = data

    return (
        <Layout>
            <Box borderWidth='1px' borderRadius='lg' overflow='hidden' className="blog-post">
                <Seo
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                />
                <article
                    itemScope
                    itemType="http://schema.org/Article"
                >
                    <header>
                        <Link to="/blog">
                            <HStack>
                                <FiCornerLeftUp />
                                <Text>Return to all posts</Text>
                            </HStack>
                        </Link>
                    </header>

                    <VStack paddingTop={4} paddingBottom={2} >
                        <Box width="50vw" >
                            <Text fontSize='4xl' marginTop={2} itemProp="headline">{post.frontmatter.title}</Text><Text>{post.frontmatter.date}</Text>
                        </Box>

                        <Box width="50vw">
                            <section
                                dangerouslySetInnerHTML={{ __html: post.html }}
                                itemProp="articleBody"
                            />
                        </Box>

                    </VStack>

                </article>
                <hr />
                <nav className="blog-post-nav">
                    {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                            ← {previous.frontmatter.title}
                        </Link>
                    )}
                    {next && (
                        <Link to={next.fields.slug} rel="next">
                            {next.frontmatter.title} →
                        </Link>
                    )}
                </nav>
            </Box>
        </Layout>

    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
