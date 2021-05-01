// style
import { ContainerCardProjects } from './styles'

interface Props {
  id?: number
  url?: string
  img?: string
  title?: string
  description?: string
  lastPost?: boolean
}

export default function CardProjects ({
  id,
  url,
  img,
  title,
  description,
  lastPost
}: Props) {
  return (
    <ContainerCardProjects>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <div className='buttons'>
        <a href={url}>Online</a>
        <a href={`/post/details/${id}`}>Ver Mais</a>
      </div>
      {lastPost && (
        <div className='new'>
          <p>new</p>
          <span className='circle'></span>
        </div>
      )}
    </ContainerCardProjects>
  )
}
