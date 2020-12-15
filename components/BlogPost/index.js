import * as React from 'react'
import PropTypes from 'prop-types'
import { PageTitle } from '../PageTitle'
import { useTheme } from '../../contexts/ThemeContext'
import { TweetCTA } from '../TweetCTA'

import styles from './BlogPost.module.css'

const avgWordsPerMin = 250;

const getWordCount = (elem) => {
  return elem.innerText.match(/\w+/g).length;
}

export const BlogPost = ({
  content,
  image,
  imageAttribution,
  imageLink,
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
      <article className={`${styles.blogPost} ${styles[theme]}`} ref={articleRef}>
        <PageTitle title={title} />
        <div>
          <span className={styles.readingTime}>{readingTime} min read</span>
        </div>
        <img src={`/blog-images/${image}.jpg`} alt="" loading="lazy" />
        <small><a href={imageLink} target="_blank" rel="noreferrer">{imageAttribution}</a></small>
        <div>{content}</div>
        <div className={styles.divider}>...</div>
        <TweetCTA title={title} />
      </article>
    </>
  )
}

BlogPost.propTypes = {
  content: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  imageAttribution: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
