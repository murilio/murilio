import { useState } from 'react'
import { Container } from './styles'

interface IShareProps {
  title: string
  description: string
}

export default function Share ({ title, description }: IShareProps) {
  const [copySuccess, setCopySuccess] = useState(false)
  const [messageShare, setMessageShare] = useState('')

  const copyToClipboard = (e: string) => {
    navigator.clipboard.writeText(e)
    setCopySuccess(true)

    setTimeout(() => {
      setCopySuccess(false)
    }, 3000)
  }

  const sharePost = () => {
    if (navigator.share) {
      navigator
        .share({
          title,
          text: description,
          url: window.location.href
        })
        .then(() => setMessageShare('Compartilhado com sucesso!'))
        .catch(() => setMessageShare('Falhou!'))
    }
  }

  return (
    <Container>
      <div className="web">
        <button onClick={() => copyToClipboard(window.location.href)}>
          <span className="material-icons-outlined">copy_all</span>
        </button>
        {copySuccess && (
          <span>Link copiado!</span>
        )}
      </div>

      <div className="mobile">
        <button onClick={() => sharePost()}>
          <span className="material-icons-outlined">share</span>
        </button>
        {messageShare && (
          <span>{messageShare}</span>
        )}
      </div>
    </Container>
  )
}
