import fs from 'fs';
import { Feed } from 'feed';

export const generateRSSFeed = (articles) => {
  const baseUrl = 'https://freddiecarthy.com';
  const author = {
    name: 'Freddie Carthy',
    email: 'contact@freddiecarthy.com',
    link: 'https://twitter.com/freddiecarthy',
  };
 
  // Construct a new Feed object
  const feed = new Feed({
    title: 'Articles by Freddie Carthy',
    description:
      "I talk about career growth, mentorship, and being a parent while on Twitter. I'm @FreddieCarthy on all the platforms I use.",
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
  });

  console.log({articles})
 
  // Add each article to the feed
  articles.forEach((post) => {
    const {
      content,
      date,
      description,
      slug,
      title,
    } = post;
    const url = `${baseUrl}/blog/${slug}`;
 
    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content,
      author: [author],
      date: new Date(date),
    });
  });
 
  // Write the RSS output to a public file, making it
  // accessible at ashleemboyer.com/rss.xml
  fs.writeFileSync('public/rss.xml', feed.rss2());
};
