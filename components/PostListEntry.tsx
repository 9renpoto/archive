import Link from 'nextein/link'
import { Content } from 'nextein/post'
import React from 'react'

const PostListEntry = ({ data, content, excerpt = true }) => {
  const { url, title, date, _entry, page = 'post' } = data

  return (
    <article>
      <h1>
        {/* <a href={url}>{title}</a> */}
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
