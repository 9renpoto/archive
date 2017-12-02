import React from 'react'

import Head from 'next/head'
import withPosts, { inCategory, sortByDate } from 'nextein/posts'

import Hero from '../components/Hero'
import Nav from '../components/Nav'
import PostListEntry from '../components/PostListEntry'

const Index = ({ posts }) => {
  const inPosts = posts.filter(inCategory('post')).sort(sortByDate)
  const inHome = posts.filter(inCategory('home'))

  return (
    <main>
      <Head>
        <title>:-)</title>
        <link rel='stylesheet' href='/static/bundle.css' />
      </Head>
      <Nav />
      <Hero />
      <section>
        <h1>/post</h1>
        <p>{inPosts.length} entries found.</p>
        {inPosts.map((post, idx) => (
          <PostListEntry key={`post-${idx}`} {...post} />
        ))}
      </section>
      <section>
        <h1>/home</h1>
        <p>{inHome.length} entries found.</p>
        {inHome.map((post, idx) => (
          <PostListEntry key={`home-${idx}`} {...post} />
        ))}
      </section>
    </main>
  )
}

export default withPosts(Index)
