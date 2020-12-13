import * as React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import matter from "gray-matter"
import { format, parseISO } from 'date-fns'

import { getAllPostSlugs, getPostdata } from "../../lib/posts"
import { BlogPost } from '../../components/BlogPost'

export default function Post({ source, meta }) {
  const content = hydrate(source);

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
        <meta name="twitter:image" content={`https://freddiecarthy.com/blog-images/${meta.image}`} key="twimage" />

        {/* Open Graph */}
        <meta property="og:url" content={`https://freddiecarthy.com/blog/${meta.slug}`} key="ogurl" />
        <meta property="og:image" content={`https://freddiecarthy.com/blog-images/${meta.image}`} key="ogimage" />
        <meta property="og:site_name" content="Freddie Carthy Blog" key="ogsitename" />
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta property="og:description" content={meta.excerpt} key="ogdesc" />
      </Head>
      <main>
        <BlogPost
          content={content}
          date={meta.date}
          image={meta.image}
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

  const mdxSource = await renderToString(content)

  return {
    props: {
      source: mdxSource,
      meta,
    }
  }
}

Post.propTypes = {
  source: PropTypes.shape({
    compiledSource: PropTypes.string.isRequired,
    renderedOutput: PropTypes.string.isRequired,
    scope: PropTypes.object.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}
