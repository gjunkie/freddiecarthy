import * as React from 'react'
import PropTypes from 'prop-types'
import { PageTitle } from '../PageTitle'

import styles from './BlogPost.module.css'

const avgWordsPerMin = 250;

const getWordCount = (elem) => {
  return elem.innerText.match(/\w+/g).length;
}

export const BlogPost = ({
  content,
  date,
  title,
}) => {
  const articleRef = React.useRef(null)
  const [readingTime, setReadingTime] = React.useState()

  React.useEffect(() => {
    if (!articleRef.current) {
      return
    }

    const count = getWordCount(articleRef.current);
    setReadingTime(Math.ceil(count / avgWordsPerMin))
  }, [articleRef])


  return (
    <article className={styles.blogPost} ref={articleRef}>
      <PageTitle title={title} />
      <div className={styles.meta}>
        <date>{date}</date> - <span>{readingTime} min read</span>
      </div>
      <div>{content}</div>
    </article>
  )
}

BlogPost.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
