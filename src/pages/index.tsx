// style
import { Container } from './styles'

// components
import Header from '../components/Header'
import Information from '../components/Information'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Articles from '../components/Articles'

export default function Home() {
  return (
    <Container>
      <Header/>
      <Information />
      <Projects />
      <Articles />
      <Footer />
    </Container>
  )
}
