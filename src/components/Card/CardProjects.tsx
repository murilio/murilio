// style
import { ContainerCardProjects } from './styles'

interface Props {
  url?: string
  img?: string
  title?: string
  description?: string
  lastPost?: boolean
}

export default function CardProjects ({ url, img, title, description, lastPost }: Props) {
  return (
    <ContainerCardProjects>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <div className='buttons'>
        <a
          href={url}
          target='_blank'
          rel='noreferrer'>Online</a>
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
