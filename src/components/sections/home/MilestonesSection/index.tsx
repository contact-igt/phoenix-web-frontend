import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import Counter from '@/components/animation/Counter'
import styles from './index.module.css'

export default function MilestonesSection() {
  return (
    <section id="pricing" className={styles.milestonesSection}>
      <div className={styles.container}>
        <div className={styles.flexLayout}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <Reveal as="div" className={styles.titleBlock} variant="fade-up">
              <span className={styles.eyebrow}>
                Community<br />
                Milestones
              </span>
              <h2 className={styles.heading}>
                Progress you<br />
                can count on
              </h2>
              <p className={styles.description}>
                Every number tells a transformation story
              </p>
            </Reveal>

            <Stagger as="div" className={styles.leftStats} variant="fade-up">
              <div className={styles.statCard}>
                <Counter value="2,400" className={styles.statValue} />
                <div className={styles.statLabel}>Journeys proudly shared</div>
              </div>
              <div className={styles.statCard}>
                <Counter value="1.2M" className={styles.statValue} />
                <div className={styles.statLabel}>Calories burned every month</div>
              </div>
            </Stagger>
          </div>

          {/* Right Column */}
          <div className={styles.rightCol}>
            <Stagger as="div" className={styles.rightStatsGrid} variant="scale">
              <div className={styles.statCard}>
                <Counter value="500K" className={styles.statValue} />
                <div className={styles.statLabel}>Workouts crushed together</div>
              </div>
              <div className={styles.statCard}>
                <Counter value="95%" className={styles.statValue} />
                <div className={styles.statLabel}>Members achieving real results</div>
              </div>
              <div className={styles.statCard}>
                <Counter value="88%" className={styles.statValue} />
                <div className={styles.statLabel}>Stories of positive change</div>
              </div>
              <div className={styles.statCard}>
                <Counter value="3,500" className={styles.statValue} />
                <div className={styles.statLabel}>Group sessions that lift you up</div>
              </div>
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}

