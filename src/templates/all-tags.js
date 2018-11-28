import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts'

const AllTags = ({ pathContext }) => {
  const { tags } = pathContext

  if (tags) {
    return (
      <Layout>
        <ul>
          {tags.map(tag => {
            return (
              <li>
                <Link to={`tags/${tag}`}>{tag}</Link>
              </li>
            )
          })}
        </ul>
      </Layout>
    )
  }
}

export default AllTags
