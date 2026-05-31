import { useEffect, useRef } from 'react'
import styles from './CTA.module.css'

const reasons = [
  'Prima vizită e doar o conversație — niciun instrument, nicio grabă.',
  'Programare rapidă, de obicei în aceeași săptămână.',
  'Plan de tratament cu prețuri clare, fără surprize.',
]

export default function CTA() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.inner} ref={ref}>

        <div className={styles.left}>
          <p className={styles.label}>de ce să ne alegi</p>
          <h2 className={styles.heading}>Nu trebuie<br />să știi de<br />unde să<br />începi.</h2>
        </div>

        <div className={styles.right}>
          <ul className={styles.list}>
            {reasons.map((r, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.num}>0{i + 1}</span>
                <span className={styles.text}>{r}</span>
              </li>
            ))}
          </ul>

          <div className={styles.rule} />

          <div className={styles.actions}>
            <a href="#contact" className={styles.ctaPrimary}>Programează o vizită</a>
            <a href="tel:+40743169796" className={styles.ctaPhone}>sau sună: 0743 169 796</a>
          </div>
        </div>

      </div>
    </section>
  )
}
