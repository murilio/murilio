import Link from 'next/link'
import { GetStaticProps } from 'next'

import { getSortedPostsData } from '../lib/posts'
import { convertDateToPtBR } from '../lib/convertDateToPtBR'

// components
import Layout from '../components/Layout'

import Header from '../components/Header'
import Information from '../components/Information'
import Articles from '../components/Articles'

type Post = {
  id: string
  date: string
  title: string,
  thumbnail: string
}

type Posts = {
  posts: Post[]
}

export default function Home ({ posts }: Posts) {
  return (
    <Layout>
      <Header
        title="Sou, Murilio Um Desenvolvedor Fullstack"
        subtile="Olá, bem-vindo"
        description="Hi, sou Murilio não Murilo, sou apaixonado por desenvolvimento tanto frontend como backend. Estou bastante focado na stack de JavaScript, pois acredito em todo o seu potencial e claramente sou um entusiasta da tecnologia."
        img="/murilio.png"
      />
      <Information />
      <Articles>
        {posts.slice(0, 3).map(({ id, date, title, thumbnail }, index: number) => (
          <Link href={`/post/${id}`} key={index}>
            <a className="articleCard">
              <img src={thumbnail} alt={title} />
              <div className="content">
                <p>{date}</p>
                <h2>{title}</h2>
              </div>
            </a>
          </Link>
        ))}
      </Articles>
    </Layout>
  )
}

// gera o HTML estático da página
export const getStaticProps: GetStaticProps = async () => {
  const data = getSortedPostsData()

  const posts = data.map((post: Post) => {
    return {
      id: post.id,
      date: convertDateToPtBR(post.date),
      title: post.title,
      thumbnail: post.thumbnail
    }
  })

  return {
    props: {
      posts
    },
    revalidate: 60 * 60 * 24
  }
}
