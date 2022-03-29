import React from "react";
import { SimpleGrid, Box, Image, VStack } from '@chakra-ui/react'
import TempBlog from '../images/temp-blog.jpg';
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";

const Blog = ({ data, location }) => {
    const posts = data.allMarkdownRemark.nodes;

    return (
        <Layout>
            <Seo title="All posts" />
            <SimpleGrid columns={[1, null, 2, 3]} spacing='40px' justifyItems="center">
                {
                    posts.map(post => {
                        const title = post.frontmatter.title || post.fields.slug
                        return (
                            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' className="blog-card" key={post.fields.slug}>
                                <Image src={TempBlog} alt="temporary image" />
                                <Box p='6'>
                                    <VStack spacing={4} align="flex-start">
                                        <Link to={post.fields.slug} itemProp="url">
                                            <Box
                                                mt='1'
                                                fontWeight='semibold'
                                                as='h4'
                                                lineHeight='tight'
                                                isTruncated
                                            >
                                                {title}
                                            </Box>

                                            <Box>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: post.frontmatter.description || post.excerpt,
                                                    }}
                                                    itemProp="description"
                                                />
                                            </Box>
                                        </Link>


                                        <Box display='flex' mt='2' alignItems='center'>
                                            <Box as='span' color='gray.600' fontSize='sm'>
                                                {post.frontmatter.date}
                                            </Box>
                                        </Box>
                                    </VStack>

                                </Box>
                            </Box>
                        )
                    })
                }
            </SimpleGrid>
        </Layout>
    )
}

export default Blog;


export const pageQuery = graphql`
            query {
                site {
                siteMetadata {
                title
            }
    }
            allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
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
