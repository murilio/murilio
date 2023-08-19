import { useState, useEffect, useRef } from 'react'

export default function useDetectClickOutside (initialIsVisible: boolean) {
  const [componentVisible, setComponentVisible] = useState(initialIsVisible)
  const ref = useRef(null)

  const handleHideDropdown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setComponentVisible(false)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setComponentVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true)
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true)
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, componentVisible, setComponentVisible }
}
