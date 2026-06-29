import Image from 'next/image'
import styles from './index.module.css'

export default function TransformationStories() {
  return (
    <section id="testimonials" className={styles.transformationSection}>
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Transformation Stories in Focus</h2>
          <p className={styles.subHeading}>
            Real members. Real progress. Explore inspiring journeys and see whatâ€™s possible when you take your first step.
          </p>
        </div>

        {/* Staggered Grid of 5 Images */}
        <div className={styles.imageGrid}>
          {/* Left Column: 1 large tall image */}
          <div className={styles.leftColumn}>
            <div className={styles.tallImageWrap}>
              <Image
                src="/images/home/transformationimage1.png"
                alt="Transformation member doing heavy dumbbell rows"
                fill
                sizes="(max-width: 992px) 100vw, 50vw"
                className={styles.gridImage}
              />
            </div>
          </div>

          {/* Right Column: 2x2 grid of 4 smaller images */}
          <div className={styles.rightColumn}>
            <div className={styles.subGrid}>
              <div className={styles.smallImageWrap}>
                <Image
                  src="/images/home/transformationimage2.png"
                  alt="Trainer helping member with barbell squat"
                  fill
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
                  className={styles.gridImage}
                />
              </div>
              <div className={styles.smallImageWrap}>
                <Image
                  src="/images/home/transformationimage3.png"
                  alt="Happy gym members celebrating milestone"
                  fill
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
                  className={styles.gridImage}
                />
              </div>
              <div className={styles.smallImageWrap}>
                <Image
                  src="/images/home/transformationimage4.png"
                  alt="Modern gym floor interior"
                  fill
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
                  className={styles.gridImage}
                />
              </div>
              <div className={styles.smallImageWrap}>
                <Image
                  src="/images/home/transformationimage5.png"
                  alt="Personal coach training on cable machine"
                  fill
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
                  className={styles.gridImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Block */}
        <div className={styles.testimonialBlock}>
          {/* Row 1: Testimonial Texts */}
          <div className={styles.testimonialTextRow}>
            <div className={styles.quoteHook}>
              <h3 className={styles.quoteText}>I finally feel strong and supported.</h3>
            </div>
            <div className={styles.quoteBody}>
              <p className={styles.paragraph}>
                Before joining, I was nervous to start. But from day one, the trainers encouraged me and the community cheered me on. Every session, I feel myself getting stronger&mdash;inside and out. I&apos;m proud of how far I&apos;ve come, and excited for what&apos;s next.
              </p>
            </div>
          </div>

          {/* Horizontal divider line */}
          <div className={styles.divider}></div>

          {/* Row 2: Testimonial Metadata */}
          <div className={styles.testimonialMetaRow}>
            <div className={styles.profileInfo}>
              <div className={styles.avatarWrap}>
                <Image
                  src="/images/home/testimonial1.png"
                  alt="Jordan Ellis avatar"
                  fill
                  className={styles.avatar}
                />
              </div>
              <div className={styles.bio}>
                <h4 className={styles.memberName}>Jordan Ellis</h4>
                <p className={styles.memberTag}>Phoenix Fitness Member, 7-Month Journey</p>
              </div>
            </div>

            <div className={styles.partnerLogoWrap}>
              <div className={styles.partnerIcon}>
                <Image
                  src="/images/home/home-logo5.png"
                  alt="360LAB Logo"
                  width={110}
                  height={35}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


