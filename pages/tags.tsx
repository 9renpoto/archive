import React from 'react'

import withPosts from 'nextein/posts'

import Nav from '../components/Nav'
import PostListEntry from '../components/PostListEntry'

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
    <main>
      <Nav />
      <section>
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
