
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import {
  Main,
  PageTitle,
  Subheader
} from '../styles/kit';


const Kit: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://freddiecarthy.com/how-i-work" />
        <meta name="description" content="Freddie Carthy is a Software Engineer living in the Pacific Northwest" />
        <title>Freddie Carthy - Software Engineer</title>
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:title" content="Freddie Carthy - Sofware Engineer" key="twtitle" />
        <meta name="twitter:description" content="The hardware and software I use to get my work done." key="twtitle" />
        <meta name="twitter:creator" content="@freddiecarthy" key="twhandle" />
        <meta name="twitter:image" content="https://freddiecarthy.com/social-images/how-i-work.jpg" key="twimage" />

        {/* Open Graph */}
        <meta property="og:url" content="https://freddiecarthy.com/how-i-work" key="ogurl" />
        <meta property="og:image" content="https://freddiecarthy.com/social-cards/how-i-work.jpg" key="ogimage" />
        <meta property="og:site_name" content="Freddie Carthy" key="ogsitename" />
        <meta property="og:title" content="Freddie Carthy - Software Engineer" key="ogtitle" />
        <meta property="og:description" content="The hardware and software I use to get my work done." key="ogdesc" />
      </Head>
      <Main>
        <PageTitle>How I Work</PageTitle>
        <Subheader>Coming soon...</Subheader>
      </Main>
    </>
  )
};

export default Kit;
