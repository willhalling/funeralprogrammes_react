import '../styles/globals.css'

import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { QueryClientProvider } from '@tanstack/react-query'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { AppLayout } from '../components'
import createEmotionCache from '../utils/createEmotionCache'
import { queryClient } from '../utils/queryClient'
import theme from '../utils/theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface IAppProps extends AppProps {
  emotionCache: EmotionCache
}

const App: NextPage<IAppProps> = (props: IAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
