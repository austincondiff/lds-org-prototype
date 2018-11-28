import React from 'react'
import { Link } from 'gatsby'
import QuoteIcon from '../images/quote.svg'

const DailyScripture = ({ scripture, reference }) => {
  return (
    <div
      style={{
        margin: '48px auto',
        maxWidth: 1200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div>
        <QuoteIcon style={{ marginTop: 32, marginRight: 32 }} />
      </div>
      <div style={{ flex: '1' }}>
        <div
          style={{
            fontFamily: 'ProximaNova-Semibold',
            fontSize: '13px',
            color: '#888888',
            letterSpacing: '1px',
            lineHeight: '24px',
            textTransform: 'uppercase',
            marginBottom: 4,
          }}
        >
          Scripture of the Day
        </div>
        <p
          style={{
            fontFamily: 'Garamond',
            fontSize: '32px',
            lineHeight: '1',
            color: '#0E0E0E',
            fontWeight: 'normal',
            marginBottom: 0,
          }}
        >
          {scripture}
        </p>
      </div>
      <div
        style={{
          opacity: '0.5',
          fontFamily: 'Garamond-Italic',
          fontSize: '32px',
          color: '#000000',
          textAlign: 'right',
          lineHeight: '44px',
          width: '20%',
        }}
      >
        –{reference}
      </div>
    </div>
  )
}

export default DailyScripture
