import * as React from 'react'
import PropTypes from 'prop-types'
import Link from "next/link"
import { PageTitle } from '../PageTitle'
import { useTheme } from '../../contexts/ThemeContext'

import styles from './BlogPost.module.css'

const avgWordsPerMin = 250;

const getWordCount = (elem) => {
  return elem.innerText.match(/\w+/g).length;
}

export const BlogPost = ({
  content,
  date,
  image,
  title,
}) => {
  const theme = useTheme()
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
    <>
      <Link href="/blog">Back</Link>
      <article className={`${styles.blogPost} ${styles[theme]}`} ref={articleRef}>
        <PageTitle title={title} />
        <div>
          <date className={styles.date}>{date}</date> - <span className={styles.readingTime}>{readingTime} min read</span>
        </div>
        <img src={`/blog-images/${image}`} alt="" loading="lazy" />
        <div>{content}</div>
      </article>
    </>
  )
}

BlogPost.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
