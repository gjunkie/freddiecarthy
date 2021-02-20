import * as React from 'react'
import { PageTitle } from '../PageTitle'
import { useTheme } from '../../contexts/ThemeContext'
import { TweetCTA } from '../TweetCTA'

import styles from './BlogPost.module.css'

const avgWordsPerMin = 250;

const getWordCount = (text: string) => text.match(/\w+/g).length

type BlogPostProps = {
  content: object,
  image: string,
  imageAttribution: string,
  imageLink: string,
  title: string,
}

export const BlogPost: React.FC<BlogPostProps> = ({
  content,
  image,
  imageAttribution,
  imageLink,
  title,
}) => {
  const theme = useTheme()
  const articleRef = React.useRef<HTMLDivElement>(null)
  const [readingTime, setReadingTime] = React.useState(0)

  React.useEffect(() => {
    if (!articleRef.current) {
      return
    }

    const count = getWordCount(articleRef.current.innerText)
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
