import dayjs from 'dayjs'
import withPosts, { sortByDate } from 'nextein/posts'
import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import { Timeline } from 'react-event-timeline'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import PostListEntry from '../components/PostListEntry'

const toDateString = datetime => dayjs(datetime).format('YYYY-MM-DD')

const Index = ({ posts }) => {
  posts.sort(sortByDate)

  const rows = {}
  posts.map(({ data: { date } }) => {
    const d = toDateString(date)
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
          startDate={dayjs(today)
            .add(-1, 'year')
            .toDate()}
          endDate={today}
          values={Object.keys(rows).map(datetime =>
            ((date = toDateString(datetime)) => ({
              count: rows[date],
              date: datetime
            }))()
          )}
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
