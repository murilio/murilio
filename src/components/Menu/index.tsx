import Link from 'next/link'

import Social from '../Social'
import { ActiveClassLink } from '../Link'
import Breadcrumbs from '../Breadcrumbs'

import useDetectClickOutside from '@/src/hooks/useDetectClickOutside'

import { Container, ContainerGeneral } from './styles'

type MenuProps = {
  img: string
  title: string
  subtitle: string
  scrollHeight: number
  description: string
  breadcrumbs: boolean
}

const Menu = ({ breadcrumbs, description, title, subtitle, img, scrollHeight }: MenuProps) => {
  const { ref, componentVisible, setComponentVisible } = useDetectClickOutside(false)

  return (
    <ContainerGeneral>
      <div className={scrollHeight > 100 ? 'menu scrollMenu' : 'menu'}>
        <Link href='/'>
          <a className='logo'>
            <img loading="lazy" src="/favicon.svg" alt='Favicon' />
            <h1>muri<strong>dev</strong></h1>
          </a>
        </Link>

        <div ref={ref} className={componentVisible ? 'navigation navigationOpen' : 'navigation'}>
          <Container>
            <ul>
              <li><ActiveClassLink href='/#inicio' linkName="Início" iconName="home" /></li>
              <li><ActiveClassLink href='/#about' linkName="Sobre" iconName="insights" /></li>
              <li><ActiveClassLink href='/#blog' linkName="Blog" iconName="rss_feed" /></li>
              <li><ActiveClassLink href='/#contact' linkName="Contato" iconName="sms" /></li>
            </ul>
            <Social />
          </Container>
        </div>
        <span className="material-icons-outlined btn-menu" onClick={() => setComponentVisible(true)}>menu</span>
      </div>

      <div className='content'>
        <div className='contentLeft'>
          {breadcrumbs && (<Breadcrumbs />)}
          <h2>{subtitle}</h2>
          <h1>{title}</h1>
          <span>{description}</span>
        </div>
        <div className='contentRight'>
          <img loading="lazy" src={img} alt={title} />
        </div>
      </div>
    </ContainerGeneral>
  )
}

export default Menu
