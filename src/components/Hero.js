import React from 'react'
import { Link } from 'gatsby'

const Hero = ({ title, subtitle, excerpt, image, category, link }) => {
  return (
    <Link
      to={link}
      style={{
        display: 'block',
        width: '100%',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '40%',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.5) 20%,rgba(0,0,0,0) 80%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <div
          style={{
            width: 1200,
            height: '100%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '128px 0',
          }}
        >
          <div style={{ width: '50%' }}>
            <div
              style={{
                fontFamily: 'proxima-nova, sans-serif',
                fontWeight: '700',
                fontSize: '14px',
                color: '#FFFFFF',
                textAlign: 'left',
                textTransform: 'uppercase',
                padding: '7px 8px 5px 8px',
                backgroundColor: '#01B6D1',
                display: 'inline-block',
                alignSelf: 'flex-start',
                lineHeight: '1',
              }}
            >
              {category}
            </div>
            <div
              style={{
                fontFamily: 'adobe-garamond-pro, Garamond, Georgia, serif',
                fontSize: '48px',
                color: '#FFFFFF',
                textAlign: 'left',
                lineHeight: '1',
                margin: '12px 0',
              }}
            >
              {title}
            </div>
            <div
              style={{
                opacity: '0.9',
                fontFamily: 'proxima-nova, sans-serif',
                fontWeight: '300',
                fontSize: '24px',
                color: '#FFFFFF',
                textAlign: 'left',
                lineHeight: '1.25',
                marginBottom: 40,
              }}
            >
              {subtitle}
            </div>
            <div
              style={{
                fontFamily: 'proxima-nova, sans-serif',
                fontSize: '18px',
                color: '#FFFFFF',
                letterSpacing: '0',
                textAlign: 'left',
                lineHeight: '1.25',
              }}
            >
              {excerpt}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Hero
