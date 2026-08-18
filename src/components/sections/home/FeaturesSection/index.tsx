import Image from 'next/image'
import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
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
    description: 'Flexible plans fit your goals and schedule—grow stronger on your own terms.',
  },
  {
    imageSrc: '/images/home/featureimage4.png',
    title: 'PERSONAL COACHING',
    description: 'Certified trainers guide you safely, inspire you daily, and help you achieve real results.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        {/* Eyebrow Label */}
        <Reveal as="span" className={styles.eyebrow} variant="fade-up">New for beginners</Reveal>

        {/* Section Heading */}
        <Reveal as="h2" className={styles.heading} variant="fade-up" delay={0.08}>
          Features for your<br />
          fitness journey
        </Reveal>

        {/* 4-Column Card Grid */}
        <Stagger as="div" className={styles.grid} variant="scale">
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
        </Stagger>
      </div>
    </section>
  )
}

