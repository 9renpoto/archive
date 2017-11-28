import * as React from 'react'

const styles = {
  tag: {
    display: 'inline',
    background: '#ccc',
    fontSize: '.75em',
    margin: 3,
    padding: 5
  }
}

export default ({ tags }) => {
  if (!tags.length) {
    return null
  }
  return (
    <div>
      {tags.map(tag => (
        <span style={styles.tag} key={`tag-${tag}`}>
          {' '}
          &gt; {tag}
        </span>
      ))}
    </div>
  )
}
