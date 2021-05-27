import Link from 'next/link'
import { GetStaticProps } from 'next'

import { getSortedPostsData } from '@/src/lib/posts'
import { convertDateToPtBR } from '@/src/utils/convertDateToPtBR'
import { convertStringToSlug } from '@/src/utils/convertStringToSlug'

// components
import Layout from '@/src/components/Layout'
import Header from '@/src/components/Header'
import Articles from '@/src/components/Articles'
import Information from '@/src/components/Information'

type Post = {
  id: string
  category: string
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
        title="Olá, sou Murilio desenvolvedor fullstack"
        subtitle="Olá, bem-vindo"
        description="Sou apaixonado por desenvolvimento tanto frontend como backend. Estou bastante focado na stack de JavaScript, pois acredito em todo o seu potencial e claramente sou um entusiasta da tecnologia."
        img="/murilio.webp"
        breadcrumbs={false}
      />
      <Information />
      <Articles>
        {posts.slice(0, 3).map(({ id, category, date, title, thumbnail }, index: number) => (
          <Link href={`/posts/${id}`} key={index}>
            <a className="articleCard">
              <img src={thumbnail} alt={title} />
              <div className="content">
                <div className="info">
                  <p>{date}</p>
                  <span className={convertStringToSlug(category)}>{category}</span>
                </div>
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
      category: post.category,
      title: post.title,
      thumbnail: post.thumbnail
    }
  })

  return {
    props: {
      posts
    },
    revalidate: 60 * 60 * 24 // 24 hrs
  }
}
