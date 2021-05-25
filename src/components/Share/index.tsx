import { useState } from 'react'
import { Container } from './styles'

interface IShareProps {
  title: string
  description: string
  url: string
}

export default function Share ({ title, description, url }: IShareProps) {
  const [copySuccess, setCopySuccess] = useState(false)

  const copyToClipboard = (e: string) => {
    navigator.clipboard.writeText(e)
    setCopySuccess(true)

    setInterval(() => {
      setCopySuccess(false)
    }, 3000)
  }

  const sharePost = () => {
    if (navigator.share) {
      console.log('Congrats! Your browser supports Web Share API')
      navigator
        .share({
          title,
          text: description,
          url
        })
        .then(() => console.log('Sharing successful'))
        .catch(() => console.log('Sharing failed'))
    } else {
      console.log('Sorry! Your browser does not support Web Share API')
    }
  }

  return (
    <Container>
      <div className="web">
        <button onClick={() => copyToClipboard(window.location.href)}>
          <span className="material-icons-outlined">share</span>
        </button>
        {copySuccess && (
          <span>copied!</span>
        )}
      </div>

      <div className="mobile">
        <button onClick={() => sharePost()}>
          <span className="material-icons-outlined">share</span>
        </button>
      </div>
    </Container>
  )
}
