export type BlogPostProps = {
  content: React.ReactNode
  date: string
  description: string
  image: string
  imageAttribution: string
  imageLink: string
  likes: {
    totalLikes: number
    userLikes: number
  }
  slug: string
  tags: string
  title: string
}
// export type BlogPostProps = {
//   content: React.ReactNode
//   date: string
//   image: string
//   imageAttribution: string
//   imageLink: string
//   title: string
// }
