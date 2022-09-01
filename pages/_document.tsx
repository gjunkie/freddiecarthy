import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import ReactGA from 'react-ga';

const trackingId = "UA-184799671-1";
ReactGA.initialize(trackingId);

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/paytone/PaytoneOne.woff"
            as="font"
            crossOrigin="" />
          <link
            rel="preload"
            href="/fonts/paytone/PaytoneOne.svg"
            as="font"
            crossOrigin="" />
          <link
            rel="preload"
            href="/fonts/paytone/PaytoneOne.ttf"
            as="font"
            crossOrigin="" />
          <link
            rel="preload"
            href="/fonts/paytone/PaytoneOne.otf"
            as="font"
            crossOrigin="" />
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
          <link
            rel="alternate"
            type="application/rss+xml" 
            title="RSS Feed for freddiecarthy.com" 
            href="/rss.xml" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-184799671-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-184799671-1', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
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
