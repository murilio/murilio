import { memo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = {
  href: string
  linkName: string
  iconName?: string
}

function ActiveClassLinkComponent ({ href, linkName, iconName }: Props) {
  const router = useRouter()

  const className = router.pathname === href || router.asPath === href ? 'active' : null

  return (
    <Link href={href}>
      <a className={className}>
        {iconName && (<span className="material-icons-outlined">{iconName}</span>)}
        {linkName}
      </a>
    </Link>
  )
}

export const ActiveClassLink = memo(ActiveClassLinkComponent)
