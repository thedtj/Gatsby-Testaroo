import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const Products = ({ data: { allContentfulProduct } }) => (
  <Layout>
    <div>
      {/* Products List */}
      {allContentfulProduct.edges.map(({ node: product }) => (
        <div key={product.id}>
          <h2>Products Here!</h2>
          <Link
            to={`/products/${product.slug}`}
            style={{ textDecoration: 'none', color: '%551a8b' }}
          >
            <h3>
              {product.title} •{' '}
              <span
                style={{ fontSize: '1.2rem', fontWeight: 300, color: '#f60' }}
              >
                ${product.price}
              </span>
            </h3>
            <Img style={{ maxWidth: 400 }} fluid={product.image.fluid} />
          </Link>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          title
          price
          image {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Products
