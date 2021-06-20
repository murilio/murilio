import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

// import getIP from '@/src/utils/getIP'
import { connectToDatabase } from '@/src/config/mongodb'

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
  const { db, client } = await connectToDatabase()

  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark().use(html).process(matterResult.content)

  const contentHtml = processedContent.toString()

  // possível melhoria abstrair essa lógica em um arquivo separado
  // const ip = await getIP()

  // let views = 0
  // if (client.isConnected()) {
  //   const pageAccessIp = await db
  //     .collection('access')
  //     .findOne({ ip })

  //   const pageViewById = await db
  //     .collection('views')
  //     .findOne({ slug: id })

  //   if (!pageAccessIp) {
  //     await db.collection('access').insertOne({ ip })

  //     if (pageViewById) {
  //       views = pageViewById.views + 1
  //       await db.collection('views').updateOne({ slug: id }, { $set: { views } })
  //     } else {
  //       views = 1
  //       await db.collection('views').insertOne({ slug: id, views })
  //     }
  //   } else {
  //     if (pageViewById) {
  //       views = pageViewById.views
  //     } else {
  //       views = 1
  //       await db.collection('views').insertOne({ slug: id, views })
  //     }
  //   }
  // }

  let views = 0
  if (client.isConnected()) {
    const pageViewBySlug = await db.collection('views').findOne({ slug: id })

    if (pageViewBySlug) {
      views = pageViewBySlug.views + 1
      await db.collection('views').updateOne({ slug: id }, { $set: { views } })
    } else {
      views = 1
      await db.collection('views').insertOne({ slug: id, views })
    }
  }

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    description: matterResult.data.description,
    category: matterResult.data.category,
    date: matterResult.data.date,
    thumbnail: matterResult.data.thumbnail,
    views
  }
}
