import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags for SEO */}
        <meta charSet="utf-8" />
        <meta name="description" content="Ndimboni- Modern Web Application" />
        <meta name="keywords" content="Ndimboni, web development, next.js, react" />
        <meta name="author" content="Your Name" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Open Graph tags for social media */}
        <meta property="og:title" content="Ndimboni" />
        <meta property="og:description" content="Modern Web Application built with Next.js" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ndimboni" />
        <meta name="twitter:description" content="Modern Web Application built with Next.js" />
        <meta name="twitter:image" content="/twitter-image.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#2980B9" />
        <meta name="msapplication-TileColor" content="#2980B9" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}