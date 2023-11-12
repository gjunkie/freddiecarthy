import * as React from 'react'
import { connectToDatabase } from '../../lib/mongodb'
import Head from 'next/head'
import Link from 'next/link'
import CaesarCipher from '../../components/blog/CaesarCipher'
import { getPostdata } from '../../lib/posts'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import sha256 from 'crypto-js/sha256'
import { format, parseISO } from 'date-fns'

import { BlogPost } from '../../components/BlogPost'
import { CodeBlock } from '../../components/CodeBlock'
import PlayfairCipher from '../../components/blog/PlayfairCipher'
import PlayfairExample from '../../components/blog/PlayfairExample'
import { RandomHighlight } from '../../components/RandomHighlight'
import { GetServerSidePropsContext } from 'next'

type PostProps = {
  address: string
  source: {
    compiledSource: string
    renderedOutput: string
    scope: object
  }
  likes: {
    totalLikes: number
    userLikes: number
  }
  meta: {
    author: string
    date: string
    excerpt: string
    image: string
    attribution: string
    attributionLink: string
    slug: string
    tags: string
    title: string
  }
}

const components = {
  CaesarCipher,
  CodeBlock,
  Link,
  PlayfairCipher,
  PlayfairExample,
  RandomHighlight,
}

const PostPage = (props: PostProps) => {
  const { likes, meta, source } = props

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://freddiecarthy.com/blog/${meta.slug}`}
        />
        <meta name="description" content={meta.excerpt} />
        <title>{meta.title}</title>
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:title" content={meta.title} key="twtitle" />
        <meta name="twitter:description" content={meta.excerpt} key="twtitle" />
        <meta name="twitter:creator" content="@freddiecarthy" key="twhandle" />
        <meta
          name="twitter:image"
          content={`https://freddiecarthy.com/blog-images/${meta.image}.jpg`}
          key="twimage"
        />

        {/* Open Graph */}
        <meta
          property="og:url"
          content={`https://freddiecarthy.com/blog/${meta.slug}`}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={`https://freddiecarthy.com/blog-images/${meta.image}.jpg`}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="Freddie Carthy - Blog"
          key="ogsitename"
        />
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta property="og:description" content={meta.excerpt} key="ogdesc" />
      </Head>

      <main>
        <BlogPost
          // @ts-expect-error:next-line
          content={<MDXRemote {...source} components={components} />}
          date={meta.date}
          image={meta.image}
          imageAttribution={meta.attribution}
          imageLink={meta.attributionLink}
          likes={likes}
          slug={meta.slug}
          tags={meta.tags}
          title={meta.title}
        />
      </main>
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const ipAddress =
    process.env.NODE_ENV === 'development'
      ? '127.0.0.1'
      : ctx.req.headers['x-forwarded-for']
  // @ts-expect-error:next-line
  const hashedIp = sha256(ipAddress).toString()

  const { db } = await connectToDatabase()

  // create db if it doesn't exist
  if (!db.collection('likes')) {
    await db.createCollection('likes')
  }

  // get all likes for the current article slug
  const result = await db
    .collection('likes')
    .findOne({ slug: ctx.params?.slug })

  const postContent = await getPostdata(ctx.params?.slug)
  const { data, content } = matter(postContent)

  const meta = {
    ...data,
    date: format(parseISO(data.date), 'MMM dd, yyyy'),
    image: data.image,
    slug: ctx.params?.slug,
  }

  const mdxSource = await serialize(content)

  return {
    props: {
      likes: {
        userLikes:
          result !== null && result.userLikes[hashedIp]
            ? result.userLikes[hashedIp]
            : 0,
        totalLikes: result === null ? 0 : result.totalLikes,
      },
      address: ipAddress,
      meta,
      source: mdxSource,
    },
  }
}

export default PostPage
