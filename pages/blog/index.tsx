import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getSortedPosts } from '../../lib/posts'
import styles from '../../styles/blog.module.css'

type HomeProps = {
  allPostsData: {
    description: string
    slug: string,
    tags: string,
    title: string,
  }[],
};

const BlogIndex = (props: HomeProps) => { 
  const { allPostsData } = props

  return (
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
        <meta name="twitter:image" content="https://freddiecarthy.com/social-cards/blog.jpg" key="twimage" />

        {/* Open Graph */}
        <meta property="og:url" content="https://freddiecarthy.com/blog/" key="ogurl" />
        <meta property="og:image" content="https://freddiecarthy.com/social-cards/blog.jpg" key="ogimage" />
        <meta property="og:site_name" content="Freddie Carthy" key="ogsitename" />
        <meta property="og:title" content="Freddie Carthy's Blog" key="ogtitle" />
        <meta property="og:description" content="Writes about career development, tech, and more!" key="ogdesc" />
      </Head>
      <main>
        <h1>The Blog</h1>
        <h3 className={styles.subheader}>These are the things I've been writing</h3>

        <ul className={styles.articleList}>
          {allPostsData.map(({ slug, tags, title, description }) => {
            const splitTags = tags.split(' ')

            return (
              <li className={styles.article} key={slug}>
                <h4 className={styles.articleTitle}>{title}</h4>
                <p className={styles.excerpt}>{description}</p>
                <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>Read</Link>
              </li>
            )
          })}
        </ul>
      </main>
    </>
  );
}

export default BlogIndex;

export async function getStaticProps() {
  const allPostsData = getSortedPosts('blog');
  return {
    props: {
      allPostsData,
    },
  };
};
