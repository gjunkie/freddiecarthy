import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import ReactGA from 'react-ga';

const trackingId = "UA-184799671-1";
ReactGA.initialize(trackingId);
// ReactGA.set({
//   userId: auth.currentUserId(),
//   // any data that is relevant to the user session
//   // that you would like to track with google analytics
// })

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
          <meta name="theme-color" content="#ffffff" />
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
