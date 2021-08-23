import * as React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPosts } from '../lib/posts';
import { generateRSSFeed } from '../lib/rss';

import {
  ArrowOne,
  ArrowTwo,
  ArrowThree,
  CopyGroup,
  Header,
  HighlighOne,
  HighlighTwo,
  HighlighThree,
  HighlighFour,
  HighlighFive,
  HighlighSix,
  HighlighSeven,
  Main,
  Paragraph,
  ParagraphContainer,
  Subheader,
  Square,
  SquareList
} from '../styles/homeStyles';

type HomeProps = {
  allPostsData: {
    description: string
    slug: string,
    title: string,
  }[],
};

const Home: React.FC<HomeProps> = () => (
  <>
    <Head>
      <meta name="description" content="Freddie Carthy is a Software Engineer living in the Pacific Northwest" />
      <title>Freddie Carthy - Software Engineer</title>
    </Head>

    <Main>
      <Header>
        <h1>
          <div>Hey there 👋</div>
          <div>I&#39;m Freddie Carthy</div>
        </h1>
        <Subheader>
          I’m a software engineer living in the Pacific Northwest and I have a passion for helping others.
        </Subheader>
      </Header>

      <CopyGroup>

        <ParagraphContainer>
          <Paragraph>I've been working as a Software Engineer since 2010. I'm currently working as a <HighlighOne>Senior Software Engineer @Twitter</HighlighOne>. Previously I've worked at Discovery Networks, Nike, and Opal Labs.</Paragraph>

          <ArrowOne>
            <svg width="407" height="317" viewBox="0 0 407 317" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="arrow-one-tail-1" d="M2 298C5.99733 295.71 13.6784 293.618 16 290" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path className="arrow-one-tail-2" d="M2 300C4.48622 302.735 8 306.357 8 310" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path className="arrow-one" d="M3.1676 298.941C164.668 280.941 163.794 360.542 323 274C482.206 187.458 279.5 57 303 151.5C326.5 246 526.335 26.7024 291.167 2" stroke="white" stroke-width="3"/>
            </svg>
          </ArrowOne>
        </ParagraphContainer>

        <ParagraphContainer>
          <ArrowTwo>
            <svg width="413" height="322" viewBox="0 0 413 322" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="arrow-two" d="M124.5 0.999939C127.03 91.1068 194 -11.5 197.5 113.5C200.999 238.5 29.5001 171.526 6.49999 232.526C-16.5001 293.526 59.4369 357.782 154.5 293.526C586.5 1.52625 74.4626 94.3258 411 192.5" stroke="white" stroke-width="3"/>
            <path className="arrow-two-tail-1" d="M404.816 177.941C406.232 182.268 407.71 186.624 409.14 190.914" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path className="arrow-two-tail-2" d="M398.762 199.562C402.773 197.476 406.593 194.069 410.87 192.643" stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </ArrowTwo>

          <Paragraph>Before that I was on my way to be a <HighlighTwo>firefighter</HighlighTwo>. Fast forward a couple of years, and countless hours learning <HighlighThree>frontend development</HighlighThree>, and I landed my first job at a start up.</Paragraph>

        </ParagraphContainer>

        <ParagraphContainer>
          <ArrowThree>
            <svg width="399" height="202" viewBox="0 0 399 202" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="arrow-three" d="M254 2C429.923 121.517 415.5 2.00001 360 2C304.5 1.99999 351.556 32.335 321.5 80.4999C291.444 128.665 392.951 250.762 188 176.03C-16.9517 101.298 30.5 135.456 8 164.964" stroke="white" stroke-width="3"/>
            <path className="arrow-three-tail-1" d="M8.06931 165.697C4.97688 162.511 3.72777 158.573 1.83252 154.783" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path className="arrow-three-tail-2" d="M8.06934 164.918C12.9538 164.918 16.2361 164.794 20.5429 163.358" stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </ArrowThree>

          <Paragraph>
            <div>Connect with me on <HighlighFour><a href="https://twitter.com/freddiecarthy" target="_blank">Twitter</a></HighlighFour> and <HighlighFive><a href="https://www.polywork.com/fcarthy" target="_blank">Polywork</a></HighlighFive>!</div>
            <div>You can also reach me at <a href="mailto:contact@freddiecarthy.com">contact@freddiecarthy.com</a></div>
          </Paragraph>
        </ParagraphContainer>
      </CopyGroup>

      <SquareList>
        <Square>
          <h3>Office Hours</h3>
          <p>One of my absolute favorite things to do is help others grow. If you’re looking for career advice, code reviews, interview prep help, or anything of the sort feel free to book some time with me during my <HighlighSix><a href="https://calendly.com/freddiecarthy" target="_blank">Office Hours</a></HighlighSix>.</p>
        </Square>
        <Square>
          <h3>Kit</h3>
          <p>I take pride in my workspace and my software development tools. I’m a Vim addict and love to tinker with my setup to get it just right. <HighlighSeven><Link href="/how-i-work">Take a peek at how I work</Link></HighlighSeven>!</p>
        </Square>
      </SquareList>
    </Main>
  </>
);

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const articles = getSortedPosts();
  // articles.sort((a, b) => (a.date < b.date ? 1 : -1));

  generateRSSFeed(articles);

  return {
    props: {
      allPostsData: articles,
    },
  };
}
