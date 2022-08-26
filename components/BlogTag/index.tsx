import * as React from 'react'
import { Params } from 'next/dist/next-server/server/router'
// import { getAllPostsWithFrontMatter, getTags } from '@/lib/utils'
import { getSortedPosts, getTags } from '../../lib/posts';

type BlogPostProps = {
  content: React.ReactNode,
  date: string,
  image: string,
  imageAttribution: string,
  imageLink: string,
  title: string,
}

export const BlogTag = (props: BlogPostProps) => {
  const { content, title } = props;
  const articleRef = React.useRef<HTMLDivElement>(null)


  return (
    <article ref={articleRef}>
      <h1>{title}</h1>

      <div>{content}</div>
    </article>
  )
}

export async function getStaticProps({ params }: Params) {
  const posts = await getSortedPosts(params.tag)

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
    fallback: true,
  }
}
