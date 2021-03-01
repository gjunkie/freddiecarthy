import * as React from 'react'
import { PageTitle } from '../PageTitle'
import { useTheme } from '../../contexts/ThemeContext'
import { TweetCTA } from '../TweetCTA'

import {
  Article,
  HeadingStyles,
  HeroImage,
  DividerStyles,
  ReadingTimeStyles,
} from './styles'

const avgWordsPerMin = 250;

const getWordCount = (text: string) => (text.match(/\w+/g) || '').length

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
    <Article ref={articleRef}>
      <PageTitle title={title} />

      <ReadingTimeStyles theme={theme}>
        <span>{readingTime} min read</span>
      </ReadingTimeStyles>

      <HeroImage src={`/blog-images/${image}.jpg`} alt="" />

      <small><a href={imageLink} target="_blank" rel="noreferrer">{imageAttribution}</a></small>

      <div>{content}</div>

      <DividerStyles>...</DividerStyles>

      <TweetCTA title={title} />
    </Article>
  )
}
