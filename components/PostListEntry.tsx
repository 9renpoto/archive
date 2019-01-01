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
  faGem,
  faMotorcycle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'nextein/link'
import React from 'react'
import { TimelineEvent } from 'react-event-timeline'

const definedCategory = {
  'css3-alt': faCss3Alt,
  js: faJs,
  rb: faGem,
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
  book: '2c2f35',
  code: '2c2f35',
  elixir: 'e70ef7',
  fire: 'f46542',
  js: '3f89ff',
  motorcycle: 'f46542',
  rb: 'ff5733',
  react: '03a9f4'
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
