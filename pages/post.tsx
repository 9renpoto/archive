import withPost, { Content } from 'nextein/post'
import React, { PureComponent } from 'react'
import Head from '../components/Head'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Nav from '../components/Nav'

type Props = {
  post: any
}

class Post extends PureComponent<Props> {
  render () {
    const { post } = this.props
    const {
      data: { title }
    } = post
    return (
      <Layout>
        <Head title={title} />
        <Nav />
        <Hero title={title} />
        <section className='section'>
          <div className='container is-fluid'>
            <div className='content'>
              <Content {...post} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default withPost(Post)
