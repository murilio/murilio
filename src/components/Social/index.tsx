import { Container, IconLinkedin, IconGithub, IconInstagram } from './styles'

export default function Social () {
  return (
    <Container>
      <a
        href='https://linkedin.com/in/murilio'
        target='_blank'
        rel='noreferrer'
      >
        <IconLinkedin />
      </a>
      <a
        href='https://github.com/murilio'
        target='_blank'
        rel='noreferrer'
      >
        <IconGithub />
      </a>
      <a
        href='https://www.instagram.com/murilio.sw/'
        target='_blank'
        rel='noreferrer'
      >
        <IconInstagram />
      </a>
    </Container>
  )
}
