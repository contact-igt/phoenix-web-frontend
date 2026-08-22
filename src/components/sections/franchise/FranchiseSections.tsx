import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import { DURATION, STAGGER } from '@/lib/animation/gsap'
import styles from './index.module.css'

const proofItems = [
  { value: '2010', label: 'Founded' },
  { value: '5+', label: 'Branches' },
  { value: '5000+', label: 'Community Members' },
  { value: 'Bengaluru', label: 'Built' },
]

const benefits = [
  {
    title: 'A BRAND WITH A STORY',
    body: 'Built from a transformation-first philosophy and a growing fitness community, Phoenix carries an identity that goes beyond equipment and memberships.',
  },
  {
    title: 'PREMIUM TRAINING ENVIRONMENT',
    body: 'A fitness experience built around strength, functional training, personal coaching and structured programmes.',
  },
  {
    title: 'COMMUNITY AT THE CORE',
    body: 'Phoenix is designed around relationships, accountability and a fitness culture members want to belong to.',
  },
  {
    title: 'CONSISTENT MEMBER EXPERIENCE',
    body: 'A clear brand philosophy helps each Phoenix location deliver a recognisable member experience.',
  },
  {
    title: 'BUILT FOR LOCAL GROWTH',
    body: 'Phoenix combines an established fitness identity with the local-market focus required to build a strong neighbourhood community.',
  },
  {
    title: 'GROW TOGETHER',
    body: 'We are looking for partners interested in building Phoenix for the long term - not simply operating another gym.',
  },
]

const experienceItems = [
  'Strength Training',
  'Functional Training',
  'Cardio Training',
  'Personal Training',
  'Body Assessment',
  'Member Support',
  'Group Training / Classes',
  'Premium facilities where applicable',
]

const differencePillars = [
  { title: 'COACHING', body: 'Real guidance rather than an equipment-only experience.' },
  { title: 'COMMUNITY', body: 'A place where members feel they belong.' },
  { title: 'CONSISTENCY', body: 'Strong training and member-experience standards.' },
  { title: 'TRANSFORMATION', body: 'Progress that keeps members engaged.' },
]

const supportSteps = [
  ['MARKET & LOCATION REVIEW', 'Review the proposed city, locality and property.'],
  ['FORMAT & SPACE PLANNING', 'Plan the gym around the approved Phoenix format and member journey.'],
  ['BRAND STANDARDS', "Apply Phoenix's identity consistently to the location."],
  ['TEAM PREPARATION', 'Build the right fitness and operating team for the location.'],
  ['PRE-LAUNCH PLANNING', 'Prepare the location and launch activity.'],
  ['MARKET LAUNCH', 'Introduce Phoenix to the local fitness community.'],
  ['CONTINUED COLLABORATION', 'Continue developing the location as part of the Phoenix network.'],
]

const profilePoints = [
  'Entrepreneurial mindset',
  'Interest in fitness/wellness/community businesses',
  'Customer-first thinking',
  'Commitment to Phoenix brand standards',
  'Ability to operate/develop a local business',
  'Long-term growth orientation',
  'Knowledge of the proposed local market',
  'Ability to fund the opportunity after commercial evaluation',
]

const locationSignals = ['City', 'Locality', 'Property', 'Market potential']

const journeySteps = [
  ['SUBMIT YOUR INTEREST', 'Complete the franchise enquiry.'],
  ['DISCOVERY CONVERSATION', 'Phoenix reviews suitable enquiries and begins the discussion.'],
  ['MARKET & LOCATION REVIEW', 'Evaluate the proposed city, locality and property.'],
  ['COMMERCIAL DISCUSSION', 'Suitable opportunities move into detailed commercial evaluation.'],
  ['PARTNERSHIP & PLANNING', 'Define the approved structure and development plan.'],
  ['BUILD & PREPARE', 'Prepare the location, team and launch requirements.'],
  ['LAUNCH PHOENIX', 'Begin building the new local Phoenix community.'],
]

