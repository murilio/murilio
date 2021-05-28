import { Container } from './styles'

export default function Social () {
  return (
    <Container>
      <a
        href='https://linkedin.com/in/murilio'
        target='_blank'
        rel='noreferrer'
      >
        <img loading="lazy" src="/icons/linkedin.svg" alt="linkedin icon" />
        <span>linkedin</span>
      </a>
      <a
        href='https://github.com/murilio'
        target='_blank'
        rel='noreferrer'
      >
        <img loading="lazy" src="/icons/github.svg" alt="github icon" />
        <span>Github</span>
      </a>
      <a
        href='https://www.instagram.com/murilio.sw/'
        target='_blank'
        rel='noreferrer'
      >
        <img loading="lazy" src="/icons/instagram.svg" alt="instagram icon" />
        <span>Instagram</span>
      </a>
    </Container>
  )
}
