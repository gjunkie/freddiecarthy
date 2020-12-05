import * as React from 'react'
import PropTypes from 'prop-types'

export const BlogPost = ({
  content,
  title,
}) => (
  <article>
    <h2>{title}</h2>
    <div>{content}</div>
  </article>
)

BlogPost.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
