import Image from 'next/image'
import { ArrowUpRight, Play } from 'lucide-react'
import styles from './AboutEliteAmenities.module.css'

const services = [
  {
    id: '01',
    title: 'STEAM ROOM',
    desc: 'Post-workout recovery.',
    image: '/images/about/elite_amenities1.png',
  },
  {
    id: '02',
    title: 'LUXURY SHOWERS',
    desc: 'Hot & cold water recovery.',
    image: '/images/about/elite_amenities2.png',
  },
  {
    id: '03',
    title: 'BCA ASSESSMENT',
    desc: 'In-depth body tracking.',
    image: '/images/about/elite_amentities3.png',
  },
  {
    id: '04',
    title: 'MEMBER SUPPORT',
    desc: 'Dedicated coordinators.',
    image: '/images/about/elite_amentities4.png',
  },
  {
    id: '05',
    title: 'TAILOR-MADE',
    desc: 'Custom workout plans.',
    image: '/images/about/elite_amentities5.png',
  },
]

export default function AboutEliteAmenities() {
  return (
    <section className={styles.section} aria-labelledby="elite-amenities-title">
      <div className={styles.inner}>

        {/* LEFT COLUMN */}
        <div className={styles.leftColumn}>
          <span className={styles.eyebrow}>Our Services</span>
          <h2 id="elite-amenities-title" className={styles.heading}>
            <span className={styles.headingOrange}>Explore our</span>
            <br />
            <span className={styles.headingElite}>Elite Amenities</span>
          </h2>
          <p className={styles.body}>
            From personal training to nutrition and recovery
            &mdash; we cover what your body truly needs.
          </p>
          <div className={styles.ctaRow}>
            <div className={styles.btnGroup}>
              <button className={styles.exploreBtn}>Explore Pricing</button>
              <button className={styles.arrowCircle} aria-label="Explore pricing">
                <ArrowUpRight size={16} strokeWidth={2.2} />
              </button>
            </div>
            <div className={styles.btnGroup}>
              <button className={styles.watchBtn}>Watch Video</button>
              <button className={styles.playCircle} aria-label="Watch video">
                <Play size={12} fill="currentColor" strokeWidth={0} />
              </button>
            </div>
          </div>
          <div className={styles.leftImages}>
            <div className={styles.leftImg}>
              <Image
                src="/images/about/amentities1.png"
                alt="Gym training"
                fill
                sizes="(max-width: 992px) 50vw, 23vw"
                className={styles.leftImgPhoto}
              />
            </div>
            <div className={styles.leftImg}>
              <Image
                src="/images/about/amentities1.png"
                alt="Gym training"
                fill
                sizes="(max-width: 992px) 50vw, 23vw"
                className={styles.leftImgPhoto}
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.rightColumn}>
          {services.map((s) => (
            <div key={s.id} className={styles.serviceItem}>
              <div className={styles.serviceInfo}>
                <span className={styles.serviceTitle}>{s.title}</span>
                <span className={styles.serviceDesc}>{s.desc}</span>
              </div>
              <div className={styles.serviceMedia}>
                <div className={styles.thumb}>
                  <Image src={s.image} alt={s.title} fill sizes="120px" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <span className={styles.serviceNumber}>{s.id}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
