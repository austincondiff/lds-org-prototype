import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'
import footerData from '../data/footer'
import Icon from '../components/Icon'

const Footer = ({ title, description, buttonLabel, path }) => (
  <div style={{ background: '#7DE3F4' }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1200,
        display: 'flex',
        padding: '48px 0',
        alignItems: 'center',
      }}
    >
      <div style={{ flex: '1' }}>
        <h3
          style={{
            fontFamily: 'Garamond',
            fontSize: '32px',
            color: '#003057',
            lineHeight: '36px',
            fontWeight: 'normal',
            marginBottom: 8,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'ProximaNova-Light',
            fontSize: '20px',
            color: '#003057',
            lineHeight: '36px',
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
      <div>
        <Link
          style={{
            background: '#01B6D1',
            fontFamily: 'ProximaNova-Semibold',
            fontSize: '20px',
            color: '#FFFFFF',
            textAlign: 'center',
            textDecoration: 'none',
            padding: '20px 32px',
            borderRadius: 64,
          }}
          to={path}
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  </div>
)

export default Footer
