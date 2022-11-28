import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { format, parseISO } from 'date-fns'

//Finding directory named "posts" from the current working directory of Node.
const postDirectory = path.join(process.cwd(), 'data', 'blog')
const root = process.cwd()

export const getSortedPosts = (dataType, tag) => {
  //Reads all the files in the post directory
  const files = fs.readdirSync(path.join(root, 'data', dataType))

  const allPostsData = files.reduce((allPosts, postFileName) => {
    const slug = postFileName.replace('.mdx', '')

    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(
      path.join(root, 'data', dataType, postFileName),
      'utf8'
    )
    const { data } = matter(fileContents)
    const date = format(parseISO(data.date), 'MMM dd, yyyy')

    const frontmatter = {
      ...data,
      date,
      description: data.description,
    }

    if (tag) {
      if (data.tags && data.tags.includes(tag)) {
        return [
          {
            ...frontmatter,
            slug,
          },
          ...allPosts,
        ]
      } else {
        return allPosts
      }
    }

    return [
      {
        ...frontmatter,
        slug,
      },
      ...allPosts,
    ]
  }, [])

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })
}

//Get Slugs
export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postDirectory)

  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace('.mdx', ''),
      },
    }
  })
}

//Get Post based on Slug
export const getPostdata = async (slug) => {
  const fullPath = path.join(postDirectory, `${slug}.mdx`)
  const postContent = fs.readFileSync(fullPath, 'utf8')

  return postContent
}

async function collateTags(dataType) {
  const files = fs.readdirSync(path.join(root, 'data', dataType))
  let allTags = new Set() // to ensure only unique tags are added

  files.map((postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', dataType, postSlug),
      'utf8'
    )
    const { data } = matter(source)

    data.tags && data.tags.split(' ').forEach((tag) => allTags.add(tag))
  })

  return Array.from(allTags)
}

// export type TagOptions = {
//   [key: string]: string[],
// }

export async function getTags(dataType) {
  const tags = {
    blog: await collateTags('blog'),
    // books: await collateTags('books'),
  }
  return tags[dataType]
}
