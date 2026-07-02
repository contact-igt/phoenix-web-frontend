import { ArrowUp } from "lucide-react"
import styles from "./MarketingFooter.module.css"

export default function MarketingFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <nav className={styles.linkGroup} aria-label="Footer navigation">
            <a href="#contact" className={styles.darkPill}>CONTACT US</a>
            <a href="#" className={styles.darkPill}>LICENSE</a>
            <a href="#" className={styles.darkPill}>404</a>
          </nav>

          <a href="#" className={styles.backToTop}>
            <span>BACK TO TOP</span>
            <span className={styles.backIcon} aria-hidden="true">
              <ArrowUp size={21} strokeWidth={2} />
            </span>
          </a>
        </div>

        <p className={styles.copy}>&copy; 2026. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  )
}
