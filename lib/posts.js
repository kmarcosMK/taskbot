import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

export function getSortedPostsMeta(){
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      slug,
      ...(matterResult.data)
    }
  })
  return allPostsData.sort((a,b)=> new Date(b.date)-new Date(a.date))
}

export async function getPostBySlug(slug){
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processed = await remark().use(html).process(matterResult.content)
  const contentHtml = processed.toString()
  return {
    slug,
    contentHtml,
    ...(matterResult.data)
  }
}
