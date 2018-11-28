import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'
import contributorsData from '../data/contributors'

const Contributors = ({ username }) => {
  const filteredContributors = contributorsData.filter(
    cd => cd.username === username
  )
  const c = filteredContributors.length > 0 && filteredContributors[0]
  console.log({ username, contributorsData, filteredContributors, c })
  return (
    <div
      style={{
        background: '#F7F8F8',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          margin: '64px auto',
          maxWidth: 800,
          display: 'flex',
        }}
      >
        <div>
          <Link
            style={{
              margin: 0,
              width: 128,
              height: 128,
              backgroundImage: `url(${c.avatar})`,
              display: 'block',
              borderRadius: 128,
              marginRight: 32,
            }}
            to={`/contributors/${c.username}`}
          />
        </div>
        <div>
          <div
            style={{
              fontFamily: 'ProximaNova-Semibold',
              fontSize: '13px',
              color: '#434343',
              letterSpacing: '1px',
              lineHeight: '24px',
              textTransform: 'uppercase',
              marginBottom: 0,
            }}
          >
            Contributed by
          </div>
          <h4
            style={{
              fontFamily: 'Garamond',
              fontSize: '32px',
              color: '#0E0E0E',
              letterSpacing: '0',
              fontWeight: 'normal',
              marginBottom: 8,
            }}
          >
            {c.name}
          </h4>
          <p
            style={{
              fontFamily: 'ProximaNova-Light',
              fontSize: '18px',
              color: '#434343',
              letterSpacing: '0',
              lineHeight: '2epx',
              marginBottom: 16,
            }}
          >
            {c.title}
          </p>
          <p
            style={{
              fontFamily: 'ProximaNova-Regular',
              fontSize: '18px',
              color: '#2F2F2F',
              lineHeight: '24px',
              marginBottom: 0,
            }}
          >
            {c.bio}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contributors
