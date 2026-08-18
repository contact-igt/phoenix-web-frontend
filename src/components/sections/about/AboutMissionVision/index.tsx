import Image from 'next/image'
import Stagger from '@/components/animation/Stagger'
import Counter from '@/components/animation/Counter'
import { STAGGER } from '@/lib/animation/gsap'
import styles from './index.module.css'

const stats = [
  {
    id: 'experience',
    icon: '/images/about/stats_icon1.png',
    lines: ['17+ years of', 'experience'],
  },
  {
    id: 'members',
    icon: '/images/about/stats_icon2.png',
    lines: ['5000+', 'community', 'members'],
  },
  {
    id: 'branches',
    icon: '/images/about/stats_icon3.png',
    lines: ['5+ branches', 'across', 'bangalore'],
  },
]

export default function AboutMissionVision() {
  return (
    <section className={styles.section} aria-labelledby="mission-vision-title">
      <div className={styles.watermark} aria-hidden="true">
        <Image
          src="/images/about/about_mission_logo.png"
          alt=""
          fill
          sizes="42vw"
          className={styles.watermarkImage}
        />
      </div>

      <div className={styles.inner}>
        <Stagger as="div" className={styles.copyColumn} variant="fade-up" staggerAmount={STAGGER.normal}>
          <h2 id="mission-vision-title" className={styles.title}>
            <span>Mission &amp;</span> Vision
          </h2>

          <p className={styles.copy}>
            Every transformation begins with a moment.<br />
            A moment when you decide that the person you are today
            is not the person you are meant to remain.<br />
            Phoenix Fitness was born from that moment.
          </p>

          <Stagger as="div" className={styles.metrics} variant="fade-up" distance={16} staggerAmount={STAGGER.tight} aria-label="Phoenix Fitness milestones">
            {stats.map(({ id, icon, lines }) => (
              <div className={styles.metricItem} key={id}>
                <Image src={icon} alt="" width={45} height={45} className={styles.metricIcon} />
                <span className={styles.metricCopy}>
                  <span><Counter value={lines[0]} /></span>
                  {lines.slice(1).map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </span>
              </div>
            ))}
          </Stagger>
        </Stagger>

        <Stagger as="div" className={styles.mediaColumn} variant="scale" aria-hidden="true">
          <div className={`${styles.imageCard} ${styles.topLeft}`}>
            <Image src="/images/about/mission1.png" alt="" fill sizes="504px" className={styles.image} />
          </div>
          <div className={`${styles.imageCard} ${styles.topRight}`}>
            <Image src="/images/about/mission2.png" alt="" fill sizes="326px" className={styles.image} />
          </div>
          <div className={`${styles.imageCard} ${styles.bottomLeft}`}>
            <Image src="/images/about/mission3.png" alt="" fill sizes="376px" className={styles.image} />
          </div>
          <div className={`${styles.imageCard} ${styles.bottomRight}`}>
            <Image src="/images/about/mission4.png" alt="" fill sizes="454px" className={styles.image} />
          </div>

          <p className={styles.statement}>
            <span className={styles.statementSmall}>Its about</span>
            <span className={styles.orange}>Resilience,</span>
            <span>Discipline, &amp;</span>
            <span className={styles.orange}>Self-belief.</span>
          </p>
        </Stagger>
      </div>
    </section>
  )
}




