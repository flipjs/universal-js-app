import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>Hello, World!</title>
    </Head>
    <h1>Hello, World!</h1>
    <ul>
    </ul>
    <li><Link href='/about'>About page</Link></li>
    <li><Link href='/hello'>Hello from...</Link></li>
  </div>
)
