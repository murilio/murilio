import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { GetStaticProps } from 'next'
import { getSortedPostsData } from '@/src/lib/posts'
import { convertDateToPtBR } from '@/src/utils/convertDateToPtBR'
import { convertStringToSlug } from '@/src/utils/convertStringToSlug'

import Layout from '@/src/components/Layout'
import { Header } from '@/src/components/Header'
import { Search } from '@/src/components/Search'

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
  const [search, setSearch] = useState<string>('')

  const handleSetSearch = (text: string) => {
    setSearch(text)
  }

  return (
    <Layout>
      <Header
        title="Todos os artigos"
        subtitle="Artigos"
        description="Aqui tento escrever sobre meus processos, tecnologias e o que der na telha."
        img="/icons/default.jpg"
        breadcrumbs={true}
      />
      <Search handleSearch={handleSetSearch} />
      <Container>
        {posts
          .filter((item) => search === ''
            ? item
            : (item.category.toLowerCase().includes(search.toLowerCase()) || item.title.toLowerCase().includes(search.toLowerCase())))
          .map(({ id, date, category, title, description, thumbnail }, index: number) => (
            <Link href={`/posts/${id}`} key={index}>
              <a className="articleCard">
                <img loading="lazy" src={thumbnail} alt={title} />
                <div className="content">
                  <div className="info">
                    <p>{date}</p>
                    <span className={convertStringToSlug(category)}>{category}</span>
                  </div>
                  <div className="text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
      </Container>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            <amp-ad width="100vw" height="320"
              type="adsense"
              data-ad-client="ca-pub-7360952889289960"
              data-ad-slot="6669841821"
              data-auto-format="rspv"
              data-full-width="">
              <div overflow=""></div>
            </amp-ad>`
        }}
      />

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
      description: post.description,
      thumbnail: post.thumbnail
    }
  })

  return {
    props: {
      posts
    },
    revalidate: 21600 // 6 hrs
  }
}

export const Container = styled.section`
  padding: 2% 5%;
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  grid-template-columns: 1fr;

  @media screen and (min-width: 585px) {
    justify-content: flex-start;
    grid-template-columns: repeat(auto-fit, 250px);
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  }

  @media only screen and (min-width: 2440px) {
    padding: 2% 15%;
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
      gap: 20px;

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

      .text {
        display: flex;
        flex-direction: column;

        h2 {
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 30px;
          height: 97px;
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
  }
`
