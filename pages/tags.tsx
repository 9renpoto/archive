import React from 'react'

import withPosts from 'nextein/posts'

import NexteinHello from '../components/Hero'
import Navigation from '../components/Nav'
import PostListEntry from '../components/PostListEntry'

const styles = {
  main: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    fontWeight: 100,
    display: 'flex',
    flexDirection: 'column'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '60vw'
  },
  navigation: {
    position: 'absolute',
    alignSelf: 'center',
    width: '60vw'
  }
}

const containsTag = tag => post => {
  const tags = [].concat(post.data.tag)
  return tags.indexOf(tag) !== -1
}

const unique = arr => {
  return [...new Set(arr)]
}

const Index = ({ posts }) => {
  const tags = unique(
    posts
      .filter(p => p.data.tag) // remove posts without tags
      .map(post => [].concat(post.data.tag)) // tags to array
      .reduce((c, p = []) => p.concat(...c)) // flatten array
      .sort()
  )

  return (
    <main style={styles.main}>
      <Navigation style={styles.navigation} />
      <NexteinHello title='Tags' />
      <section style={styles.section}>
        {tags.map(tag => {
          const inTag = posts.filter(containsTag(tag))

          return (
            <div key={`tag-${tag}`}>
              <h1>{tag}</h1>
              {inTag.map((post, idx) => (
                <PostListEntry key={`post-${idx}`} {...post} />
              ))}
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default withPosts(Index)
