import { memo } from 'react'
import Social from '../Social'
import { ActiveClassLink } from '../Link'

import { Container } from './styles'

const Menu = () => {
  return (
    <Container>
      <ul>
        <li><ActiveClassLink href='/#inicio' linkName="Início" iconName="home" /></li>
        <li><ActiveClassLink href='/#about' linkName="Sobre" iconName="insights" /></li>
        <li><ActiveClassLink href='/#blog' linkName="Blog" iconName="rss_feed" /></li>
        <li><ActiveClassLink href='/#contact' linkName="Contato" iconName="sms" /></li>
      </ul>
      <Social />
    </Container>
  )
}

export default memo(Menu)
