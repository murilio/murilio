import React from 'react'

// styles
import { Container, Title } from './styles'

// components
import Card from '../Card/CardArticles'

const itens = [
  {
    id: 1,
    img:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title:
      'title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title  '
  },
  {
    id: 2,
    img:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'title'
  },
  {
    id: 3,
    img:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    url: 'url',
    title: 'title'
  },
  {
    id: 4,
    img:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'title'
  },
  {
    id: 5,
    img:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'title'
  }
]

export default function Articles() {
  return (
    <Container>
      <Title>
        <h2>Conteúdo e artigos</h2>
        <span>
          Aqui tento escrever sobre meus processos, tecnologias e o que der na
          telha
        </span>
      </Title>
      <div className='container'>
        {itens.slice(0, 3).map(item => (
          <Card key={item.id} id={item.id} img={item.img} title={item.title} />
        ))}
      </div>
      <div className='viewAll'>
        <a href='#'>Ver todos</a>
      </div>
    </Container>
  )
}
