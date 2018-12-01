import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import DailyScripture from '../components/DailyScripture'
import FeaturedVideo from '../components/FeaturedVideo'
import QuickLinks from '../components/QuickLinks'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const heroPost = posts.filter((p, i) => i <= 0)[0].node
  const featuredPosts = posts.filter((p, i) => i > 0 && i < 7)
  const recentPosts = posts.filter((p, i) => i > 6)

  console.log({ posts, heroPost, featuredPosts, recentPosts })

  return (
    <Layout>
      {heroPost && (
        <Hero
          image={heroPost.frontmatter.image}
          category={heroPost.frontmatter.category}
          title={heroPost.frontmatter.title}
          subtitle={heroPost.frontmatter.subtitle}
          excerpt={heroPost.frontmatter.excerpt}
          link={heroPost.frontmatter.path}
        />
      )}
      <div
        style={{
          backgroundColor: '#F7F8F8',
          padding: 48,
          maxWidth: 1296,
          borderTop: '3px solid #01B6D1',
          boxShadow: '0 4px 4px 0 rgba(0,0,0,0.25)',
          margin: '-48px auto 64px auto',
          position: 'relative',
        }}
      >
        <Posts large posts={featuredPosts} />
      </div>
      <QuickLinks />
      <FeaturedVideo
        title="Mormon Messages: Gathering the Family of God"
        subtitle="Family History enthusiasts share touching experiences they had while finding ancestors’"
        image="https://media.ldscdn.org/images/media-library/family-history/family-history-library-886282-wallpaper.jpg"
        video="YmIq2oRQiVw"
      />
      <DailyScripture
        scripture="And he shall turn the heart of the fathers to the children and the heart of the children to their fathers…"
        reference="Malachi 4:6"
      />
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '64px 0 128px 0',
        }}
      >
        <Posts posts={recentPosts} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 16
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

export default IndexPage
