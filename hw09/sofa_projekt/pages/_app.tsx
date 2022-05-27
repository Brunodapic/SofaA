import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { SWRConfig, SWRConfiguration } from 'swr';
import fetcher from '../util/fetch'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'


const swrConfig: SWRConfiguration = { fetcher }


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <SWRConfig value={swrConfig}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}