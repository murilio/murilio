import { GetStaticPaths, GetStaticProps } from 'next'
import styled from 'styled-components'

import { getPostData } from '@/src/lib/posts'
import { convertDateToPtBR } from '@/src/utils/convertDateToPtBR'

import { Header } from '@/src/components/Header'
import Layout from '@/src/components/Layout'
import Share from '@/src/components/Share'

interface IPostProps {
  date: string
  title: string,
  description: string,
  thumbnail: string
  contentHtml: string
  views: string
}

type PostProps = {
  post: IPostProps
}

export default function Post ({ post }: PostProps) {
  return (
    <Layout>
      <Header
        title={post.title}
        subtitle={post.date}
        description={post.description}
        img={post.thumbnail}
        breadcrumbs={true}
      />
      <Container>
        <h1>{post.title}</h1>
        <div className="info">
          <span>{post.date}</span>
          <Share title={post.title} description={post.description} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </Container>
    </Layout>
  )
}

// Gera o HTML estático de cada página acessado no navegador
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

// gera o HTML estático da página
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params

  const data = await getPostData(String(id))

  const post = {
    date: convertDateToPtBR(data.date),
    title: data.title,
    description: data.description,
    thumbnail: data.thumbnail,
    contentHtml: data.contentHtml,
  }

  return {
    props: {
      post
    },
    revalidate: 21600 // 6 hrs
  }
}

export const Container = styled.section`
  padding: 2% 5%;

  @media only screen and (min-width: 2440px) {
    padding: 2% 15%;
  }

  .info {
    display: flex;
    justify-content: space-between;

    width: 100%;
    padding: 10px 0 20px;
  }
`