function SplitHeading({ lines, redLineIndex }: { lines: string[]; redLineIndex?: number }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={line} className={index === redLineIndex ? styles.redText : undefined}>
          {line}
        </span>
      ))}
    </>
  )
}

function SectionLabel({ children }: { children: string }) {
  return <p className={styles.eyebrow}>{children}</p>
}

function NumberedList({ items }: { items: string[][] }) {
  return (
    <Stagger as="div" className={styles.processList} variant="fade-up" staggerAmount={STAGGER.tight}>
      {items.map(([title, body], index) => (
        <article className={styles.processItem} key={title}>
          <span className={styles.processNumber}>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        </article>
      ))}
    </Stagger>
  )
}

export function FranchiseBanner() {
  return (
    <section className={styles.hero} aria-labelledby="franchise-title">
      <Image
        src="/images/about/banner.png"
        alt="Phoenix Fitness athlete in a training environment"
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
      />
      <div className={styles.heroScrim} />
      <div className={styles.heroWatermark} aria-hidden="true">
        <Image src="/images/about/banner_bg_icon.png" alt="" fill sizes="60vw" className={styles.watermarkImage} />
      </div>

      <div className={styles.heroInner}>
        <Stagger as="div" className={styles.heroCopy} variant="fade-up" duration={DURATION.hero} staggerAmount={0.12}>
          <SectionLabel>PHOENIX FITNESS FRANCHISE</SectionLabel>
          <h1 id="franchise-title" className={styles.heroTitle}>
            <span>BUILD THE</span>
            <span className={`${styles.redText} ${styles.nextPhoenix}`}>
              <span>NEXT</span>
              <span>PHOENIX.</span>
            </span>
          </h1>
          <p className={styles.heroDescription}>
            Bring the Phoenix Fitness experience to your city. Partner with a fitness brand built around transformation,
            strong communities and disciplined coaching.
          </p>
          <div className={styles.heroActions}>
            <Link href="#franchise-form" className={styles.primaryPill}>
              BECOME A FRANCHISE PARTNER
            </Link>
            <Link href="#franchise-form" className={styles.roundButton} aria-label="Become a franchise partner">
              <ArrowUpRight size={16} strokeWidth={2.4} />
            </Link>
            <Link href="#franchise-opportunity" className={styles.secondaryPill}>
              EXPLORE THE OPPORTUNITY
            </Link>
          </div>
        </Stagger>
      </div>
    </section>
  )
}

export function FranchiseProof() {
  return (
    <section className={styles.proof} aria-label="Phoenix Fitness brand proof">
      <Stagger as="div" className={styles.proofGrid} variant="fade-up" staggerAmount={STAGGER.tight}>
        {proofItems.map((item) => (
          <div className={styles.proofItem} key={item.label}>
            <span>{item.value}</span>
            <p>{item.label}</p>
          </div>
        ))}
      </Stagger>
    </section>
  )
}

export function FranchiseOpportunity() {
  return (
    <section id="franchise-opportunity" className={styles.splitSection} aria-labelledby="opportunity-title">
      <div className={styles.splitInner}>
        <Reveal as="div" className={styles.splitCopy} variant="fade-left">
          <SectionLabel>THE OPPORTUNITY</SectionLabel>
          <h2 id="opportunity-title" className={styles.sectionTitle}>
            <SplitHeading lines={['MORE THAN A GYM.', 'BUILD A FITNESS', 'COMMUNITY.']} redLineIndex={2} />
          </h2>
          <p>
            Phoenix Fitness has grown by building training spaces where people come for more than equipment. They come
            for coaching, accountability, community and transformation.
          </p>
          <p>
            Our next phase is about taking that experience into new neighbourhoods and markets with partners who
            understand the value of building a strong local fitness community.
          </p>
        </Reveal>
        <Reveal as="div" className={styles.editorialImage} variant="fade-right">
          <Image src="/images/home/aboutimage1.png" alt="Phoenix Fitness gym training space" fill sizes="(max-width: 992px) 100vw, 580px" className={styles.coverImage} />
        </Reveal>
      </div>
    </section>
  )
}

