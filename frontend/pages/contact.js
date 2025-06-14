import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Contact from '@/components/Layout/Contact'

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact - Ndimboni Digital Platform</title>
        <meta name="description" content="Contact Ndimboni " />
      </Head>
      <Contact />
    </Layout>
  )
}