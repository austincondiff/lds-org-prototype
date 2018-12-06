import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../images/logo.svg'
import footerData from '../data/footer'
import Icon from '../components/Icon'

const LayoutWrap = styled.div`
  margin: 0 auto;
  max-width: 1296px;
  width: 100%;
  display: flex;
  padding: 48px;
  align-items: center;
  @media (max-width: 599px) {
    text-align: center;
    padding: 24px;
    flex-direction: column;
  }
`
const Title = styled.h3`
  font-family: adobe-garamond-pro, Garamond, Georgia, serif;
  font-size: 32px;
  color: #003057;
  line-height: 36px;
  font-weight: normal;
  margin-bottom: 8px;
  @media (max-width: 599px) {
    font-size: 24px;
  }
`

const Description = styled.p`
  font-family: proxima-nova, sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #003057;
  line-height: 1.2;
  margin: 0;
  @media (max-width: 599px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`

const Button = styled(Link)`
  display: inline-block;
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
  @media (max-width: 599px) {
    font-size: 18px;
    padding: 10px 24px;
  }
`

const Footer = ({ title, description, buttonLabel, path }) => (
  <div style={{ background: '#7DE3F4' }}>
    <LayoutWrap>
      <div style={{ flex: '1' }}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
      <div>
        <Button to={path}>{buttonLabel}</Button>
      </div>
    </LayoutWrap>
  </div>
)

export default Footer
