import styled from 'styled-components'
import Link from 'next/link'

import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../../lib/posts'
import { convertDateToPtBR } from '../../utils/convertDateToPtBR'
import { convertStringToSlug } from '../../utils/convertStringToSlug'

import Layout from '../../components/Layout'
import Header from '../../components/Header'

interface IPost {
  id: string
  date: string
  category: string
  title: string
  description: string
  thumbnail: string
}

type PostsProps = {
  posts: IPost[]
}

export default function Posts ({ posts }: PostsProps) {
  return (
    <Layout>
      <Header
        title="Todos os artigos"
        subtitle="Artigos"
        description="Aqui tento escrever sobre meus processos, tecnologias e o que der na telha."
        img="/default.png"
        breadcrumbs={true}
      />
      <Container>
        {posts.map(({ id, date, category, title, description, thumbnail }, index: number) => (
          <Link href={`/posts/${id}`} key={index}>
            <a className="articleCard">
              <img src={thumbnail} alt={title} width="100" />
              <div className="content">
                <div className="info">
                  <p>{date}</p>
                  <span className={convertStringToSlug(category)}>{category}</span>
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </a>
          </Link>
        ))}
      </Container>
    </Layout>
  )
}

// gera o HTML estático da página
export const getStaticProps: GetStaticProps = async () => {
  const data = getSortedPostsData()

  const posts = data.map((post: IPost) => {
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
    revalidate: 60 * 60 * 24
  }
}

export const Container = styled.section`
  padding: 2% 5%;
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 250px);

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }

  .articleCard {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      max-height: 150px;
      min-height: 150px;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      object-fit: cover;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: 100%;

      .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
          color: var(--color-dark-gray);
          font-size: 13px;
          text-align: left;
          margin: 5px 0;
        }
      }

      h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        color: var(--color-dark-gray);
        text-align: left;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 10px 0 20px;
      }

      p {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 15px;
      }
    }
  }
`
