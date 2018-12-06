import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import DailyScripture from '../components/DailyScripture'
import FeaturedVideo from '../components/FeaturedVideo'
import QuickLinks from '../components/QuickLinks'

const FeaturedPostsWrap = styled.div`
  background-color: #f7f8f8;
  padding: 48px;
  max-width: 1296px;
  width: 100%;
  border-top: 3px solid #01b6d1;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 12px 24px 0px;
  margin: -48px auto 64px auto;
  position: relative;
  @media (max-width: 1295px) {
    margin-top: 0;
  }
  @media (max-width: 1023px) {
    background-color: transparent;
    border: 0;
    box-shadow: transparent 0 0 0 0;
    margin-bottom: 0;
  }
  @media (max-width: 599px) {
    padding: 24px;
    margin-bottom: 24px;
  }
`
const RecentPosts = styled.div`
  max-width: 1296px;
  width: 100%;
  margin: 0 auto;
  padding: 64px 48px 128px 48px;
  @media (max-width: 1295px) {
    padding: 48px;
  }
  @media (max-width: 599px) {
    padding: 24px;
  }
`

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
      <FeaturedPostsWrap>
        <Posts large posts={featuredPosts} />
      </FeaturedPostsWrap>
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
      <RecentPosts>
        <Posts posts={recentPosts} />
      </RecentPosts>
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
