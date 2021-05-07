import Head from 'next/head'

import { GetStaticPaths, GetStaticProps } from 'next'

import { getPostData } from '../../lib/posts'
import { convertDateToPtBR } from '../../lib/convertDateToPtBR'

import Layout from '../../components/Layout'
import Header from '../../components/Header'

// type PostProps = {
//   id: string
//   date: string
//   title: string,
//   description: string,
//   thumbnail: string
//   contentHtml: string
// }

import { Container } from './styles'

export default function Post ({ post }: any) {
  return (
    <>
      <Head>
        <title>{post.title} | Murilio</title>
      </Head>
      <Layout>
        <Header
          title={post.title}
          subtile={convertDateToPtBR(post.date)}
          description={post.description}
          img={post.thumbnail}
        />
        <Container>
          <h1>{post.title}</h1>
          <div className="information">
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
