import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'
import footerData from '../data/footer'
import Icon from '../components/Icon'

const LayoutWrap = styled.div`
  margin: 0 auto;
  max-width: 1296px;
  width: 100%;
  display: flex;
  padding: 64px 48px;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
  @media (max-width: 599px) {
    padding: 24px;
  }
`

const SubFooterLayoutWrap = styled(LayoutWrap)`
  padding: 32px 48px;
  @media (max-width: 599px) {
    padding: 16px 24px;
  }
`
const FooterNavWrap = styled.div`
  display: flex;
  flex: 1;
  @media (max-width: 1023px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`
const FooterNavColumn = styled.div`
  flex: 1;
  @media (max-width: 767px) {
    flex: initial;
    width: 50%;
    margin-bottom: 48px;
  }
  @media (max-width: 599px) {
    margin-bottom: 24px;
  }
`
const LogoSocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1023px) {
    order: -1;
    margin-bottom: 32px;
  }
`
const LogoLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 16px 0;
  @media (max-width: 1023px) {
    margin-top: 0;
  }
`
const SubFooterText = styled.div`
  font-family: proxima-nova, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  flex: 1;
  @media (max-width: 767px) {
    text-align: center;
  }
`
const SubFooterLink = styled(Link)`
  opacity: 0.6;
  font-family: proxima-nova, sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #000000;
  text-align: right;
  margin-left: 16px;
  text-decoration: none;
  @media (max-width: 1023px) {
    margin: 0 8px;
  }
  @media (max-width: 767px) {
    margin: 8px;
    display: block;
    text-align: center;
  }
`

const styles = {
  socialLink: {
    display: 'inline-block',
    margin: '8px',
    color: 'black',
  },
}

const Footer = ({ siteTitle }) => (
  <div>
    <div style={{ background: '#F7F8F8' }}>
      <LayoutWrap>
        <FooterNavWrap>
          {footerData.map(col => (
            <FooterNavColumn key={col.id}>
              <h5
                style={{
                  fontFamily: 'proxima-nova, sans-serif',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: 'rgba(0,0,0,0.44)',
                  textTransform: 'uppercase',
                }}
              >
                {col.label}
              </h5>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {col.items.map(item => (
                  <li
                    style={{ margin: '8px 0', padding: 0, listStyle: 'none' }}
                    key={item.id}
                  >
                    <Link
                      style={{
                        textDecoration: 'none',
                        fontFamily: 'proxima-nova, sans-serif',
                        fontWeight: '600',
                        fontSize: '14px',
                        color: '#000000',
                      }}
                      to={item.path}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterNavColumn>
          ))}
        </FooterNavWrap>
        <LogoSocialWrap>
          <LogoLink to="/">
            <Logo />
          </LogoLink>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="share/facebook" style={styles.socialLink}>
              <Icon name="facebook" />
            </Link>
            <Link to="share/facebook" style={styles.socialLink}>
              <Icon name="twitter" />
            </Link>
            <Link to="share/facebook" style={styles.socialLink}>
              <Icon name="instagram" />
            </Link>
            <Link to="share/facebook" style={styles.socialLink}>
              <Icon name="pinterest" />
            </Link>
            <Link to="share/facebook" style={styles.socialLink}>
              <Icon name="youtube" />
            </Link>
            <Link to="share/facebook" style={styles.socialLink}>
              <Icon name="tumblr" />
            </Link>
          </div>
        </LogoSocialWrap>
      </LayoutWrap>
    </div>
    <div style={{ background: '#ECECEC' }}>
      <SubFooterLayoutWrap>
        <SubFooterText>
          © 2018 by Intellectual Reserve, Inc. All rights reserved.
        </SubFooterText>
        <div>
          <SubFooterLink to="/rights-and-use-information">
            Rights and Use Information (Updated 2016-09-01)
          </SubFooterLink>
          <SubFooterLink to="/privacy-policy">
            Privacy Policy (Updated 2014-03-18)
          </SubFooterLink>
          <SubFooterLink to="/cookies">Cookie Preferences</SubFooterLink>
        </div>
      </SubFooterLayoutWrap>
    </div>
  </div>
)

export default Footer
