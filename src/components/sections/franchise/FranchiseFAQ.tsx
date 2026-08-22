'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import AccordionPanel from '@/components/animation/AccordionPanel'
import styles from './index.module.css'

const faqs = [
  {
    q: 'Who can apply to become a Phoenix Fitness franchise partner?',
    a: 'Phoenix welcomes enquiries from entrepreneurs, business owners, investors and individuals interested in building a strong local fitness community. Each opportunity is evaluated individually.',
  },
  {
    q: 'Do I need previous fitness industry experience?',
    a: 'Previous fitness experience can be useful, but each potential partner is assessed based on the overall opportunity, business capability and alignment with Phoenix.',
  },
  {
    q: 'What type of location is suitable?',
    a: 'Suitability depends on the city, catchment, accessibility, proposed format and property. The location is evaluated during the franchise discussion.',
  },
  {
    q: 'How much investment is required?',
    a: 'Investment depends on the proposed market, location, property, gym format and development requirements. Commercial details are discussed after the initial franchise evaluation.',
  },
  {
    q: 'Does Phoenix support the setup process?',
    a: 'Phoenix works with selected partners on the planning required to develop the location in line with the approved Phoenix format and brand standards.',
  },
  {
    q: 'How is a territory evaluated?',
    a: 'Market demand, catchment, accessibility, competition and the proposed location are considered during evaluation.',
  },
  {
    q: 'How long does it take to open?',
    a: 'The timeline varies depending on property readiness, approvals, setup requirements and the agreed development plan.',
  },
  {
    q: 'How do I start?',
    a: 'Complete the franchise enquiry form. The Phoenix team will review the information and connect with suitable applicants regarding the next stage.',
  },
]

export default function FranchiseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className={styles.faqSection} aria-labelledby="franchise-faq-title">
      <div className={styles.faqInner}>
        <Reveal as="h2" id="franchise-faq-title" className={styles.faqHeading} variant="fade-up">
          <span>FRANCHISE</span>
          <span>FAQ</span>
        </Reveal>

        <Stagger as="div" className={styles.accordion} variant="fade-up" distance={20}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.q} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
                <button
                  type="button"
                  className={styles.faqTrigger}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`franchise-faq-answer-${index}`}
                >
                  <span className={styles.faqQuestion}>{faq.q}</span>
                  <span className={`${styles.plusBtn} ${isOpen ? styles.plusOpen : ''}`} aria-hidden="true">
                    <Plus size={18} strokeWidth={2} />
                  </span>
                </button>

                <AccordionPanel
                  isOpen={isOpen}
                  id={`franchise-faq-answer-${index}`}
                  className={styles.faqPanel}
                  role="region"
                >
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </AccordionPanel>
              </div>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
