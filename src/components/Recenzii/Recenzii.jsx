import { useEffect, useRef } from 'react'
import styles from './Recenzii.module.css'

const REVIEWS = [
  {
    name: 'Denisa R.',
    initial: 'D',
    avatarColor: '#C9B99A',
    text: 'O experiență foarte bună! Deși am mers cu frică inițial, tot tratamentul a mers foarte bine și fără durere. Plus că odată ce interacționezi cu doamna doctor înțelegi în mod direct numele clinicii — Friendly. Recomand cu încredere!',
  },
  {
    name: 'Diana F.',
    initial: 'D',
    avatarColor: '#A8B8C8',
    text: 'Cea mai bună alegere! Ești întâmpinat cu profesionalism și o atitudine Friendly, așa cum spune și numele cabinetului. Cu siguranță o să revin.',
  },
  {
    name: 'Cristina N.',
    initial: 'C',
    avatarColor: '#B8C4A8',
    text: 'Recomand cu încredere Friendly Dentist! Personal profesionist și foarte amabil, atmosferă plăcută și servicii de calitate. M-am simțit chiar relaxată în cabinet. Cu siguranță voi reveni!',
  },
]

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
)

export default function Recenzii() {
  const headerRef = useRef(null)
  const cardRefs = useRef([])

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

  return (
    <section className={styles.section} id="recenzii">
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef}>
          <p className={styles.aggregate}>Peste 4.9 ★ — 200+ recenzii Google</p>
          <h2 className={styles.heading}>Ce spun pacienții noștri?</h2>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map(({ name, initial, avatarColor, text }, i) => (
            <article
              key={name}
              className={styles.card}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={styles.stars} aria-label="5 stele">★★★★★</div>
              <p className={styles.quote}>„{text}"</p>
              <div className={styles.reviewer}>
                <div className={styles.avatar} style={{ background: avatarColor }}>
                  {initial}
                </div>
                <div>
                  <p className={styles.reviewerName}>{name}</p>
                  <p className={styles.reviewerLabel}>pacient verificat</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <a href="#" className={styles.googleBtn}>
            <GoogleIcon />
            <span>Vezi recenziile pe Google</span>
          </a>
        </div>
      </div>
    </section>
  )
}
