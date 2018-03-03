import Link from 'nextein/link'
import React, { Fragment } from 'react'

export default ({ items }) => {
  return (
    <Fragment>
      {items.map((post, idx) => {
        return (
          <Link {...post} key={`sidebar-post-${idx}`}>
            <a>{post.data.title}</a>
          </Link>
        )
      })}
    </Fragment>
  )
}
