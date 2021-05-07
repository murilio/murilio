import Link from 'next/link'

import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'

import Layout from '../components/Layout'
import Header from '../components/Header'

type Post = {
  id: string
  date: string
  title: string
}

type Posts = {
  posts: Post[]
}

export default function About ({ posts }: Posts) {
  return (
    <Layout>
      <Header
        title="Todos os artigos"
        subtile="Artigos"
        description="Aqui tento escrever sobre meus processos, tecnologias e o que der na telha."
        img="/murilio.png"
      />
      <ul>
        {posts.map(({ id, date, title }, index: number) => (
          <li key={index}>
            <Link href={`/post/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <span>
              {date}
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

// gera o HTML estático da página
export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData()
  return {
    props: {
      posts
    },
    revalidate: 60 * 60 * 24
  }
}
