import { Header } from '@9renpoto/style'
import Link from 'nextein/link'
import React from 'react'

export default function Navigation () {
  return (
    <Header
      Logo={className => (
        <Link href='/'>
          <a className={className}>{':-)'}</a>
        </Link>
      )}
      titles={['tags', 'profile']}
      baseUrl='https://9renpoto.github.io/entry'
    />
  )
}
