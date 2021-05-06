import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default function About ({ allPostsData }: any) {
  return (
    <div>
      {allPostsData.map(({ id, date, title }, index) => (
        <li key={index}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <span>
            {date}
          </span>
        </li>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
