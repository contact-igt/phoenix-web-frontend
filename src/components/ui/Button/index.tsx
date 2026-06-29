import Link from 'next/link'
import styles from './index.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
  pill?: boolean
  href?: string
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  pill = false,
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classNames = `${styles.btn} ${styles[variant]} ${pill ? styles.pill : ''} ${className}`

  if (href) {
    // If it's an external link
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a href={href} className={classNames} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}