import { useEffect, useRef } from 'react'
import styles from './Servicii.module.css'

const SERVICES = [
  {
    num: '01',
    title: 'Protetică Dentară',
    tag: 'Estetică & Restaurare',
    body: 'Coroane, fațete, proteze — realizate pentru un zâmbet natural și durabil. Lucrăm cu laboratoare de înaltă precizie pentru rezultate care rezistă în timp.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 14h16M4 14l3-7 4 5 3-8 3 8 4-5 3 7" />
        <path d="M6 14v4a2 2 0 002 2h8a2 2 0 002-2v-4" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Endodonție la Microscop',
    tag: 'Tratamente de Canal',
    body: 'Salvăm dinții pe care mulți îi cred pierduți. Tratamentele de canal sub microscop înseamnă precizie maximă și aproape zero disconfort.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="10" r="7" />
        <path d="M16.5 15.5L21 20" strokeWidth="2" />
        <line x1="11" y1="7" x2="11" y2="13" />
        <line x1="8" y1="10" x2="14" y2="10" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Parodontologie',
    tag: 'Sănătatea Gingiilor',
    body: 'Gingii sănătoase înseamnă un zâmbet stabil. Nu e normal să sângereze — și avem soluțiile potrivite pentru tine.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 3.5C7.4 3.5 6 5 6 7c0 2 .7 5 1.8 8.5L9.3 20c.2.7.8 1.5 1.7 1.5h2c.9 0 1.5-.8 1.7-1.5L16.2 15.5C17.3 12 18 9 18 7c0-2-1.4-3.5-3-3.5-1.1 0-1.9.5-3 .5S10.1 3.5 9 3.5z" />
        <path d="M5 15.5q3-3 7-1.5 4 1.5 7-1.5" strokeDasharray="2 1.5" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Ortodonție',
    tag: 'Alinierea Dinților',
    body: 'Aparate fixe sau alinere transparente — plan personalizat, ritm potrivit ție. Nu e niciodată prea târziu să ai dinții drepți.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 13.5C5 18 8.5 21 12 21s7-3 9-7.5" />
        <path d="M3 10.5C5 6 8.5 3 12 3s7 3 9 7.5" />
        <line x1="7" y1="10.5" x2="7" y2="13.5" />
        <line x1="10" y1="9.5" x2="10" y2="14.5" />
        <line x1="14" y1="9.5" x2="14" y2="14.5" />
        <line x1="17" y1="10.5" x2="17" y2="13.5" />
        <line x1="7" y1="10.5" x2="17" y2="10.5" />
        <line x1="7" y1="13.5" x2="17" y2="13.5" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Igienizare & Prevenție',
    tag: 'Mentenanță',
    body: 'Detartraj, airflow, control periodic. Cel mai bun (și mai ieftin) tratament este prevenția.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7L12 2z" />
        <path d="M9 12l2 2 4-4" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Stomatologie Pediatrică',
    tag: 'Cei Mici',
    body: 'Prima vizită ca o amintire frumoasă — nu ca o frică de o viață. Abordare blândă, spațiu prietenos, zero presiune.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 4C8.7 4 7.5 5.3 7.5 7c0 1.5.5 4 1.5 7L10.5 17.5c.2.7.8 1 1.5 1h1c.7 0 1.3-.3 1.5-1L16 14c1-3 1.5-5.5 1.5-7 0-1.7-1.2-3-2.5-3-.8 0-1.4.4-2.5.4S10.8 4 10 4z" />
        <path d="M18 2l.8 2.5H21l-2 1.5.8 2.5L18 7l-1.8 1.5.8-2.5-2-1.5h2.2z" strokeWidth="1.2" />
      </svg>
    ),
  },
]

export default function Servicii() {
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
      { threshold: 0.08 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="servicii">
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef}>
          <div>
            <p className={styles.eyebrow}>îngrijire completă pentru toată</p>
            <h2 className={styles.heading}>FAMILIA</h2>
          </div>
          <div className={styles.headerMeta}>
            <p className={styles.description}>
              Fiecare specialist din echipă este dedicat unui domeniu, astfel că fiecare dinte al tău ajunge la cel mai bun om pentru el.
            </p>
            <a href="#contact" className={styles.cta}>Programează-te</a>
          </div>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <article
              key={s.num}
              className={styles.card}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className={styles.iconWrap}>{s.icon}</div>
              <div className={styles.cardBody}>
                <p className={styles.cardTag}>{s.tag}</p>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardText}>{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
