import React from 'react'

import Head from 'next/head'
import withPosts, { inCategory, sortByDate } from 'nextein/posts'

import Hero from '../components/Hero'
import Nav from '../components/Nav'
import PostListEntry from '../components/PostListEntry'

const Index = ({ posts }) => {
  posts.sort(sortByDate)

  return (
    <main>
      <Head>
        <title>:-)</title>
        <link rel='stylesheet' href='/static/bundle.css' />
      </Head>
      <Nav />
      <Hero />
      <section>
        {posts.map((post, idx) => (
          <PostListEntry key={`post-${idx}`} {...post} />
        ))}
      </section>
    </main>
  )
}

export default withPosts(Index)
