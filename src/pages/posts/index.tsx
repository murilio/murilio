import Link from 'next/link'

import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../../lib/posts'
import { convertStringToSlug } from '../../lib/convertStringToSlug'

import Layout from '../../components/Layout'
import Header from '../../components/Header'

type Post = {
  id: string
  date: string
  category: string
  title: string
  description: string
  thumbnail: string
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
        breadcrumbs={true}
      />
      <section>
        {posts.map(({ id, date, category, title, description, thumbnail }, index: number) => (
          <div key={index}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <span>
              {date}
              <p>category: <span className={convertStringToSlug(category)}>{category}</span></p>
              {description}
              <img src={thumbnail} alt="" width="100" />
            </span>
          </div>
        ))}
      </section>
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
