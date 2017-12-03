import Head from 'next/head'
import withPost, { Content } from 'nextein/post'
import React, { PureComponent } from 'react'

import Hero from '../components/Hero'
import Nav from '../components/Nav'

type Props = {
  post: any;
}

class Post extends PureComponent<Props> {
  render () {
    const { post } = this.props
    const { data: { tag, title } } = post
    const tags = tag ? [].concat(tag) : []
    return (
      <main>
        <Head>
          <title>{`:-) ${title}`}</title>
          <link rel='stylesheet' href='/static/bundle.css' />
        </Head>
        <Nav />
        <div />
        <Hero title={title} />
        <section className='section'>
          <div className='container is-fluid'>
            <Content {...post} />
          </div>
        </section>
      </main>
    )
  }
}

export default withPost(Post)
