import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Icon from '../components/Icon'
import ContributorBio from '../components/Contributor'
import Posts from '../components/Posts'

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
            <div
              style={{ maxWidth: 1200, margin: '0 auto', paddingBottom: 48 }}
            >
              <a
                style={{
                  fontFamily: 'ProximaNova-Bold',
                  fontSize: '14px',
                  color: '#22282E',
                  letterSpacing: '1px',
                  textAlign: 'left',
                  textTransform: 'uppercase',
                }}
              >
                {category}
              </a>
              <h2
                style={{
                  fontFamily: 'Garamond',
                  fontSize: '48px',
                  color: '#0096AC',
                  textAlign: 'left',
                  lineHeight: '52px',
                  fontWeight: 'normal',
                  marginBottom: 20,
                }}
              >
                {title}
              </h2>
              <p
                style={{
                  fontFamily: 'ProximaNova-Light',
                  fontSize: '20px',
                  color: '#22282E',
                  textAlign: 'left',
                  margin: 0,
                }}
              >
                {subtitle}
              </p>
            </div>
          </header>
          <div
            style={{
              width: '100%',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              paddingTop: '40%',
              position: 'relative',
              cursor: video && 'pointer',
            }}
            onClick={() =>
              video && !showVideo && this.setState({ showVideo: true })
            }
          >
            {video &&
              (showVideo ? (
                <iframe
                  title="youtube"
                  frameborder="0"
                  style={{
                    overflow: 'hidden',
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                  }}
                  height="100%"
                  width="100%"
                  src={`https://www.youtube.com/embed/${video}?autoplay=1`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(-50%)',
                    padding: '24px 40px',
                    backgroundColor: 'rgba(1,182,209,0.8)',
                    borderRadius: 3,
                    boxShadow: '0px 0px 64px rgba(0,0,0,0.5)',
                  }}
                >
                  <div
                    style={{
                      display: 'block',
                      position: 'relative',
                      zIndex: '3',
                      width: '0',
                      height: '0',
                      borderLeft: '24px solid #fff',
                      borderTop: '14px solid transparent',
                      borderBottom: '14px solid transparent',
                    }}
                  />
                </div>
              ))}
          </div>
          <div
            style={{
              maxWidth: 800,
              margin: '64px auto',
            }}
          >
            <div
              style={{
                position: 'sticky',
                marginLeft: -196,
                top: 128,
                height: 128,
                width: 32,
              }}
            >
              <Link
                to="share/facebook"
                style={{ display: 'block', margin: '16px 0' }}
              >
                <Icon name="twitter" />
              </Link>
              <Link
                to="share/facebook"
                style={{ display: 'block', margin: '16px 0' }}
              >
                <Icon name="facebook" />
              </Link>
              <Link
                to="share/facebook"
                style={{ display: 'block', margin: '4px 0' }}
              >
                <Icon name="pinterest" />
              </Link>
            </div>
            <div
              style={{ marginTop: -128 }}
              className="post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                marginLeft: -8,
              }}
            >
              {tags.map(tag => (
                <li
                  style={{
                    margin: 4,
                    padding: 0,
                    listStyle: 'none',
                    display: 'inline-block',
                  }}
                  key={tag}
                >
                  <Link
                    to={`/tags/${tag}`}
                    style={{
                      fontFamily: 'ProximaNova-Bold',
                      fontSize: '13px',
                      color: '#22282E',
                      letterSpacing: '1px',
                      textAlign: 'left',
                      textTransform: 'uppercase',
                      padding: '6px 8px',
                      backgroundColor: '#ddd',
                      textDecoration: 'none',
                    }}
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
            {(prev || next) && (
              <div style={{ display: 'flex', marginTop: 64 }}>
                <div style={{ width: '50%', lineHeight: '1' }}>
                  {prev && (
                    <Link
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                        fontFamily: 'ProximaNova-Bold',
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        letterSpacing: '1px',
                        lineHeight: '1',
                      }}
                      to={prev.frontmatter.path}
                    >
                      <span
                        style={{
                          display: 'block',
                          opacity: 0.5,
                          marginBottom: 8,
                        }}
                      >
                        ◀ Previous
                      </span>
                      <span style={{ display: 'block' }}>
                        {prev.frontmatter.title}
                      </span>
                    </Link>
                  )}
                </div>
                <div
                  style={{ width: '50%', lineHeight: '1', textAlign: 'right' }}
                >
                  {next && (
                    <Link
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                        fontFamily: 'ProximaNova-Bold',
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        letterSpacing: '1px',
                        lineHeight: '1.25',
                      }}
                      to={next.frontmatter.path}
                    >
                      <span
                        style={{
                          display: 'block',
                          opacity: 0.5,
                          marginBottom: 8,
                        }}
                      >
                        Next ▶
                      </span>
                      <span style={{ display: 'block' }}>
                        {next.frontmatter.title}
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
          <ContributorBio username={contributor} />
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              padding: '64px 0',
            }}
          >
            <h3
              style={{
                fontFamily: 'Garamond',
                fontSize: '32px',
                color: '#000000',
                textAlign: 'center',
                fontWeight: 'normal',
                marginBottom: 48,
              }}
            >
              Related Posts
            </h3>
            <Posts posts={relatedPosts} />
          </div>
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
