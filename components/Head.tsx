import Head from 'next/head'
import React from 'react'

export default function ({ title }: { title: string }) {
  return (
    <Head>
      <title>{`:-) ${title}`}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='stylesheet' href='/static/bundle.css' />
      <link rel='icon' href='/static/favicon.ico' />
    </Head>
  )
}
