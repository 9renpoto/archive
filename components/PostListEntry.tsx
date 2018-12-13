import {
  faCss3Alt,
  faJava,
  faJs,
  faPhoenixFramework,
  faPython,
  faReact,
  faVuejs
} from '@fortawesome/free-brands-svg-icons'
import {
  faBook,
  faCode,
  faCoffee,
  faFire,
  faMotorcycle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'nextein/link'
import React from 'react'
import { TimelineEvent } from 'react-event-timeline'

const definedCategory = {
  'css3-alt': faCss3Alt,
  js: faJs,
  vuejs: faVuejs,
  elixir: faPhoenixFramework,
  react: faReact,
  fire: faFire,
  python: faPython,
  book: faBook,
  code: faCode,
  motorcycle: faMotorcycle,
  java: faJava
}

const color = {
  react: '03a9f4',
  fire: 'f46542',
  elixir: 'e70ef7',
  js: '3f89ff',
  code: '2c2f35',
  book: '2c2f35',
  motorcycle: 'f46542'
}

const PostListEntry = ({ data, content }) => {
  const { title, date } = data

  return (
    <TimelineEvent
      title={''}
      createdAt={`${new Date(date).toDateString()}`}
      iconColor={`#${color[data.category]}`}
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
