import Link from 'nextein/link'
import React, { Fragment } from 'react'

export default ({ items }) => (
  <Fragment>
    {items.map((post, idx) => (
      <Link {...post} key={`sidebar-post-${idx}`}>
        <a>{post.data.title}</a>
      </Link>
    ))}
  </Fragment>
)
