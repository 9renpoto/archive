import * as fecha from 'fecha'
import Head from 'next/head'
import withPosts, { sortByDate } from 'nextein/posts'
import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import PostListEntry from '../components/PostListEntry'

fecha.masks.postTime = 'YYYY-MM-DD'

const Index = ({ posts }) => {
  posts.sort(sortByDate)

  const rows = {}
  posts.map(({ data: { date } }) => {
    const s: any = fecha.parse(date, 'YYYY-MM-DDTHH:mm:ss.ZZ')
    const d = fecha.format(s, 'postTime')
    rows[d] = rows[d] || 0
    rows[d]++
  })

  const today = new Date()

  return (
    <Layout>
      <Head>
        <title>:-)</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='/static/bundle.css' />
      </Head>
      <Nav />
      <div className='container is-widescreen'>
        <CalendarHeatmap
          startDate={
            new Date(today.getFullYear() - 1, today.getMonth(), today.getDay())
          }
          endDate={new Date()}
          values={Object.keys(rows).map(date => ({ count: rows[date], date }))}
          classForValue={value => `color-github-${value ? value.count : 0}`}
        />
        <section>
          {posts.map((post, i) => (
            <PostListEntry key={i} {...post} />
          ))}
        </section>
      </div>
    </Layout>
  )
}

export default withPosts(Index)
