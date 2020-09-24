import { useEffect } from 'react'
import { initGA, logPageView } from 'utils/analytics'
import Router from 'next/router'

const useReactGA = (): void => {
  useEffect(() => {
    initGA()
    logPageView()
    Router.events.on('routeChangeComplete', logPageView)

    return () => Router.events.off('routeChangeComplete', logPageView)
  })
}

export default useReactGA
