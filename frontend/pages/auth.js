
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Auth from '@/components/Layout/Auth'

export default function AuthPage() {
  return (
    <Layout>
      <Head>
        <title>Auth - Ndimboni Digital Platform</title>
        <meta name="description" content="Register And Login to Ndimboni" />
      </Head>
      <Auth/>
    </Layout>
  )
}