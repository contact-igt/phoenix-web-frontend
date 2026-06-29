import Image from 'next/image'
import styles from './index.module.css'

interface FeatureCard {
  imageSrc: string
  title: string
  description: string
}

const features: FeatureCard[] = [
  {
    imageSrc: '/images/home/featureimage1.png',
    title: 'STEP-BY-STEP GUIDANCE',
    description: 'Easy-to-follow programs help you build strength and confidence, no matter your starting point.',
  },
  {
    imageSrc: '/images/home/featureimage2.png',
    title: 'UPLIFTING COMMUNITY',
    description: 'Join a supportive group that motivates, encourages, and celebrates every win together.',
  },
  {
    imageSrc: '/images/home/featureimage3.png',
    title: 'PROGRESS AT YOUR PACE',
    description: 'Flexible plans fit your goals and scheduleâ€”grow stronger on your own terms.',
  },
  {
    imageSrc: '/images/home/featureimage4.png',
    title: 'PERSONAL COACHING',
    description: 'Certified trainers guide you safely, inspire you daily, and help you achieve real results.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="faq" className={styles.featuresSection}>
      <div className={styles.container}>
        {/* Eyebrow Label */}
        <span className={styles.eyebrow}>New for beginners</span>

        {/* Section Heading */}
        <h2 className={styles.heading}>
          Features for your<br />
          fitness journey
        </h2>

        {/* 4-Column Card Grid */}
        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

