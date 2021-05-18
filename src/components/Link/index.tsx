import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = {
  href: string
  linkName: string
}

export const ActiveClassLink = ({ href, linkName }: Props) => {
  const router = useRouter()

  const className = router.pathname === href || router.asPath === href ? 'active' : null

  return (
    <Link href={href}>
      <a className={className}>
        {linkName}
      </a>
    </Link>
  )
}

export default { ActiveClassLink }
