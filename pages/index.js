import Head from 'next/head'
import Seo from '@/components/SEO'
import { getFrontpage } from '@/lib/sanity/queries';
import { getClient } from '@/lib/sanity';
import Hero from '@/components/Layout/Hero';
import { filterDataToSingleItem } from '@/lib/sanity';
// 
export default function Home(props) {
  const {page} = props
  const {
    title,
    seo
  } = page || {}
  console.log({props})
  return (
    <div className={''}>
      <Seo {...{seo, title}} />
      <Hero {...{title}} />
    </div>
  )
}


export async function getStaticProps(props) {
  const { preview, locale } = props
  const queryParams = {
    locale: locale || 'da'
  }
  const data = await getClient(preview).fetch(getFrontpage, queryParams)
  const page = await filterDataToSingleItem(data)
  
  return {
    props: {
      page: page || {},
    }
  }
}