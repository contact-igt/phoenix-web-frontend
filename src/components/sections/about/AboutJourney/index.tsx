import Image from 'next/image'
import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import { STAGGER } from '@/lib/animation/gsap'
import styles from './AboutJourney.module.css'

type Milestone = {
  marker: string
  year: string
  yearLabel: string
  titleWhite: string
  titleOrange: string
  image: string
  caption: string
}

const centerTimeline: Milestone[] = [
  { marker: '01', year: '2010', yearLabel: 'YEAR 1', titleWhite: 'PHOENIX FITNESS', titleOrange: 'FOUNDED', image: '/images/about/2010.png', caption: 'First Gym - Ramamurthy Nagar, Bangalore' },
  { marker: '02', year: '2011', yearLabel: 'YEAR 2', titleWhite: 'BUILDING THE PHOENIX', titleOrange: 'COMMUNITY', image: '/images/about/2011.png', caption: 'Membership growth & local recognition' },
  { marker: '03', year: '2012', yearLabel: 'YEAR 3', titleWhite: 'SECOND BRANCH', titleOrange: 'LAUNCHED', image: '/images/about/2012.png', caption: 'Phoenix Fitness - Pai Layout, Bangalore' },
  { marker: '04', year: '2018', yearLabel: 'YEAR 8', titleWhite: 'FOURTH GYM', titleOrange: 'LAUNCHED', image: '/images/about/2018.png', caption: 'Phoenix Fitness - Seegehalli, Bangalore' },
]

const leftTimeline: Milestone[] = [
  { marker: '01', year: '2016', yearLabel: 'YEAR 6', titleWhite: 'THIRD MAJOR LOCATION', titleOrange: 'LAUNCHED', image: '/images/about/2016.png', caption: 'Phoenix Fitness - Hope Farm, Whitefield' },
  { marker: '02', year: '2019', yearLabel: 'YEAR 9', titleWhite: 'MULTI-CITY EXPANSION', titleOrange: 'BEGINS', image: '/images/about/2019.png', caption: 'Phoenix Fitness - Kompally, Hyderabad & Nallurhalli, Bangalore' },
  { marker: '03', year: '2025', yearLabel: 'YEAR 15', titleWhite: 'NEW BRANCH', titleOrange: 'LAUNCHED', image: '/images/about/2025.png', caption: 'Phoenix Fitness - Budigere Bommenahalli, Bangalore' },
  { marker: '04', year: '2026', yearLabel: 'YEAR 16', titleWhite: 'BRAND GROWTH', titleOrange: 'PHASE', image: '/images/about/2026.png', caption: 'Preparing for future expansion' },
]

const mobileTimeline = [centerTimeline[0], centerTimeline[1], centerTimeline[2], leftTimeline[0], centerTimeline[3], leftTimeline[1], leftTimeline[2], leftTimeline[3]]

function MilestoneHeading({ milestone, inline = false }: { milestone: Milestone; inline?: boolean }) {
  return (
    <h3 className={`${styles.milestoneHeading} ${inline ? styles.headingInline : ''}`}>
      <span className={styles.yearNum}>{milestone.year}</span>
      <span className={styles.yearLabel}> ({milestone.yearLabel})</span>
      {inline && <span aria-hidden="true"> - </span>}
      {!inline && <br />}
      <span className={styles.titleWhite}>{milestone.titleWhite} </span>
      <span className={styles.titleOrange}>{milestone.titleOrange}</span>
    </h3>
  )
}

function MilestoneMedia({ milestone }: { milestone: Milestone }) {
  return (
    <div className={styles.mediaBlock}>
      <div className={styles.imageWrap}>
        <Image src={milestone.image} alt={`${milestone.year} - ${milestone.titleWhite} ${milestone.titleOrange}`} fill sizes="(max-width: 992px) calc(100vw - 92px), 430px" className={styles.photo} />
      </div>
      <p className={styles.caption}>{milestone.caption}</p>
    </div>
  )
}

function TimelineBadge({ marker }: { marker: string }) {
  return <span className={styles.badge}>{marker}</span>
}

export default function AboutJourney() {
  const centerLead = centerTimeline.slice(0, 3)
  const centerFinal = centerTimeline[3]
  const leftFirst = leftTimeline[0]
  const leftRemaining = leftTimeline.slice(1)

  return (
    <section id="journey" className={styles.section} aria-labelledby="journey-heading">
      <Image src="/images/about/journey_logo.png" alt="" width={620} height={588} className={styles.watermark} aria-hidden="true" />

      <div className={styles.inner}>
        <Reveal as="h2" id="journey-heading" className={styles.sectionHeading} variant="fade-up">
          <span className={styles.headingOrange}>Our 16 Year</span>
          <span className={styles.headingWhite}>Journey</span>
        </Reveal>

        <div className={styles.desktopTimeline}>
          <Stagger as="div" className={styles.centerTimeline} variant="fade-up" staggerAmount={STAGGER.loose}>
            {centerLead.map((milestone, index) => (
              <article key={milestone.year} className={`${styles.centerItem} ${index % 2 === 1 ? styles.darkBand : ''}`}>
                <div className={styles.centerHeading}><MilestoneHeading milestone={milestone} /></div>
                <div className={styles.centerRail}><TimelineBadge marker={milestone.marker} /></div>
                <MilestoneMedia milestone={milestone} />
              </article>
            ))}
          </Stagger>

          <Stagger as="div" className={styles.transitionRow} variant="fade-up" staggerAmount={STAGGER.loose}>
            <article className={styles.transitionLeft}>
              <div className={styles.transitionLeftHeading}><MilestoneHeading milestone={leftFirst} inline /></div>
              <div className={styles.leftRail}><TimelineBadge marker={leftFirst.marker} /></div>
              <MilestoneMedia milestone={leftFirst} />
            </article>

            <article className={styles.transitionCenter}>
              <div className={styles.transitionCenterHeading}><MilestoneHeading milestone={centerFinal} inline /></div>
              <div className={styles.centerRail}><TimelineBadge marker={centerFinal.marker} /></div>
              <MilestoneMedia milestone={centerFinal} />
            </article>
          </Stagger>

          <Stagger as="div" className={styles.leftTimeline} variant="fade-up" staggerAmount={STAGGER.loose}>
            {leftRemaining.map((milestone, index) => (
              <article key={milestone.year} className={`${styles.leftItem} ${index % 2 === 1 ? styles.darkBand : ''}`}>
                <div className={styles.leftRail}><TimelineBadge marker={milestone.marker} /></div>
                <MilestoneMedia milestone={milestone} />
                <div className={styles.leftHeading}><MilestoneHeading milestone={milestone} inline /></div>
              </article>
            ))}
          </Stagger>
        </div>

        <Stagger as="div" className={styles.mobileTimeline} variant="fade-up" staggerAmount={STAGGER.tight}>
          {mobileTimeline.map((milestone, index) => (
            <article key={`${milestone.year}-${index}`} className={styles.mobileItem}>
              <div className={styles.mobileRail}><TimelineBadge marker={String(index + 1).padStart(2, '0')} /></div>
              <div className={styles.mobileContent}>
                <MilestoneHeading milestone={milestone} inline />
                <MilestoneMedia milestone={milestone} />
              </div>
            </article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}


