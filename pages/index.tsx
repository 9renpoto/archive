import dayjs from 'dayjs'
import withPosts, { sortByDate } from 'nextein/posts'
import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import { Timeline } from 'react-event-timeline'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import PostListEntry from '../components/PostListEntry'

const Index = ({ posts }) => {
  posts.sort(sortByDate)

  const rows = {}
  posts.map(({ data: { date } }) => {
    const d = dayjs(date).format()
    rows[d] = rows[d] || 0
    rows[d]++
  })

  const today = new Date()

  return (
    <Layout>
      <Head title={''} />
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
          <Timeline>
            {posts.map((post, i) => (
              <PostListEntry key={i} {...post} />
            ))}
          </Timeline>
        </section>
      </div>
    </Layout>
  )
}

export default withPosts(Index)
