import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body class="bg-gradient-to-b from-pink-900 to-orange-500 sm:h-screen bg-fixed">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
