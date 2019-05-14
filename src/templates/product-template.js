import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const ProductTemplate = ({ data: { contentfulProduct }, location }) => (
  <Layout>
    <div
      style={{
        margin: '0 auto',
        width: '100%',
        textAlign: 'center',
      }}
    >
      {/* Product Info */}
      <h2>
        {contentfulProduct.title}{' '}
        <span style={{ color: '#ccc' }}>
          First available: {contentfulProduct.createdAt}
        </span>
      </h2>
      <h4>${contentfulProduct.price}</h4>
      <p>{contentfulProduct.description}</p>
      <button
        className="snipcart-add-item"
        data-item-id={contentfulProduct.slug}
        data-item-price={contentfulProduct.price}
        data-item-image={contentfulProduct.image.file.url}
        data-item-name={contentfulProduct.title}
        data-item-url={location.pathname}
        style={{
          background: 'darkorange',
          color: 'white',
          padding: '0.3rem',
          borderRadius: '5px',
          cursor: 'pointer',
          border: '1px',
        }}
      >
        Add to Cart
      </button>
      <Img
        fluid={contentfulProduct.image.fluid}
        style={{ margin: '0 auto', maxWidth: '600px' }}
      />
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      slug
      title
      price
      description
      createdAt(fromNow: true)
      image {
        fluid(maxWidth: 500) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
    }
  }
`

export default ProductTemplate
