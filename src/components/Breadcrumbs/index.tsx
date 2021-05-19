import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { convertSlugToString } from '../../lib/convertSlugToString'

import { Container, ArrowLeft } from './styles'
import { ActiveClassLink } from '../Link'

export default function Breadcrumbs () {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState(null)

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') }
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
      {breadcrumbs.map((breadcrumb, index: number) => (
        <li key={index}>
          <ArrowLeft />
          <ActiveClassLink href={breadcrumb.href} linkName={convertSlugToString(breadcrumb.breadcrumb)} />
        </li>
      ))}
    </Container>
  )
}
