import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import About from '@/components/Layout/About'

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About - Ndimboni Digital Platform</title>
        <meta name="description" content="Learn more about Ndimboni - Digital Scam Protection Platform" />
      </Head>
      <About />
    </Layout>
  )
}