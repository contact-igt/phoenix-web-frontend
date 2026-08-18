import Image from 'next/image'
import Stagger from '@/components/animation/Stagger'
import { STAGGER } from '@/lib/animation/gsap'
import styles from './index.module.css'

const stripImages = [
  '/images/contact/form_image.png',
  '/images/contact/info1.png',
  '/images/contact/info2.png',
  '/images/contact/info1.png',
  '/images/contact/info2.png',
]

const quickContactCards = [
  {
    icon: '/images/contact/call.png',
    title: 'GIVE US A CALL',
    subtext: 'Monday to Friday, 8am - 10pm',
    value: '+91 9880537297',
    href: 'tel:+919880537297',
  },
  {
    icon: '/images/contact/mail.png',
    title: 'CALL ANY TIME',
    subtext: "We'll get back to you within 24h",
    value: 'info@phoenix-fitness.in',
    href: 'mailto:info@phoenix-fitness.in',
  },
]

const branchLocations = [
  {
    name: 'Budegere cross',
    address: ['ISIRI HUB, First Floor, Near Coldman,', 'Bommenahalli Village, Bengaluru 560049'],
  },
  {
    name: 'Kannamangala',
    address: ['6th Floor, SBR Gokulam, Whitefield -', 'Hoskote Rd, Bengaluru 560115'],
  },
  {
    name: 'Nallurhalli',
    address: ['Village Main Rd, Palm Meadows,', 'Whitefield, Bengaluru 560066'],
  },
  {
    name: 'Yello Living (ITPL)',
    address: ['Extension Road, Pattandur Agrahara,', 'Whitefield, Bengaluru 560066'],
  },
  {
    name: 'Hope Farm',
    address: ['92, Whitefield Main Rd, Kadugodi Colony,', 'Bengaluru 560066'],
  },
]

export default function ContactInfo() {
  return (
    <section id="contact-info" className={styles.container} aria-label="Contact Information">
      <div className={styles.stage}>
        <Stagger as="div" className={styles.imageStrip} variant="scale" staggerAmount={STAGGER.tight} aria-hidden="true">
          {stripImages.map((src, index) => (
            <div className={styles.imagePanel} key={`${src}-${index}`}>
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className={styles.panelImage}
              />
            </div>
          ))}
        </Stagger>

        <div className={styles.contactGrid}>
          <Stagger as="div" className={styles.headingBlock} variant="fade-up" staggerAmount={STAGGER.normal}>
            <p className={styles.kicker}>CONTACT PHOENIX FITNESS</p>
            <h2 className={styles.title}>Find your nearest branch</h2>
            <p className={styles.description}>
              Reach our team for membership details, personal training support, or quick help choosing
              the Phoenix Fitness location that fits your routine.
            </p>
          </Stagger>

          <Stagger as="div" className={styles.quickCards} variant="fade-up" aria-label="Quick contact details">
            {quickContactCards.map((card) => (
              <article className={`${styles.card} ${styles.quickCard}`} key={card.title}>
                <div className={styles.iconWrapper}>
                  <Image src={card.icon} alt="" width={24} height={24} className={styles.icon} />
                </div>
                <h3 className={styles.eyebrow}>{card.title}</h3>
                <p className={styles.subtext}>{card.subtext}</p>
                <p className={styles.value}>
                  <a href={card.href} className={styles.link}>
                    {card.value}
                  </a>
                </p>
              </article>
            ))}
          </Stagger>

          <Stagger as="div" className={styles.branchGrid} variant="fade-up" staggerAmount={STAGGER.tight} aria-label="Phoenix Fitness branch locations">
            {branchLocations.map((branch, index) => (
              <article className={`${styles.card} ${styles.branchCard}`} key={branch.name}>
                <div className={styles.branchTopline}>
                  <span className={styles.branchNumber}>0{index + 1}</span>
                  <div className={styles.locationIcon}>
                    <Image src="/images/contact/map-pin.png" alt="" width={20} height={20} className={styles.icon} />
                  </div>
                </div>
                <h3 className={styles.branchName}>{branch.name}</h3>
                <div className={styles.addressWrapper}>
                  {branch.address.map((line) => (
                    <p className={styles.addressLine} key={line}>
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
