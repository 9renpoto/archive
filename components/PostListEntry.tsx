import {
  faJs,
  faPhoenixFramework,
  faPython,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import { faBook, faCoffee, faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'nextein/link'
import React from 'react'
import { TimelineEvent } from 'react-event-timeline'

const definedCategory = {
  js: faJs,
  elixir: faPhoenixFramework,
  react: faReact,
  fire: faFire,
  python: faPython,
  book: faBook
}

const PostListEntry = ({ data, content }) => {
  const { title, date } = data

  return (
    <TimelineEvent
      title={data.category}
      createdAt={`${new Date(date).toDateString()}`}
      icon={
        <FontAwesomeIcon icon={definedCategory[data.category] || faCoffee} />}
    >
      <Link data={data} content={content}>
        <a>{title}</a>
      </Link>
    </TimelineEvent>
  )
}

export default PostListEntry
