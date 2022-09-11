import * as React from 'react'
import { Heart } from '../Heart';
import Link from 'next/link';
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
  content: React.ReactNode,
  date: string,
  image: string,
  imageAttribution: string,
  imageLink: string,
  likes: {
    totalLikes: number,
    userLikes: number,
  },
  slug: string,
  tags: string,
  title: string,
}

export const BlogPost = (props: BlogPostProps) => {
  const { content, date, likes, slug, tags, title } = props;
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

  const splitTags = tags.split(' ')

  return (
    <Article ref={articleRef}>
      <PageTitle>{title}</PageTitle>

      <ReadingTimeStyles theme={theme}>
        <span>Posted on {date}</span> - <span>{readingTime} min read.</span>
      </ReadingTimeStyles>
      <Heart articleSlug={slug} likes={likes} />

      <div>{content}</div>

      {tags && (
        <>
          <ol>
            {splitTags.map(tag => (
              <li key={tag}>
                <Link key={tag} href="tags/[tag]" as={`/blog/tags/${tag}`}>{`#${tag}${splitTags.length > 1 ? ', ' : ''}`}</Link>
              </li>
            ))}
          </ol>
        </>
      )}

      <Divider>...</Divider>

      <TweetCTA title={title} />
    </Article>
  )
}
