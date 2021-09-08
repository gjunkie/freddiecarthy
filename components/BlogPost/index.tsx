import * as React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { TweetCTA } from '../TweetCTA'

import {
  Article,
  Divider,
  PageTitle,
  ReadingTimeStyles,
} from './styles'

const avgWordsPerMin = 250;

const getWordCount = (text: string) => (text.match(/\w+/g) || '').length

type BlogPostProps = {
  content: object,
  date: string,
  image: string,
  imageAttribution: string,
  imageLink: string,
  title: string,
}

export const BlogPost: React.FC<BlogPostProps> = ({
  content,
  date,
  title,
}) => {
  const theme = useTheme()
  const articleRef = React.useRef<HTMLDivElement>(null)
  const [readingTime, setReadingTime] = React.useState(0)

  React.useEffect(() => {
    if (!articleRef.current) {
      return
    }

    const count: number = getWordCount(articleRef.current.innerText)
    setReadingTime(Math.ceil(count / avgWordsPerMin))
  }, [articleRef])


  return (
    <Article ref={articleRef}>
      <PageTitle>{title}</PageTitle>

      <ReadingTimeStyles theme={theme}>
        <span>Posted on {date}</span> - <span>{readingTime} min read</span>
      </ReadingTimeStyles>

      <div>{content}</div>

      <Divider>...</Divider>

      <TweetCTA title={title} />
    </Article>
  )
}
