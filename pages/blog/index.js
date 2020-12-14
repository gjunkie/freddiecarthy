import * as React from 'react'
import Link from "next/link"
import PropTypes from 'prop-types'
import { getSortedPosts } from "../../lib/posts"

import styles from './BlogIndex.module.css'

const BlogIndex = ({ allPostsData }) => {
  return (
    <main className={styles.blogIndex}>
      <ul>
        {allPostsData.map(({ slug, title, description }) => (
          <li key={slug}>
            <h3><Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>{title}</Link></h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogIndex

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}

BlogIndex.propTypes = {
  allPostsData: PropTypes.array,
}
