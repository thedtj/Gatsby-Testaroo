import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const PostTemplate = ({ data: { markdownRemark: post } }) => (
  <Layout>
    <div>
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Time to read: {post.timeToRead}{' '}
        {post.timeToRead > 1 ? 'minutes' : 'minute'}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
      }
    }
  }
`
export default PostTemplate
