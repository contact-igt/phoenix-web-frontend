import styles from './index.module.css'

// interface StatItem {
//   value: string
//   label: string
// }
// 
// const stats: StatItem[] = [
//   { value: '500K', label: 'Workouts crushed together' },
//   { value: '95%', label: 'Members achieving real results' },
//   { value: '2,400', label: 'Journeys proudly shared' },
//   { value: '1.2M', label: 'Calories burned every month' },
//   { value: '88%', label: 'Stories of positive change' },
//   { value: '3,500', label: 'Group sessions that lift you up' },
// ]

export default function MilestonesSection() {
  return (
    <section id="pricing" className={styles.milestonesSection}>
      <div className={styles.container}>
        <div className={styles.flexLayout}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <div className={styles.titleBlock}>
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
            </div>
            
            <div className={styles.leftStats}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>2,400</div>
                <div className={styles.statLabel}>Journeys proudly shared</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>1.2M</div>
                <div className={styles.statLabel}>Calories burned every month</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightCol}>
            <div className={styles.rightStatsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>500K</div>
                <div className={styles.statLabel}>Workouts crushed together</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>95%</div>
                <div className={styles.statLabel}>Members achieving real results</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>88%</div>
                <div className={styles.statLabel}>Stories of positive change</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>3,500</div>
                <div className={styles.statLabel}>Group sessions that lift you up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

