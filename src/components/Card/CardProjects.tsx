import React from 'react'

// style
import { ContainerCardProjects } from './styles'

export default function CardProjects({
  id,
  url,
  img,
  title,
  description,
  lastPost
}) {
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
