import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import gatsbyLogo from '../images/gatsby-icon.png'

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? 'active' : 'navLink' }
}

const NavLink = props => <Link getProps={isActive} {...props} />

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Title / Logo */}
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={gatsbyLogo}
          alt="Gatsby Shop Logo"
          style={{
            width: '4rem',
            margin: '0 1rem',
            border: '3px solid orange',
            borderRadius: '50%',
          }}
        />

        <h1 style={{ margin: 0 }}>
          <NavLink
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </NavLink>
        </h1>
      </span>

      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/products">Store</NavLink>
      {/* Shopping Cart Summary */}
      <div
        style={{ color: 'white', cursor: 'pointer' }}
        className="snipcart-summary snipcart-checkout"
      >
        <div>
          <strong>My Cart</strong>
        </div>
        <div>
          <span
            style={{ fontWeight: 'bold' }}
            className="snipcart-total-items"
          />{' '}
          Items in Cart
        </div>
        <div>
          Total Price{' '}
          <span
            style={{ fontWeight: 'bold' }}
            className="snipcart-total-price"
          />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
