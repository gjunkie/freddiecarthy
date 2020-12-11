import * as React from 'react'
import Link from "next/link"
import PropTypes from 'prop-types'
import { getSortedPosts } from "../../lib/posts"

const BlogIndex = ({ allPostsData }) => {
  return (
    <>
      {allPostsData.map(({ slug, date, title, excerpt }) => (
          <li key={slug}>
              <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
                <a>
                  {title}
                </a>
              </Link>

              {excerpt}

              {date}
          </li>
      ))}
    </>
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
