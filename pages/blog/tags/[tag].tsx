import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { getSortedPosts, getTags } from '../../../lib/posts';

import {
  Main,
  PageTitle,
} from '../../../styles/globalStyledComponents';

import {
  Article,
  ArticleList,
  ArticleTitle,
  Excerpt
} from '../../../styles/blogIndex';

type PostProps = {
  posts: Array<any>,
  tag: string,
}

const PostPage = (props: PostProps) => {
  const { posts, tag } = props;

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

      <Main>
        <PageTitle>Tag: {tag}</PageTitle>

        <ArticleList>
          {posts.map(post => (
            <Article key={post.slug}>
              <ArticleTitle>{post.title}</ArticleTitle>
              <Excerpt>{post.description}</Excerpt>
              <Link key={post.slug} href="/blog/[slug]" as={`/blog/${post.slug}`}>Read article</Link>
            </Article>
          ))}
        </ArticleList>
      </Main>
    </>
  )
}

export async function getStaticProps({ params }: any) {
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
export default PostPage;
