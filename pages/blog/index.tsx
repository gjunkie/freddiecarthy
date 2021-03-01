import * as React from 'react'
import Link from "next/link"
import { getSortedPosts } from "../../lib/posts"

import { HeadingStyles } from '../../styles/blogIndexStyles'

type HomeProps = {
  allPostsData: {
    description: string
    slug: string,
    title: string,
  }[],
}

const BlogIndex: React.FC<HomeProps> = ({allPostsData}) => (
  <main>
    <ul>
      {allPostsData.map(({ slug, title, description }) => (
        <li key={slug}>
          <HeadingStyles><Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>{title}</Link></HeadingStyles>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  </main>
)

export default BlogIndex

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