export function FranchiseBenefits() {
  return (
    <section className={styles.benefitsSection} aria-labelledby="benefits-title">
      <div className={styles.wideInner}>
        <Reveal as="div" className={styles.sectionHeader} variant="fade-up">
          <SectionLabel>WHY PHOENIX</SectionLabel>
          <h2 id="benefits-title" className={styles.sectionTitle}>
            <SplitHeading lines={['A BRAND BUILT', 'TO RISE.']} redLineIndex={1} />
          </h2>
        </Reveal>
        <div className={styles.benefitLayout}>
          <Reveal as="div" className={styles.benefitImage} variant="fade-left">
            <Image src="/images/about/mission2.png" alt="Phoenix Fitness member training" fill sizes="(max-width: 992px) 100vw, 460px" className={styles.coverImage} />
          </Reveal>
          <Stagger as="div" className={styles.benefitList} variant="fade-up" staggerAmount={STAGGER.tight}>
            {benefits.map((item, index) => (
              <article className={styles.benefitItem} key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}

export function FranchiseExperience() {
  return (
    <section className={styles.experienceSection} aria-labelledby="experience-title">
      <div className={styles.wideInner}>
        <Reveal as="h2" id="experience-title" className={styles.bigCenteredTitle} variant="fade-up">
          <SplitHeading lines={["WHAT YOU'RE", 'BRINGING TO', 'YOUR CITY.']} redLineIndex={2} />
        </Reveal>
        <div className={styles.experienceGrid}>
          <Reveal as="div" className={styles.experienceImage} variant="fade-left">
            <Image src="/images/home/program.png" alt="Phoenix Fitness training ecosystem" fill sizes="(max-width: 992px) 100vw, 560px" className={styles.coverImage} />
          </Reveal>
          <Stagger as="ul" className={styles.trainingList} variant="fade-up" staggerAmount={STAGGER.tight}>
            {experienceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </Stagger>
        </div>
        <Reveal as="p" className={styles.note} variant="fade-up">
          Facility configuration depends on the approved Phoenix format and location.
        </Reveal>
      </div>
    </section>
  )
}

export function FranchiseDifference() {
  return (
    <section className={styles.differenceSection} aria-labelledby="difference-title">
      <div className={styles.splitInner}>
        <Reveal as="div" className={styles.splitCopy} variant="fade-left">
          <SectionLabel>THE PHOENIX DIFFERENCE</SectionLabel>
          <h2 id="difference-title" className={styles.sectionTitle}>
            <SplitHeading lines={['EQUIPMENT BUILDS A GYM.', 'COMMUNITY BUILDS', 'A BRAND.']} redLineIndex={1} />
          </h2>
        </Reveal>
        <Stagger as="div" className={styles.pillarGrid} variant="fade-up" staggerAmount={STAGGER.tight}>
          {differencePillars.map((pillar) => (
            <article className={styles.pillar} key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export function FranchiseSupport() {
  return (
    <section className={styles.processSection} aria-labelledby="support-title">
      <div className={styles.wideInner}>
        <Reveal as="div" className={styles.sectionHeader} variant="fade-up">
          <SectionLabel>PARTNERSHIP JOURNEY</SectionLabel>
          <h2 id="support-title" className={styles.sectionTitle}>
            <SplitHeading lines={['FROM LOCATION', 'TO LAUNCH.']} redLineIndex={1} />
          </h2>
        </Reveal>
        <NumberedList items={supportSteps} />
      </div>
    </section>
  )
}

export function FranchisePartnerProfile() {
  return (
    <section className={styles.profileSection} aria-labelledby="profile-title">
      <div className={styles.splitInner}>
        <Reveal as="div" className={styles.profileImage} variant="fade-left">
          <Image src="/images/about/mission4.png" alt="Phoenix Fitness coaching floor" fill sizes="(max-width: 992px) 100vw, 520px" className={styles.coverImage} />
        </Reveal>
        <Reveal as="div" className={styles.splitCopy} variant="fade-right">
          <h2 id="profile-title" className={styles.sectionTitle}>
            <SplitHeading lines={["YOU DON'T NEED", 'TO BE A TRAINER.', 'YOU NEED TO', 'BELIEVE IN THE VISION.']} redLineIndex={3} />
          </h2>
          <ul className={styles.profileList}>
            {profilePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function FranchiseLocation() {
  return (
    <section className={styles.locationSection} aria-labelledby="location-title">
      <div className={styles.wideInner}>
        <Reveal as="div" className={styles.locationCopy} variant="fade-up">
          <SectionLabel>WHERE SHOULD THE NEXT PHOENIX RISE?</SectionLabel>
          <h2 id="location-title" className={styles.sectionTitle}>
            <SplitHeading lines={['YOUR CITY', 'COULD BE NEXT.']} redLineIndex={0} />
          </h2>
          <p>
            We&apos;re exploring the next chapter of Phoenix Fitness with partners who understand their local market.
          </p>
        </Reveal>
        <Stagger as="div" className={styles.locationSignals} variant="fade-up" staggerAmount={STAGGER.tight}>
          {locationSignals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export function FranchiseJourney() {
  return (
    <section className={styles.processSection} aria-labelledby="journey-title">
      <div className={styles.wideInner}>
        <Reveal as="div" className={styles.sectionHeader} variant="fade-up">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2 id="journey-title" className={styles.sectionTitle}>
            <SplitHeading lines={['FROM ENQUIRY', 'TO OPENING DAY.']} redLineIndex={0} />
          </h2>
        </Reveal>
        <NumberedList items={journeySteps} />
      </div>
    </section>
  )
}

export function FranchiseLegacy() {
  return (
    <section className={styles.legacySection} aria-labelledby="legacy-title">
      <div className={styles.splitInner}>
        <Reveal as="div" className={styles.splitCopy} variant="fade-left">
          <h2 id="legacy-title" className={styles.sectionTitle}>
            <SplitHeading lines={['BUILT IN BENGALURU.', 'READY FOR THE', 'NEXT CHAPTER.']} redLineIndex={2} />
          </h2>
          <p>
            Phoenix Fitness was founded in 2010 and grew into multiple locations by building a community-led fitness
            experience. The current growth phase is about carrying that same Phoenix identity into the next chapter.
          </p>
          <Link href="/about#journey" className={styles.primaryPill}>
            READ OUR STORY
          </Link>
        </Reveal>
        <Reveal as="div" className={styles.editorialImage} variant="fade-right">
          <Image src="/images/about/2010.png" alt="Phoenix Fitness founding journey" fill sizes="(max-width: 992px) 100vw, 580px" className={styles.coverImage} />
        </Reveal>
      </div>
    </section>
  )
}

export function FranchiseFinalCta() {
  return (
    <section className={styles.finalCta} aria-labelledby="final-cta-title">
      <Image src="/images/home/bannerimage3.png" alt="Phoenix Fitness training community" fill sizes="100vw" className={styles.finalImage} />
      <div className={styles.finalScrim} />
      <Reveal as="div" className={styles.finalCopy} variant="fade-up">
        <SectionLabel>THE NEXT PHOENIX</SectionLabel>
        <h2 id="final-cta-title" className={styles.finalTitle}>
          <SplitHeading lines={['COULD START', 'WITH YOU.']} redLineIndex={1} />
        </h2>
        <p>Build a fitness business. Build a community. Build the next chapter of Phoenix.</p>
        <Link href="#franchise-form" className={styles.primaryPill}>
          BECOME A FRANCHISE PARTNER
        </Link>
      </Reveal>
    </section>
  )
}
