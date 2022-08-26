import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { format, parseISO } from 'date-fns'

//Finding directory named "posts" from the current working directory of Node.
const postDirectory = path.join(process.cwd(), 'data', 'blog')
const root = process.cwd()

export const getSortedPosts = (dataType: string, tag?: string) => {
  //Reads all the files in the post directory
  const files = fs.readdirSync(path.join(root, 'data', dataType))

  const allPostsData = files.reduce((allPosts, postSlug) => {
    const slug = postSlug.replace(".mdx", "")
    const fullPath = path.join(postDirectory, postSlug);

    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(path.join(root, 'data', dataType, postSlug), 'utf8')
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
      return 1;
    } else {
      return -1;
    }
  })
}

  //Get Slugs
export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postDirectory);

  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".mdx", "")
      }
    }
  })
}

//Get Post based on Slug
export const getPostdata = async (slug: string) => {
  const fullPath = path.join(postDirectory, `${slug}.mdx`)
  const postContent = fs.readFileSync(fullPath, "utf8")

  return postContent
}

async function collateTags(dataType: string) {
  const files = fs.readdirSync(path.join(root, 'data', dataType))
  let allTags = new Set<string>() // to ensure only unique tags are added

  files.map((postSlug) => {
    const source = fs.readFileSync(path.join(root, 'data', dataType, postSlug), 'utf8')
    const { data } = matter(source)

    data.tags && data.tags.split(' ').forEach((tag: string) => allTags.add(tag))
  })

  return Array.from(allTags)
}

export type TagOptions = {
  [key: string]: string[],
}

export async function getTags(dataType: string) {
  const tags: TagOptions = {
    blog: await collateTags('blog'),
		// books: await collateTags('books'),
  }
  return tags[dataType]
}
