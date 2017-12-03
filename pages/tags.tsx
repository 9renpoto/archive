import React from 'react'

import withPosts from 'nextein/posts'

import Nav from '../components/Nav'
import PostListEntry from '../components/PostListEntry'

const containsTag = (tag: any) => (post: any) => {
  const tags = [].concat(post.data.tag)
  return tags.indexOf(tag) !== -1
}

const unique = (arr: any) => {
  return [...new Set(arr)]
}

const Index = ({ posts }: any) => {
  const tags = unique(
    posts
      .filter((p: any) => p.data.tag)
      .map(post => [].concat(post.data.tag))
      .reduce((c, p = []) => p.concat(...c))
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
              {inTag.map((post: any, i: number) => (
                <PostListEntry key={i} {...post} />
              ))}
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default withPosts(Index)
