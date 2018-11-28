import React from 'react'
import { Link } from 'gatsby'

const Posts = ({ posts, large }) => {
  return (
    <div style={{ margin: '-16px', display: 'flex', flexWrap: 'wrap' }}>
      {posts.map(({ node: post }) => {
        const { frontmatter } = post
        return (
          <div
            style={{
              padding: 16,
              display: 'flex',
              width: large ? '50%' : '33%',
            }}
            key={post.id}
          >
            <div>
              <Link
                to={frontmatter.path}
                style={{
                  width: large ? 200 : 160,
                  height: large ? 200 : 160,
                  display: 'block',
                  backgroundImage: `url(${frontmatter.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  marginRight: large ? 24 : 16,
                  position: 'relative',
                }}
              >
                {frontmatter.video && (
                  <span
                    style={{
                      display: 'block',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translateX(-50%) translateY(-50%)',
                      width: '0',
                      height: '0',
                      borderLeft: '24px solid #fff',
                      borderTop: '14px solid transparent',
                      borderBottom: '14px solid transparent',
                    }}
                  />
                )}
              </Link>
            </div>
            <div>
              <Link
                style={{
                  fontFamily: 'proxima-nova, sans-serif',
                  fontWeight: '700',
                  fontSize: '12px',
                  color: '#FFFFFF',
                  textAlign: 'left',
                  textTransform: 'uppercase',
                  padding: '5px 6px 3px 6px',
                  backgroundColor: '#01B6D1',
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  lineHeight: '1',
                  textDecoration: 'none',
                  verticalAlign: 'top',
                }}
              >
                {frontmatter.category}
              </Link>
              <h2
                style={{
                  fontFamily: large ? 'Garamond' : 'ProximaNova-Semibold',
                  fontSize: large ? '32px' : '20px',
                  lineHeight: '1.1',
                  fontWeight: 'normal',
                  marginBottom: 12,
                }}
              >
                <Link
                  style={{ color: 'black', textDecoration: 'none' }}
                  to={frontmatter.path}
                >
                  {frontmatter.title}
                </Link>
              </h2>
              {large && (
                <p
                  style={{
                    margin: 0,
                    opacity: '0.8',
                    fontFamily: 'proxima-nova, sans-serif',
                    fontSize: '16px',
                    color: '#000000',
                    lineHeight: '1.25',
                  }}
                >
                  {frontmatter.subtitle}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
