import * as React from 'react';
import Head from 'next/head'
import Link from 'next/link';
import { getSortedPosts } from '../../lib/posts';

import {
  Article,
  ArticleList,
  ArticleTitle,
  Excerpt,
  Main,
  PageTitle,
} from '../../styles/blogIndex';

type HomeProps = {
  allPostsData: {
    description: string
    slug: string,
    title: string,
  }[],
};

const BlogIndex: React.FC<HomeProps> = ({allPostsData}) => (
  <>
    <Head>
      <link rel="canonical" href="https://freddiecarthy.com/blog/" />
      <meta name="description" content="Writes about career development, tech, and more!" />
      <title>Freddie Carthy's Blog</title>
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      <meta name="twitter:title" content="Freddie Carthy's Blog" key="twtitle" />
      <meta name="twitter:description" content="Writes about career development, tech, and more!" key="twtitle" />
      <meta name="twitter:creator" content="@freddiecarthy" key="twhandle" />
      <meta name="twitter:image" content="https://freddiecarthy.com/social-images/blog-image.jpg" key="twimage" />

      {/* Open Graph */}
      <meta property="og:url" content="https://freddiecarthy.com/blog/" key="ogurl" />
      <meta property="og:image" content="https://freddiecarthy.com/social-cards/blog-image.jpg" key="ogimage" />
      <meta property="og:site_name" content="Freddie Carthy" key="ogsitename" />
      <meta property="og:title" content="Freddie Carthy's Blog" key="ogtitle" />
      <meta property="og:description" content="Writes about career development, tech, and more!" key="ogdesc" />
    </Head>
    <Main>
      <PageTitle>Freddie&apos;s Blog</PageTitle>

      <ArticleList>
        {allPostsData.map(({ slug, title, description }) => (
          <Article key={slug}>
            <ArticleTitle><Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>{title}</Link></ArticleTitle>
            <Excerpt>{description}</Excerpt>
            <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>Read article</Link>
          </Article>
        ))}
      </ArticleList>
    </Main>
  </>
);

export default BlogIndex;

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
};
