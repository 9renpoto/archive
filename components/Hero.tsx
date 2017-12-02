import React from 'react'

export default function Hello ({ title }) {
  return (
    <section>
      <h1>
        <span>Hello, there. I'm </span>Nextein
      </h1>
      {!title && (
        <p>
          {' '}
          A Blog / Static site generator based in <strong>Next.js</strong>
        </p>
      )}
      {title && <h2>{title}</h2>}
    </section>
  )
}
