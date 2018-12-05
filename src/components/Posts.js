import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Post = styled.div`
  padding: 16px;
  display: flex;
  width: ${props => (props.large ? '50%' : '33%')};
`

const Image = styled(Link)`
  width: ${props => (props.large ? 200 : 160)}px;
  height: ${props => (props.large ? 200 : 160)}px;
  display: block;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  margin-right: ${props => (props.large ? 24 : 16)}px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px;
  transition: 150ms;
  ${Post}:hover & {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 8px 16px;
  }
`

const Posts = ({ posts, large }) => {
  return (
    <div style={{ margin: '-16px', display: 'flex', flexWrap: 'wrap' }}>
      {posts.map(({ node: post }) => {
        const { frontmatter } = post
        return (
          <Post large={large} key={post.id}>
            <div>
              <Image
                to={frontmatter.path}
                src={frontmatter.image}
                large={large}
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
              </Image>
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
          </Post>
        )
      })}
    </div>
  )
}

export default Posts
