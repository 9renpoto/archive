import React from 'react'

type Props = {
  title: string
}

export default function Hero ({ title }: Props) {
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
