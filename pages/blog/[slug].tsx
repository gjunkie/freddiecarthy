import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import CaesarCipher from  '../../components/blog/CaesarCipher'
import PlayfairCipher from  '../../components/blog/PlayfairCipher'
import PlayfairExample from  '../../components/blog/PlayfairExample'
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import matter from "gray-matter"
import { format, parseISO } from 'date-fns'

import { getAllPostSlugs, getPostdata } from '../../lib/posts';
import { BlogPost } from '../../components/BlogPost';
import { CodeBlock } from '../../components/CodeBlock';
import { RandomHighlight } from '../../components/RandomHighlight';

type PostProps = {
  source: {
    compiledSource: string,
    renderedOutput: string,
    scope: object,
  },
  meta: {
    author: string,
    date: string,
    excerpt: string,
    image: string,
    attribution: string,
    attributionLink: string,
    slug: string,
    title: string,
  },
}

const components = { CaesarCipher, CodeBlock, Link, PlayfairCipher, PlayfairExample, RandomHighlight }

// export default function Post({ source, meta }) {
const Home: React.FC<PostProps> = ({source, meta}) => {
  const content = hydrate(source, { components });

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://freddiecarthy.com/blog/${meta.slug}`} />
        <meta name="description" content={meta.excerpt} />
        <title>{meta.title}</title>
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:title" content={meta.title} key="twtitle" />
        <meta name="twitter:description" content={meta.excerpt} key="twtitle" />
        <meta name="twitter:creator" content="@freddiecarthy" key="twhandle" />
        <meta name="twitter:image" content={`https://freddiecarthy.com/blog-images/${meta.image}.jpg`} key="twimage" />

        {/* Open Graph */}
        <meta property="og:url" content={`https://freddiecarthy.com/blog/${meta.slug}`} key="ogurl" />
        <meta property="og:image" content={`https://freddiecarthy.com/blog-images/${meta.image}.jpg`} key="ogimage" />
        <meta property="og:site_name" content="Freddie Carthy - Blog" key="ogsitename" />
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta property="og:description" content={meta.excerpt} key="ogdesc" />
      </Head>

      <main>
        <BlogPost
          content={content}
          date={meta.date}
          image={meta.image}
          imageAttribution={meta.attribution}
          imageLink={meta.attributionLink}
          title={meta.title} />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postContent = await getPostdata(params.slug);
  const { data, content } = matter(postContent);

  const meta = {
    ...data,
    date: format(parseISO(data.date), 'MMM dd, yyyy'),
    image: data.image,
    slug: params.slug,
  }

  const mdxSource = await renderToString(content, { components })

  return {
    props: {
      source: mdxSource,
      meta,
    }
  }
}

export default Home;
