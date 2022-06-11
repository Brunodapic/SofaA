import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { SWRConfig, SWRConfiguration } from 'swr';
import { fetcher } from '../util/fetch'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import NavBar from '../modules/Navbar/Navbar';
import { DarkModeContext } from '../context/DarkModeContext';
import { NotificationContext } from '../context/NotificationContext';
import { MyComp } from './api/useWindowDimensions';


const swrConfig: SWRConfiguration = { fetcher }


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}



export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [notification, setNotification] = useState([])
  var comp = undefined
  useEffect(() => {
    // window is accessible here.
    comp = window.innerWidth
    console.log("window.innerWidth", window.innerWidth);
  }, []);
  console.log(comp)






  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <SWRConfig value={swrConfig}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <NotificationContext.Provider value={{ notification, setNotification }}>
          <NavBar />
          <Component {...pageProps} />
        </NotificationContext.Provider>
      </DarkModeContext.Provider>
    </SWRConfig>
  )
}