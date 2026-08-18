import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import { DURATION, STAGGER } from '@/lib/animation/gsap'
import styles from './index.module.css'

const programs = [
  { name: 'Strength & Conditioning,', color: 'white'  },
  { name: 'Functional Training,',     color: 'orange' },
  { name: 'Fat Loss & Body\nRecomposition,', color: 'white'  },
  { name: 'Personal Coaching',        color: 'orange' },
]

export default function ProgramsSection() {
  return (
    <section id="programs" className={styles.programsSection}>
      <div className={styles.programsInner}>

        {/* LEFT: Text content */}
        <div className={styles.programsLeft}>

          {/* Section eyebrow label */}
          <Reveal as="p" className={styles.programsLabel} variant="fade-up">Programs</Reveal>

          {/* Program names list */}
          <Stagger as="ul" className={styles.programsList} variant="fade-up" duration={DURATION.card} staggerAmount={STAGGER.tight}>
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
          </Stagger>

          {/* Body paragraph */}
          <Reveal as="p" className={styles.programsBody} variant="fade-up" delay={0.1}>
            Discover a welcoming space where every beginner belongs. Build
            strength, boost confidence, and transform your life&mdash;one step at a
            time. Join a community that lifts you up and celebrates every win.
          </Reveal>

          {/* CTA buttons */}
          <Stagger as="div" className={styles.programsCtas} variant="scale" duration={0.6} delay={0.15} staggerAmount={STAGGER.tight}>
            <Link href="/services" className={styles.btnPrimary}>
              VIEW ALL PROGRAMS
            </Link>
            <Link href="/contact#contact-trial-form" className={styles.btnGhost}>
              FREE TRIAL
            </Link>
          </Stagger>

        </div>

        {/* RIGHT: Hero image */}
        <div className={styles.programsRight}>
          <Reveal as="div" className={styles.programsImageWrap} variant="fade-right" duration={DURATION.section} distance={48}>
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
          </Reveal>
        </div>

      </div>
    </section>
  )
}
