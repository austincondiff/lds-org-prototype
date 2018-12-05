import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../images/logo.svg'
import footerData from '../data/footer'
import Icon from '../components/Icon'

const Button = styled(Link)`
  background: #01b6d1;
  font-family: proxima-nova, sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  padding: 20px 32px;
  border-radius: 64px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0;
  transition: 150ms;
  &:hover {
    background-color: #03a5bd;
    box-shadow: rgba(0, 0, 0, 0.1) 0 8px 16px;
  }
`

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
            fontFamily: 'adobe-garamond-pro, Garamond, Georgia, serif',
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
            fontFamily: 'proxima-nova, sans-serif',
            fontWeight: '300',
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
        <Button to={path}>{buttonLabel}</Button>
      </div>
    </div>
  </div>
)

export default Footer
