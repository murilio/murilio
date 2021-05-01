// style
import { ContainerCardArticles } from './styles'

interface Props {
  img?: string;
  title: string;
}

export default function CardArticles ({ img, title }: Props) {
  return (
    <ContainerCardArticles>
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </ContainerCardArticles>
  )
}
