'use client'

import { useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Slider from 'react-slick'
import type { Settings } from 'react-slick'
import { transformations } from './data'
import TransformationCard from './TransformationCard'
import VideoModal from './VideoModal'
import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import { DURATION } from '@/lib/animation/gsap'
import styles from './index.module.css'

const AUTOPLAY_DELAY = 7000

export default function TransformationStories() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showcaseRef = useRef<HTMLDivElement>(null)
  const showcaseSliderRef = useRef<Slider | null>(null)
  const sliderRef = useRef<Slider | null>(null)
  const activeRealIndex = activeIndex % transformations.length

  const active = useMemo(
    () => transformations[activeRealIndex] ?? transformations[0],
    [activeRealIndex]
  )

  const selectTransformation = (index: number, playVideo = false) => {
    const realIndex = index % transformations.length
    setActiveIndex(realIndex)
    showcaseSliderRef.current?.slickGoTo(realIndex)
    sliderRef.current?.slickGoTo(realIndex)
    setIsExpanded(false)
    if (playVideo) {
      setIsModalOpen(true)
      return
    }
    showcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollTrack = (direction: 1 | -1) => {
    if (direction === 1) {
      sliderRef.current?.slickNext()
    } else {
      sliderRef.current?.slickPrev()
    }
  }

  const showcaseSliderSettings: Settings = {
    arrows: false,
    autoplay: false,
    cssEase: 'cubic-bezier(0.25, 1, 0.5, 1)',
    infinite: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 450,
    waitForAnimate: false,
  }

  const sliderSettings: Settings = {
    arrows: false,
    autoplay: !isModalOpen,
    autoplaySpeed: AUTOPLAY_DELAY,
    cssEase: 'cubic-bezier(0.25, 1, 0.5, 1)',
    infinite: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    speed: 450,
    swipeToSlide: true,
    waitForAnimate: false,
    beforeChange: (_current, next) => {
      const realIndex = next % transformations.length
      setActiveIndex(realIndex)
      setIsExpanded(false)
      showcaseSliderRef.current?.slickGoTo(realIndex)
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  const getDisplayParagraph = (paragraph: string) => {
    const nextTruncated = paragraph.slice(0, 180)
    return paragraph.length > 180 && !isExpanded
      ? `${nextTruncated.slice(0, nextTruncated.lastIndexOf(' ')).trim()}...`
      : paragraph
  }

  return (
    <section id="testimonials" className={styles.transformationSection}>
      <div className={styles.container}>
        {/* Header */}
        <Stagger as="div" className={styles.header} variant="fade-up" duration={DURATION.section}>
          <h2 className={styles.heading}>Real People. Real Transformations.</h2>
          <p className={styles.subHeading}>
            These are real Phoenix Fitness client transformation stories&mdash;captured on video, backed by
            measurable results, told in their own words.
          </p>
        </Stagger>

        {/* Featured Showcase — reveal wraps the slider as a whole; GSAP never touches
            individual slides since react-slick owns their transform for positioning. */}
        <Reveal
          as="div"
          variant="scale"
          duration={DURATION.section}
          style={{ width: '100%' }}
          onMouseEnter={() => sliderRef.current?.slickPause()}
          onMouseLeave={() => sliderRef.current?.slickPlay()}
        >
          <Slider ref={showcaseSliderRef} className={styles.showcaseSlider} {...showcaseSliderSettings}>
            {transformations.map((t, index) => (
              <div key={t.id}>
                <div className={styles.showcase} ref={index === activeRealIndex ? showcaseRef : undefined}>
                  <div className={styles.mediaCol}>
                    <div className={styles.mediaWrap}>
                      <Image
                        src={t.image}
                        alt={t.alt}
                        fill
                        priority={false}
                        sizes="(max-width: 992px) 100vw, 55vw"
                        className={styles.mediaImage}
                        style={{ objectPosition: t.imagePosition ?? 'top center' }}
                      />
                      {t.video && (
                        <button
                          type="button"
                          className={styles.playButton}
                          onClick={() => selectTransformation(index, true)}
                          aria-label={`Play ${t.name}'s transformation video`}
                        >
                          <Play size={22} fill="currentColor" strokeWidth={0} />
                        </button>
                      )}
                      <div className={styles.resultBadge}>
                        <span className={styles.resultValue}>{t.result}</span>
                        <span className={styles.resultLabel}>Goal: {t.goal}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.contentCol}>
                    <span className={styles.eyebrow}>Featured Transformation</span>
                    <h3 className={styles.quoteHook}>{t.quoteHook}</h3>
                    <p className={styles.paragraph}>
                      {getDisplayParagraph(t.paragraph)}
                      {t.paragraph.length > 180 && (
                        <button
                          type="button"
                          className={styles.readMore}
                          onClick={() => setIsExpanded((prev) => !prev)}
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? 'Read less' : 'Read more'}
                        </button>
                      )}
                    </p>

                    <div className={styles.divider} />

                    <div className={styles.profileRow}>
                      <div className={styles.avatarWrap}>
                        <Image
                          src={t.image}
                          alt=""
                          aria-hidden="true"
                          fill
                          className={styles.avatar}
                          style={{ objectPosition: t.imagePosition ?? 'top center' }}
                        />
                      </div>
                      <div className={styles.bio}>
                        <span className={styles.memberName}>{t.name}</span>
                        <span className={styles.memberTag}>{t.tag}</span>
                      </div>
                    </div>

                    <div className={styles.pagination} aria-label="Choose a featured transformation">
                      {transformations.map((story, storyIndex) => (
                        <button
                          key={story.id}
                          type="button"
                          aria-pressed={story.id === active.id}
                          aria-label={`Show ${story.name}'s story`}
                          className={`${styles.dot} ${story.id === active.id ? styles.dotActive : ''}`}
                          onClick={() => selectTransformation(storyIndex)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Reveal>

        {/* Secondary Carousel */}
        <Reveal as="div" className={styles.carousel} variant="fade-up" duration={DURATION.section}>
          <div className={styles.carouselHead}>
            <span className={styles.carouselLabel}>More transformation stories</span>
            <div className={styles.carouselControls}>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => scrollTrack(-1)}
                aria-label="Scroll to previous stories"
              >
                <ChevronLeft size={18} strokeWidth={2} />
              </button>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => scrollTrack(1)}
                aria-label="Scroll to next stories"
              >
                <ChevronRight size={18} strokeWidth={2} />
              </button>
            </div>
          </div>

          <Slider ref={sliderRef} className={styles.track} {...sliderSettings}>
            {transformations.map((t, index) => (
              <TransformationCard
                key={t.id}
                transformation={t}
                isActive={t.id === active.id}
                onSelect={() => selectTransformation(index, Boolean(t.video))}
              />
            ))}
          </Slider>
        </Reveal>
      </div>

      {isModalOpen && active.video && (
        <VideoModal src={active.video} label={active.name} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  )
}
