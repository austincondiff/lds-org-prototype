import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PostsWrap = styled.div`
  margin: -16px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 599px) {
    margin: -12px;
  }
`
const Post = styled.div`
  padding: 16px;
  display: flex;
  width: ${props => (props.large ? '50%' : '33%')};
  @media (max-width: 1295px) {
    width: ${props => (props.large ? '50%' : '50%')};
  }
  @media (max-width: 1023px) {
    width: ${props => (props.large ? '33%' : '50%')};
    ${props => props.large && `flex-direction: column;`}
  }
  @media (max-width: 767px) {
    width: ${props => (props.large ? '50%' : '50%')};
  }
  @media (max-width: 599px) {
    padding: 12px;
    width: ${props => (props.large ? '50%' : '100%')};
  }
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
  @media (max-width: 1295px) {
    width: ${props => (props.large ? 160 : 80)}px;
    height: ${props => (props.large ? 160 : 80)}px;
  }
  @media (max-width: 1023px) {
    width: ${props => (props.large ? '100%' : '80px')};
    height: ${props => (props.large ? 0 : 80)}px;
    ${props =>
      props.large &&
      `
      padding-top: 60%;
      margin-bottom: 16px;
    `}
    margin-right: ${props => (props.large ? 0 : 16)}px;
  }
  @media (max-width: 767px) {
    width: ${props => (props.large ? '100%' : '80px')};
    height: ${props => (props.large ? 0 : 80)}px;
    ${props =>
      props.large &&
      `
      padding-top: 60%;
      margin-bottom: 16px;
    `}
    margin-right: ${props => (props.large ? 0 : 16)}px;
  }

`
const ImageWrap = styled.div``

const PostMetaWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const PostCategory = styled(Link)`
  font-family: proxima-nova, sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  text-align: left;
  text-transform: uppercase;
  padding: 5px 6px 3px 6px;
  background-color: #01b6d1;
  display: inline-block;
  align-self: flex-start;
  line-height: 1;
  text-decoration: none;
  vertical-align: top;
  margin-bottom: 8px;
  @media (max-width: 599px) {
    color: #01b6d1;
    background-color: transparent;
    padding: 0;
    margin-bottom: 4px;
  }
`
const PostTitle = styled.h2`
  font-family: ${props =>
    props.large
      ? 'adobe-garamond-pro, Garamond, Georgia, serif'
      : 'proxima-nova, sans-serif'};
  font-size: ${props => (props.large ? 32 : 20)}px;
  line-height: 1.1;
  font-weight: ${props => (props.large ? 'normal' : '600')};
  margin-bottom: 12px;
  @media (max-width: 1295px) {
    font-size: ${props => (props.large ? '24' : '16')}px;
  }
  @media (max-width: 599px) {
    font-size: ${props => (props.large ? '18' : '16')}px;
    margin-bottom: 0;
  }
`
const PostTitleLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const PostSummary = styled.p`
  margin: 0;
  opacity: 0.8;
  font-family: proxima-nova, sans-serif;
  font-size: 16px;
  color: #000000;
  line-height: 1.25;
  @media (max-width: 599px) {
    display: none;
  }
`

const Posts = ({ posts, large }) => {
  return (
    <PostsWrap>
      {posts.map(({ node: post }) => {
        const { frontmatter } = post
        return (
          <Post large={large} key={post.id}>
            <ImageWrap>
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
            </ImageWrap>
            <PostMetaWrap>
              <PostCategory to="category">{frontmatter.category}</PostCategory>
              <PostTitle large={large}>
                <PostTitleLink to={frontmatter.path}>
                  {frontmatter.title}
                </PostTitleLink>
              </PostTitle>
              {large && <PostSummary>{frontmatter.subtitle}</PostSummary>}
            </PostMetaWrap>
          </Post>
        )
      })}
    </PostsWrap>
  )
}

export default Posts
