import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getSortedPosts } from "../lib/posts"

import {
  Paragraph,
  ListItem,
  HotList,
  Divider
} from '../styles/homeStyles'

type HomeProps = {
  allPostsData: {
    description: string
    slug: string,
    title: string,
  }[],
}

const Home: React.FC<HomeProps> = ({allPostsData}) => (
  <>
    <div>
      <Head>
        <meta name="description" content="Freddie Carthy is a Software Engineer living in the Pacific Northwest" />
        <title>Freddie Carthy - Software Engineer</title>
      </Head>
    </div>

    <main>
      <Paragraph>
        Hi, I&apos;m Freddie. My pronouns are he/him. I&apos;m a human living in the Pacific Northwest with my wife and two amazing kids. I&apos;ve been working as a Software Engineer since 2010. <strong>I&apos;m currently working as a Senior Software Engineer</strong>. Previously I&apos;ve worked at Discovery Networks, Nike, and Opal Labs.
      </Paragraph>

      <Paragraph>
        I went to school at San Francisco State University (go Gators!) where I majored in Television Broadcasting 📺. Before that I was on my way to be a firefighter🧑‍🚒. Fast forward a couple of years, and countless hours learning frontend development, and I landed my first job at a start up in Santa Monica, CA 🧑‍💻.
      </Paragraph>

      <Paragraph>
        I&apos;m a Vim <strike>user</strike> addict. I absolutely love tinkering with it and learning new ways to supercharge my workflow.
      </Paragraph>

      <Paragraph>
        Some hot takes:
      </Paragraph>
      <HotList>
        <ListItem>Learn web fundamentals, not just <code>create-react-app</code> or Webpack configs. 💻</ListItem>
        <ListItem>Assumptions are meant to be challenged, particularly your own. 🧠</ListItem>
        <ListItem>If you put cream and sugar in your coffee you don&apos;t like coffee. ☕️</ListItem>
      </HotList>

      <Divider>...</Divider>

      <h3>Sometimes I like to write...</h3>
      <ul>
        {allPostsData.map(({ slug, title, description }) => (
          <ListItem key={slug}>
            <h4><Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>{title}</Link></h4>
            <p>{description}</p>
          </ListItem>
        ))}
      </ul>

      <Divider>...</Divider>
    </main>
  </>
)
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
