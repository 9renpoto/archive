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
    const { data: { title } } = post
    return (
      <main>
        <Head>
          <title>{`:-) ${title}`}</title>
          <link rel='stylesheet' href='/static/bundle.css' />
        </Head>
        <Nav />
        <Hero title={title} />
        <section className='section'>
          <div className='container is-fluid'>
            <div className='content'>
              <Content {...post} />
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default withPost(Post)
