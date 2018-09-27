import Link from 'nextein/link'
import React, { Fragment } from 'react'

const PostListEntry = ({ data, content }) => {
  const { title, date } = data

  return (
    <Fragment>
      <div className='tags has-addons'>
        <span className='tag is-dark'>{`${new Date(
          date
        ).toDateString()}`}</span>
        <span className='tag'>
          <Link data={data} content={content}>
            <a>{title}</a>
          </Link>
        </span>
      </div>
    </Fragment>
  )
}

export default PostListEntry
