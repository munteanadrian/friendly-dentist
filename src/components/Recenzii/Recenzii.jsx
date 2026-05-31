import { useEffect, useRef } from 'react'
import styles from './Recenzii.module.css'
import reviewsData from '../../data/reviews.json'

const AVATAR_COLORS = ['#C9B99A', '#A8B8C8', '#B8C4A8', '#C4A8B8', '#B8B4C8']
const MAX_COMPACT = 160

function getInitial(name) {
  return name.trim().charAt(0).toUpperCase()
}

function getAvatarColor(name) {
  let hash = 0
  for (const ch of name) hash = ch.charCodeAt(0) + ((hash << 5) - hash)
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length]
}

function truncate(text, max) {
  if (text.length <= max) return { text, clipped: false }
  return { text: text.slice(0, max).trimEnd() + '…', clipped: true }
}

function Stars({ count }) {
  return (
    <div className={styles.stars} aria-label={`${count} stele`}>
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </div>
  )
}

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
)

export default function Recenzii({ variant = 'compact' }) {
  const headerRef = useRef(null)
  const cardRefs = useRef([])

  const isFull = variant === 'full'
  const reviews = reviewsData.reviews.slice(0, isFull ? 6 : 3)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const ratingDisplay = reviewsData.rating.toFixed(1)
  const totalDisplay = reviewsData.total >= 100
    ? `${Math.floor(reviewsData.total / 100) * 100}+`
    : reviewsData.total

  return (
    <section className={`${styles.section} ${isFull ? styles.sectionFull : ''}`} id="recenzii">
      <div className={styles.inner}>

        {!isFull && (
          <div className={styles.header} ref={headerRef}>
            <p className={styles.aggregate}>
              {ratingDisplay} ★ · {totalDisplay} recenzii Google
            </p>
            <h2 className={styles.heading}>Ce spun pacienții noștri?</h2>
          </div>
        )}

        <div className={`${styles.grid} ${isFull ? styles.gridFull : ''}`}>
          {reviews.map((review, i) => {
            const { text: displayText } = isFull
              ? { text: review.text }
              : truncate(review.text, MAX_COMPACT)

            return (
              <article
                key={i}
                className={`${styles.card} ${isFull ? styles.cardFull : ''}`}
                ref={(el) => (cardRefs.current[i] = el)}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.reviewerInfo}>
                    <div
                      className={styles.avatar}
                      style={{ background: getAvatarColor(review.author_name) }}
                    >
                      {getInitial(review.author_name)}
                    </div>
                    <div>
                      <p className={styles.reviewerName}>{review.author_name}</p>
                      <p className={styles.reviewerLabel}>pacient verificat Google</p>
                    </div>
                  </div>

                  <div className={styles.cardMeta}>
                    <Stars count={review.rating} />
                    {review.relative_time_description && (
                      <span className={styles.time}>{review.relative_time_description}</span>
                    )}
                  </div>
                </div>

                <p className={styles.quote}>„{displayText}"</p>
              </article>
            )
          })}
        </div>

        <div className={styles.ctaWrap}>
          <a
            href={reviewsData.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleBtn}
          >
            <GoogleIcon />
            <span>
              {isFull ? 'Lasă o recenzie pe Google' : 'Lasă o recenzie pe Google'}
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}
