import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Icon from '../components/Icon'
import ContributorBio from '../components/Contributor'
import Posts from '../components/Posts'

const LayoutWrap = styled.div`
  max-width: 1296px;
  width: 100%;
  margin: 0 auto;
  padding: 0 48px 48px 48px;
  @media (max-width: 599px) {
    padding: 24px;
  }
`
const Category = styled(Link)`
  font-family: proxima-nova, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #22282e;
  letter-spacing: 1px;
  text-align: left;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 4px;
  @media (max-width: 599px) {
    font-size: 12px;
  }
`
const Title = styled.h2`
  font-family: adobe-garamond-pro Garamond, Georgia, serif;
  font-size: 48px;
  color: #0096ac;
  text-align: left;
  line-height: 1.1;
  font-weight: normal;
  margin-bottom: 20px;
  @media (max-width: 599px) {
    font-size: 32px;
    margin-bottom: 12px;
  }
`
const Subtitle = styled.p`
  font-family: proxima-nova, sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #22282e;
  text-align: left;
  margin: 0;
  @media (max-width: 599px) {
    font-size: 14px;
  }
`
const CoverImage = styled.div`
  width: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  padding-top: 40%;
  position: relative;
  ${props => props.hasVideo && 'cursor: pointer;'}
  @media (max-width: 599px) {
    padding-top: 56.25%;
  }
`
const YouTubeVideo = styled.iframe`
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`
const PlayIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 24px 40px;
  background-color: rgba(1, 182, 209, 0.8);
  border-radius: 3px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.5);
`
const PlayIcon = styled.div`
  display: block;
  position: relative;
  z-index: 3;
  width: 0;
  height: 0;
  border-left: 24px solid #fff;
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
`
const Article = styled.article`
  max-width: 896px;
  width: 100%;
  margin: 0 auto;
  padding: 64px 48px;
  @media (max-width: 599px) {
    padding: 24px;
  }
`
const SocialLinks = styled.div`
  position: sticky;
  margin-left: -196px;
  top: 128px;
  height: 128px;
  width: 32px;
`
const SocialLink = styled(Link)`
  display: block;
  margin: 16px 0;
  color: black;
`
const ArticleContent = styled.div`
  margin-top: -128px;
`
const Tags = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: -8px;
`
const Tag = styled.li`
  margin: 4px;
  padding: 0;
  list-style: none;
  display: inline-block;
`
const TagLink = styled(Link)`
  font-family: proxima-nova, sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #22282e;
  letter-spacing: 1px;
  text-align: left;
  text-transform: uppercase;
  padding: 6px 8px;
  background-color: #ddd;
  text-decoration: none;
`
const PostNav = styled.div`
  display: flex;
  margin-top: 64px;
`
const PostNavLinkWrap = styled.div`
  width: 50%;
  line-height: 1;
  ${props => props.right && 'text-align: right;'}
`
const PostNavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-family: proxima-nova, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1l;
`
const PostNavLinkLabel = styled.span`
  display: block;
  opacity: 0.5;
  margin-bottom: 8px;
`
const PostNavLinkTitle = styled.span`
  display: block;
`
const RelatedPosts = styled(LayoutWrap)`
  display: block;
`
const RelatedPostsTitle = styled.h3`
  font-family: adobe-garamond-pro, Garamond, Georgia, serif;
  font-size: 32px;
  color: #000000;
  text-align: center;
  font-weight: normal;
  margin-bottom: 48px;
`

class Template extends React.Component {
  constructor() {
    super()
    this.state = { showVideo: false }
  }

  render() {
    const { data, location, pathContext } = this.props
    const { markdownRemark: post, allMarkdownRemark } = data
    const { edges: relatedPosts } = allMarkdownRemark
    const { frontmatter, html } = post
    const {
      title,
      subtitle,
      date,
      image,
      excerpt,
      category,
      tags,
      contributor,
      video,
    } = frontmatter
    const { next, prev } = pathContext
    const { showVideo } = this.state

    console.log({ relatedPosts })

    return (
      <Layout>
        <Helmet title={`${title} - LDS.org`} />
        <div>
          <header style={{ backgroundColor: '#eff0f0' }}>
            <LayoutWrap>
              <Category>{category}</Category>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </LayoutWrap>
          </header>
          <CoverImage
            src={image}
            hasVideo={video}
            onClick={() =>
              video && !showVideo && this.setState({ showVideo: true })
            }
          >
            {video &&
              (showVideo ? (
                <YouTubeVideo
                  title="youtube"
                  frameborder="0"
                  height="100%"
                  width="100%"
                  src={`https://www.youtube.com/embed/${video}?autoplay=1`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              ) : (
                <PlayIndicator>
                  <PlayIcon />
                </PlayIndicator>
              ))}
          </CoverImage>
          <Article>
            <SocialLinks>
              <SocialLink to="share/facebook">
                <Icon name="twitter" />
              </SocialLink>
              <SocialLink to="share/facebook">
                <Icon name="facebook" />
              </SocialLink>
              <SocialLink to="share/facebook">
                <Icon name="pinterest" />
              </SocialLink>
            </SocialLinks>
            <ArticleContent
              className="post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Tags>
              {tags.map(tag => (
                <Tag key={tag}>
                  <TagLink to={`/tags/${tag}`}>{tag}</TagLink>
                </Tag>
              ))}
            </Tags>
            {(prev || next) && (
              <PostNav>
                <PostNavLinkWrap>
                  {prev && (
                    <PostNavLink to={prev.frontmatter.path}>
                      <PostNavLinkLabel>◀ Previous</PostNavLinkLabel>
                      <PostNavLinkTitle>
                        {prev.frontmatter.title}
                      </PostNavLinkTitle>
                    </PostNavLink>
                  )}
                </PostNavLinkWrap>
                <PostNavLinkWrap right>
                  {next && (
                    <PostNavLink to={next.frontmatter.path}>
                      <PostNavLinkLabel>Next ▶</PostNavLinkLabel>
                      <PostNavLinkTitle>
                        {next.frontmatter.title}
                      </PostNavLinkTitle>
                    </PostNavLink>
                  )}
                </PostNavLinkWrap>
              </PostNav>
            )}
          </Article>
          <ContributorBio username={contributor} />
          <RelatedPosts>
            <RelatedPostsTitle>Related Posts</RelatedPostsTitle>
            <Posts posts={relatedPosts} />
          </RelatedPosts>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        path
        category
        tags
        excerpt
        image
        contributor
        video
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 15
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            date(formatString: "MMMM DD, YYYY")
            path
            category
            tags
            excerpt
            image
            video
          }
        }
      }
    }
  }
`

export default Template
