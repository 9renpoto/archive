import React from 'react'

import Head from 'next/head'
import withPosts, { sortByDate } from 'nextein/posts'

import Layout from '../components/Layout'
import Nav from '../components/Nav'
import PostListEntry from '../components/PostListEntry'

const Index = ({ posts }: any) => {
  posts.sort(sortByDate)

  return (
    <Layout>
      <Head>
        <title>:-)</title>
        <link rel='stylesheet' href='/static/bundle.css' />
      </Head>
      <Nav />
      <section>
        {posts.map((post: any, i: number) => (
          <PostListEntry key={i} {...post} />
        ))}
      </section>
    </Layout>
  )
}

export default withPosts(Index)
