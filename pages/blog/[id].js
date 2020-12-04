import * as React from 'react'
import PropTypes from 'prop-types'
import fire from '../../config/fire-config'
import { BlogPost } from '../../components/BlogPost'
// import { BlogPostPlaceholder } from '../../components/BlogPostPlaceholder'

const Blog = ({
  content,
  title,
}) => {
  return (
    <BlogPost title={title} content={content} />
  )
}

export const getServerSideProps = async ({ query }) => {
  const blogObj = {};
  await fire.firestore()
    .collection('blog')
    .doc(query.id)
    .get()
    .then(result => {
      blogObj['title'] = result.data().title
      blogObj['content'] = result.data().content
    });
  return {
    props: {
      title: blogObj.title,
      content: blogObj.content,
    }
  }
}

Blog.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Blog
