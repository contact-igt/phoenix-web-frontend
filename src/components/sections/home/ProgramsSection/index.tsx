import Image from 'next/image'
import styles from './index.module.css'

const programs = [
  { name: 'Strength & Conditioning,', color: 'white'  },
  { name: 'Functional Training,',     color: 'orange' },
  { name: 'Fat Loss & Body\nRecomposition,', color: 'white'  },
  { name: 'Personal Coaching',        color: 'orange' },
]

export default function ProgramsSection() {
  return (
    <section id="services" className={styles.programsSection}>
      <div className={styles.programsInner}>

        {/* â”€â”€ LEFT: Text content â”€â”€ */}
        <div className={styles.programsLeft}>

          {/* Section eyebrow label */}
          <p className={styles.programsLabel}>Programs</p>

          {/* Program names list */}
          <ul className={styles.programsList}>
            {programs.map((program, index) => (
              <li
                key={index}
                className={`${styles.programItem} ${
                  program.color === 'orange'
                    ? styles.programItemOrange
                    : styles.programItemWhite
                }`}
              >
                {program.name.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < program.name.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </li>
            ))}
          </ul>

          {/* Body paragraph */}
          <p className={styles.programsBody}>
            Discover a welcoming space where every beginner belongs. Build
            strength, boost confidence, and transform your lifeâ€”one step at a
            time. Join a community that lifts you up and celebrates every win.
          </p>

          {/* CTA buttons */}
          <div className={styles.programsCtas}>
            <a href="#contact" className={styles.btnPrimary}>
              View All Programs
            </a>
            <a href="#contact" className={styles.btnGhost}>
              Free trial
            </a>
          </div>

        </div>

        {/* â”€â”€ RIGHT: Hero image â”€â”€ */}
        <div className={styles.programsRight}>
          <div className={styles.programsImageWrap}>
            <Image
              src="/images/home/program.png"
              alt="Phoenix Fitness athlete performing battle ropes workout"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

