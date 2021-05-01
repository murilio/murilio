import React from 'react'

// style
import { ContainerCardArticles } from './styles'

export default function CardArticles({ img, title }) {
  return (
    <ContainerCardArticles>
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </ContainerCardArticles>
  )
}
