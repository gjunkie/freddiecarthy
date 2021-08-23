import * as React from 'react';
import Link from 'next/link';
import { getSortedPosts } from '../../lib/posts';

import {
  Article,
  ArticleList,
  ArticleTitle,
  Excerpt,
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
  <main>
    <PageTitle>Freddie&apos;s Blog</PageTitle>

    <ArticleList>
      {allPostsData.map(({ slug, title, description }) => (
        <Article key={slug}>
          <ArticleTitle><Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>{title}</Link></ArticleTitle>
          <Excerpt>{description}</Excerpt>
        </Article>
      ))}
    </ArticleList>
  </main>
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
