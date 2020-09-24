import { ComponentType } from 'react'
import { AppProps } from 'next/app'
import { NextComponentType, NextPageContext } from 'next'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'

import SEO from 'next-seo.config'
import 'styles/index.scss'
import useReactGA from 'hooks/useReactGA'

import { NoopLayout } from 'layout'

type CustomAppProps<P = unknown> = AppProps<P> & {
  Component: NextComponentType<NextPageContext, any, P> & {
    Layout?: ComponentType
  }
}

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: CustomAppProps) => {
  const Layout = Component.Layout || NoopLayout

  useReactGA()

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={{}}>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default MyApp
