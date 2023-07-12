import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/themes/prism-tomorrow.min.css"/>
      </Head>
      <body className="bg-fixed bg-gray-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}