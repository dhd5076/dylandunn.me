import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body class="bg-gradient-to-b from-pink-500 to-purple-500 via-blue-500 w-full sm:h-screen bg-fixed -pb-8">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
