'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import styles from './VideoModal.module.css'

interface VideoModalProps {
  src: string
  label: string
  onClose: () => void
}

export default function VideoModal({ src, label, onClose }: VideoModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement as HTMLElement | null

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={`${label} transformation video`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeButton}
          aria-label="Close video"
          onClick={onClose}
        >
          <X size={20} strokeWidth={2} />
        </button>
        <video
          className={styles.video}
          src={encodeURI(src)}
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  )
}
