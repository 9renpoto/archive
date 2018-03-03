import { Header } from '@9renpoto/style'
import Link from 'nextein/link'
import React from 'react'

export default function Navigation () {
  return (
    <Header
      Logo={(className: string) => (
        <Link href='/'>
          <a className={className}>{':-)'}</a>
        </Link>
      )}
      titles={[]}
      baseUrl='https://9renpoto.github.io/entry'
    />
  )
}
