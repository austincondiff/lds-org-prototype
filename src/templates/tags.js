import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts'

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext

  if (posts) {
    return (
      <Layout>
        <span>Posts about {tagName};</span>

        <ul>
          {posts.map(post => {
            return (
              <li>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            )
          })}
        </ul>
      </Layout>
    )
  }
}

export default Tags
