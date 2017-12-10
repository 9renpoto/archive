import Link from 'nextein/link'
import { Content } from 'nextein/post'
import React from 'react'

const PostListEntry = ({ data, content, excerpt = true }) => {
  const { title, date } = data

  return (
    <article>
      <h1>
        <Link data={data} content={content}>
          {title}
        </Link>
      </h1>
      <span>{`${new Date(date).toDateString()}`}</span>
      <Content data={data} content={content} excerpt={excerpt} />
    </article>
  )
}

export default PostListEntry
