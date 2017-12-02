import React from 'react'

export default function Hello ({ title }) {
  return (
    <section className='hero is-primary'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>{title}</h1>
        </div>
      </div>
    </section>
  )
}
