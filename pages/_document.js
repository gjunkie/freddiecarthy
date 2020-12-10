import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Freddie Carthy is a Software Engineer living in the Pacific Northwest" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link
            rel="preload"
            href="/fonts/Larsseit.woff2"
            as="font"
            crossOrigin="" />
          <link
            rel="preload"
            href="/fonts/Larsseit-Bold.woff2"
            as="font"
            crossOrigin="" />
          <link
            rel="preload"
            href="/fonts/Larsseit-Light.woff2"
            as="font"
            crossOrigin="" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/favicons/android-chrome-192x192.png" />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/favicons/android-chrome-192x192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
