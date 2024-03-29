import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'

// procurando o caminho do arquivo dos posts
const postsDirectory = path.join(process.cwd(), 'src/posts')

// ordenando os posts pela data
export function getSortedPostsData (id?: number) {
  // passando o caminho dos posts
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      date: matterResult.data.date,
      ...matterResult.data
    }
  })

  // ordenando os posts pela data e fazendo um slice para pegar uma quantidade determinada de posts
  return allPostsData
    .sort((a, b) => a.date < b.date ? 1 : -1)
    .slice(0, id)
}

export function getLastPostData () {}

// pegando os posts pelo ID
// export function getAllPostIds () {
//   const fileNames = fs.readdirSync(postsDirectory)

//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, '')
//       }
//     }
//   })
// }

// pegando um post pelo ID
export async function getPostData (id: string) {

  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark().use(html).process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    description: matterResult.data.description,
    category: matterResult.data.category,
    date: matterResult.data.date,
    thumbnail: matterResult.data.thumbnail,
  }
}
