'use client';

import '@/styles/globals.css'
import '@/styles/fonts.css'
import Layout from '@/components/Layout'
import { getSettings } from '@/lib/sanity/queries'
import { getClient, filterDataToSingleItem } from '@/lib/sanity'

import App from 'next/app'
function CustomApp({ Component, pageProps, settings }) {
  const {page} = pageProps 
  return (
  <Layout {...{hero: page?.hero, settings, page}}>
    <Component {...pageProps} />
  </Layout>
  )
}

export default CustomApp

CustomApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const { preview } = appProps
  const query = getSettings
  const data = await getClient(preview).fetch(query);
  return { ...appProps, settings: data }

} 