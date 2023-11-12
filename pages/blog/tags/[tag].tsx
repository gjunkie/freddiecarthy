import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../../../styles/blog.module.css'

import { getSortedPosts, getTags } from '../../../lib/posts'
import { GetStaticPropsContext } from 'next'
import { BlogPostProps } from '../../../components/BlogTag'

type PostProps = {
  posts: Array<BlogPostProps>
  tag: string
}

const PostPage = (props: PostProps) => {
  const { posts, tag } = props

  return (
    <>
      <Head>
        <link rel="canonical" href="https://freddiecarthy.com/blog/" />
        <meta
          name="description"
          content="Writes about career development, tech, and more!"
        />
        <title>Freddie Carthy's Blog</title>
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta
          name="twitter:title"
          content="Freddie Carthy's Blog"
          key="twtitle"
        />
        <meta
          name="twitter:description"
          content="Writes about career development, tech, and more!"
          key="twtitle"
        />
        <meta name="twitter:creator" content="@freddiecarthy" key="twhandle" />
        <meta
          name="twitter:image"
          content="https://freddiecarthy.com/social-cards/blog.jpg"
          key="twimage"
        />

        {/* Open Graph */}
        <meta
          property="og:url"
          content="https://freddiecarthy.com/blog/"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://freddiecarthy.com/social-cards/blog.jpg"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="Freddie Carthy"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Freddie Carthy's Blog"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Writes about career development, tech, and more!"
          key="ogdesc"
        />
      </Head>

      <main>
        <h1>Tag: {tag}</h1>

        <ul className={styles.articleList}>
          {posts.map(({ slug, title, description }) => (
            <li className={styles.article} key={slug}>
              <h4 className={styles.articleTitle}>{title}</h4>
              <p className={styles.excerpt}>{description}</p>
              <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
                Read article
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const tag = params?.tag

  if (!tag || typeof tag !== 'string') {
    return {
      notFound: true, // This will render a 404 page
    }
  }

  const posts = await getSortedPosts('blog', params.tag)

  return {
    props: {
      posts,
      title: `Blog Posts - ${params.tag}`,
      description: `Posts on software engineering for tag ${params.tag}`,
      tag: params.tag,
    },
  }
}

export async function getStaticPaths() {
  const tags = await getTags('blog')

  const paths = tags.map((tag: string) => ({
    params: {
      tag,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
export default PostPage
