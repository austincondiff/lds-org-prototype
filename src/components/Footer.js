import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'
import footerData from '../data/footer'
import Icon from '../components/Icon'

const Footer = ({ siteTitle }) => (
  <div>
    <div style={{ background: '#F7F8F8' }}>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 1200,
          display: 'flex',
          padding: '64px 0',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: '1',
          }}
        >
          {footerData.map(col => (
            <div style={{ flex: '1' }} key={col.id}>
              <h5
                style={{
                  fontFamily: 'proxima-nova, sans-serif',
                  fontWeight: '600',
                  fontSize: '15px',
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
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Link
            to="/"
            style={{
              color: 'black',
              textDecoration: 'none',
              margin: '16px 0',
            }}
          >
            <Logo />
          </Link>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              to="share/facebook"
              style={{ display: 'inline-block', margin: '8px' }}
            >
              <Icon name="facebook" />
            </Link>
            <Link
              to="share/facebook"
              style={{ display: 'inline-block', margin: '8px' }}
            >
              <Icon name="twitter" />
            </Link>
            <Link
              to="share/facebook"
              style={{ display: 'inline-block', margin: '8px' }}
            >
              <Icon name="instagram" />
            </Link>
            <Link
              to="share/facebook"
              style={{ display: 'inline-block', margin: '8px' }}
            >
              <Icon name="pinterest" />
            </Link>
            <Link
              to="share/facebook"
              style={{ display: 'inline-block', margin: '8px' }}
            >
              <Icon name="youtube" />
            </Link>
            <Link
              to="share/facebook"
              style={{ display: 'inline-block', margin: '8px' }}
            >
              <Icon name="tumblr" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div style={{ background: '#ECECEC' }}>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 1200,
          display: 'flex',
          padding: '32px 0',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'proxima-nova, sans-serif',
            fontWeight: '600',
            fontSize: '14px',
            color: '#000000',
            flex: '1',
          }}
        >
          © 2018 by Intellectual Reserve, Inc. All rights reserved.
        </div>
        <div>
          <Link
            style={{
              opacity: '0.6',
              fontFamily: 'proxima-nova, sans-serif',
              fontWeight: '600',
              fontSize: '12px',
              color: '#000000',
              textAlign: 'right',
              marginLeft: 16,
              textDecoration: 'none',
            }}
            to="/rights-and-use-information"
          >
            Rights and Use Information (Updated 2016-09-01)
          </Link>
          <Link
            style={{
              opacity: '0.6',
              fontFamily: 'proxima-nova, sans-serif',
              fontWeight: '600',
              fontSize: '12px',
              color: '#000000',
              textAlign: 'right',
              marginLeft: 16,
              textDecoration: 'none',
            }}
            to="/privacy-policy"
          >
            Privacy Policy (Updated 2014-03-18)
          </Link>
          <Link
            style={{
              opacity: '0.6',
              fontFamily: 'proxima-nova, sans-serif',
              fontWeight: '600',
              fontSize: '12px',
              color: '#000000',
              textAlign: 'right',
              marginLeft: 16,
              textDecoration: 'none',
            }}
            to="/cookies"
          >
            Cookie Preferences
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
