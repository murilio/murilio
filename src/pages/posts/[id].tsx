import { GetStaticPaths, GetStaticProps } from 'next'
import { getPostData } from '../../lib/posts'

import Head from 'next/head'

export default function Post ({ postData }: any) {
  return (
    <div>
      <Head>
        <title>{postData.title} | Murilio</title>
      </Head>
      <h1>{postData.title}</h1>
      <div>
        {postData.date}
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps:GetStaticProps = async (ctx) => {
  const { id } = ctx.params

  const postData = await getPostData(String(id))
  return {
    props: {
      postData
    }
  }
}
