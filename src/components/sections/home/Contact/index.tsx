import styles from './index.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Get in touch</span>
          <h2 className={styles.heading}>Connect with our team today</h2>
          <p className={styles.description}>
            Have questions or ready to begin? Reach out and we&apos;ll help you take your first step toward a stronger, healthier you.
          </p>
        </div>

        {/* 3-Column Contact Grid */}
        <div className={styles.grid}>
          {/* Column 1: Send an Email */}
          <div className={styles.contactCard}>
            <div className={styles.iconWrap}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Send an email</h3>
            <p className={styles.cardText}>
              Need info or support? We&apos;re here to help you start strong.
            </p>
            <a href="mailto:info@phoenixfitness.com" className={styles.link}>
              info@phoenixfitness.com
            </a>
          </div>

          {/* Column 2: Give us a Call */}
          <div className={styles.contactCard}>
            <div className={styles.iconWrap}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Give us a call</h3>
            <p className={styles.cardText}>
              Reach us Monday to Friday, 8am&ndash;5pm.
            </p>
            <span className={styles.boldText}>+91 7795 537 297</span>
          </div>

          {/* Column 3: Stop by our Gym */}
          <div className={styles.contactCard}>
            <div className={styles.iconWrap}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Stop by our gym</h3>
            <p className={styles.cardText}>
              Visit us and join our welcoming community.
            </p>
            <a
              href="https://maps.google.com/?q=Village+Main+Rd,+Palm+Meadows,+Whitefield,+Bengaluru+560066"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.boldText}`}
            >
              Village Main Rd, Palm Meadows, Whitefield, Bengaluru 560066
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
