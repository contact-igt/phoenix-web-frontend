import styles from './index.module.css'
import FAQAccordion from "@/components/FAQAccordion"

export default function PricingFAQ() {
  return (
        <section id="faq" className={styles["faq-section"]}>
          <div className={styles["container"]}>
            <div className={styles["faq-header"]}>
              <span className={styles["faq-subtitle"]}>FAQ'S</span>
              <h2 className={styles["faq-title"]}>FREQUENTLY ASKED QUESTIONS</h2>
            </div>
            <FAQAccordion />
          </div>
        </section>
  )
}
