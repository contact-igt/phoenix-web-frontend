'use client'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import styles from './AboutFAQ.module.css'

const faqs = [
  {
    q: "I'm a complete beginner. Can I still join Phoenix Fitness?",
    a: "Absolutely! Phoenix Fitness welcomes members of all fitness levels. Our trainers will create a personalised plan that starts at your current level and progresses at your pace.",
  },
  {
    q: "Do I need to bring anything for my first session?",
    a: "Just bring comfortable workout clothes, a water bottle, and a positive mindset. Towels and lockers are available at all our branches.",
  },
  {
    q: "Are personal training sessions included in the plans?",
    a: "Personal training sessions are available as an add-on to any membership. Our team will help you choose the right package based on your fitness goals.",
  },
  {
    q: "What kind of group classes do you offer?",
    a: "We offer a wide range of group classes including strength training, HIIT, yoga, Zumba, and more. Class schedules vary by branch — check our app for the latest timings.",
  },
  {
    q: "Can I freeze or pause my membership if needed?",
    a: "Yes, you can freeze your membership for up to 30 days per year. Visit the front desk or contact our support team to request a freeze.",
  },
  {
    q: "How do I cancel my membership?",
    a: "To cancel, simply visit your nearest Phoenix Fitness branch with a written request 30 days before your next billing date. Our team will process it promptly.",
  },
]

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) =>
    setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.inner}>

        <h2 id="faq-heading" className={styles.heading}>
          <span className={styles.headingOrange}>Frequently</span>
          <span className={styles.headingWhite}>Asked Questions</span>
        </h2>

        <div className={styles.accordion}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
              >
                <button
                  className={styles.trigger}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className={styles.question}>{faq.q}</span>
                  <span
                    className={`${styles.plusBtn} ${isOpen ? styles.plusOpen : ''}`}
                    aria-hidden="true"
                  >
                    <Plus size={18} strokeWidth={2} />
                  </span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
                >
                  <p className={styles.answer}>{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
