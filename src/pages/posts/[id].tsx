import styled from 'styled-components'

import { GetStaticPaths, GetStaticProps } from 'next'

import { getPostData } from '../../lib/posts'
import { convertDateToPtBR } from '../../lib/convertDateToPtBR'

import Layout from '../../components/Layout'
import Header from '../../components/Header'

// interface PostProps {
//   id: string
//   date: string
//   title: string,
//   description: string,
//   thumbnail: string
//   contentHtml: string
// }

export default function Post ({ post }: any) {
  return (
    <>
      <Layout>
        <Header
          title={post.title}
          subtile={convertDateToPtBR(post.date)}
          description={post.description}
          img={post.thumbnail}
          breadcrumbs={true}
        />
        <Container>
          <h1>{post.title}</h1>
          <div className="info">
            <span>{convertDateToPtBR(post.date)}</span>
            <div className="share">compartilhar</div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </Container>
      </Layout>
    </>
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

  const post = await getPostData(String(id))

  return {
    props: {
      post
    },
    revalidate: 60 * 60 * 24 // 24 hrs
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
