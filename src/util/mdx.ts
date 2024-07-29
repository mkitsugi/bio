import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'src/content/projects')

export type ProjectData = {
  slug: string;
  content: string;
  title: string;
  description: string;
  date?: string;
  published: boolean;
  url?: string;
  repository?: string;
}

export function getProjectData(slug: string): ProjectData {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    title: data.title,
    description: data.description,
    date: data.date,
    published: data.published ?? false, // デフォルトはfalse
    url: data.url,
    repository: data.repository,
  }
}

export function getAllProjectSlugs() {
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames.map(fileName => fileName.replace(/\.mdx$/, ''))
}

export function getAllProjects(): ProjectData[] {
  const slugs = getAllProjectSlugs()
  return slugs.map(slug => getProjectData(slug))
}