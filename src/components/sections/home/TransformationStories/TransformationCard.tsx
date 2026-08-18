import Image from 'next/image'
import { Play } from 'lucide-react'
import type { Transformation } from './data'
import styles from './TransformationCard.module.css'

interface TransformationCardProps {
  transformation: Transformation
  isActive: boolean
  onSelect: () => void
}

export default function TransformationCard({ transformation, isActive, onSelect }: TransformationCardProps) {
  return (
    <div className={styles.item}>
      <button
        type="button"
        className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
        onClick={onSelect}
        aria-pressed={isActive}
        aria-label={`${transformation.video ? 'Play' : 'View'} ${transformation.name}'s transformation story`}
      >
        <div className={styles.imageWrap}>
          <Image
            src={transformation.image}
            alt={transformation.alt}
            fill
            sizes="(max-width: 576px) 70vw, (max-width: 992px) 40vw, 220px"
            className={styles.image}
            style={{ objectPosition: transformation.imagePosition ?? 'top center' }}
          />
          {transformation.video && (
            <span className={styles.playBadge} aria-hidden="true">
              <Play size={11} fill="currentColor" strokeWidth={0} />
            </span>
          )}
          <span className={styles.resultChip}>{transformation.result}</span>
        </div>
        <div className={styles.meta}>
          <span className={styles.name}>{transformation.name}</span>
          <span className={styles.goal}>{transformation.goal}</span>
        </div>
      </button>
    </div>
  )
}
