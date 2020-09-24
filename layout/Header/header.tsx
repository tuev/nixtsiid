import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { FC } from 'react'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const Header: FC = () => {
  return (
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Head>
  )
}

export default Header
