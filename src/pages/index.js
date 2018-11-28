import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import DailyScripture from '../components/DailyScripture'
import FeaturedVideo from '../components/FeaturedVideo'

import MeetingHouseLocatorIcon from '../images/meetinghouse-locator.svg'
import StudyIcon from '../images/study.svg'
import WardDirectoryIcon from '../images/ward-directory.svg'
import WardCalendarIcon from '../images/ward-calendar.svg'
import DonateIcon from '../images/donate.svg'
import FamilySearchIcon from '../images/family-search.svg'
import IndexingIcon from '../images/indexing.svg'
import ChatIcon from '../images/chat.svg'

const styles = {
  quicklink: {
    textAlign: 'center',
    textDecoration: 'none',
    fontFamily: 'ProximaNova-Semibold',
    fontSize: '16px',
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    lineHeight: '1.25',
    flex: '1',
  },
  quicklinkIconWrap: {
    display: 'flex',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quicklinkLabel: { display: 'block', marginTop: 16 },
}

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
      <div
        style={{
          padding: '48px 0',
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link style={styles.quicklink}>
          <span style={styles.quicklinkIconWrap}>
            <MeetingHouseLocatorIcon />
          </span>
          <span style={styles.quicklinkLabel}>Meetinghouse Locator</span>
        </Link>
        <Link style={styles.quicklink}>
          <span style={styles.quicklinkIconWrap}>
            <StudyIcon />
          </span>
          <span style={styles.quicklinkLabel}>Study</span>
        </Link>
        <Link style={styles.quicklink}>
          <span style={styles.quicklinkIconWrap}>
            <WardDirectoryIcon />
          </span>
          <span style={styles.quicklinkLabel}>Ward Directory</span>
        </Link>
        <Link style={styles.quicklink}>
          <span style={styles.quicklinkIconWrap}>
            <WardCalendarIcon />
          </span>
          <span style={styles.quicklinkLabel}>Ward Calendar</span>
        </Link>
        <Link style={styles.quicklink}>
          <span style={styles.quicklinkIconWrap}>
            <DonateIcon />
          </span>
          <span style={styles.quicklinkLabel}>Donate</span>
        </Link>
        <Link style={styles.quicklink}>
          <span style={styles.quicklinkIconWrap}>
            <FamilySearchIcon />
          </span>
          <span style={styles.quicklinkLabel}>Family Search</span>
        </Link>
        <Link style={styles.quicklink}>
          <span style={styles.quicklinkIconWrap}>
            <IndexingIcon />
          </span>
          <span style={styles.quicklinkLabel}>Indexing</span>
        </Link>
        <Link style={styles.quicklink}>
          <span style={styles.quicklinkIconWrap}>
            <ChatIcon />
          </span>
          <span style={styles.quicklinkLabel}>Chat With Us</span>
        </Link>
      </div>
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
