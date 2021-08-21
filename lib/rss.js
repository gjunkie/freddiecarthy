import fs from 'fs';
import Feed from 'feed';

export const generateRSSFeed = (articles) => {
  const baseUrl = 'https://ashleemboyer.com';
  const author = {
    name: 'Freddie Carthy',
    email: 'contact@freddiecarthy.com',
    link: 'https://twitter.com/freddiecarthy',
  };
 
  // Construct a new Feed object
  const feed = new Feed({
    title: 'Articles by Ashlee M Boyer',
    description:
      "You can find me talking about issues surrounding Disability, Accessibility, and Mental Health on Twitter, or you can find me regularly live-knitting or live-coding on Twitch. I'm @AshleeMBoyer on all the platforms I use.",
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
  });
 
  // Add each article to the feed
  articles.forEach((post) => {
    const {
      content,
      fileName,
      meta: { date, description, title },
    } = post;
    const url = `${baseUrl}/${fileName}`;
 
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
