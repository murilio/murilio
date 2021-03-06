import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { ActiveClassLink } from '../Link'
import { Container } from './styles'
import { convertSlugToString } from '../../utils/convertSlugToString'

type breadcrumbs = {
  breadcrumb: string
  href: string
}

const Breadcrumbs = () => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState(null)

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath
        .filter((path) => (path !== ''))
        .map((path, i) => {
          return {
            breadcrumb: path,
            href: `/${linkPath.slice(0, i + 1).join('/')}`
          }
        })

      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) return null

  return (
    <Container>
      <li>
        <ActiveClassLink href="/#inicio" linkName="Início" />
      </li>
      {breadcrumbs.map((breadcrumb: breadcrumbs, index: number) => (
        <li key={index}>
          <span className="material-icons-outlined">chevron_right</span>
          <ActiveClassLink href={breadcrumb.href} linkName={convertSlugToString(breadcrumb.breadcrumb)} />
        </li>
      ))}
    </Container>
  )
}

export default Breadcrumbs
