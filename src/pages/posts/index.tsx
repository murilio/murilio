import styled from 'styled-components'
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
  const posts = getSortedPostsData()
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
