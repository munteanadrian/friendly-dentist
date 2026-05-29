import { useEffect, useRef } from 'react'
import styles from './PrimaVizita.module.css'

const STEPS = [
  {
    number: '01',
    title: 'PROGRAMEZI RAPID',
    body: 'Suni, trimiți un mesaj sau folosești formularul online. De obicei găsim un loc chiar în săptămâna curentă.',
  },
  {
    number: '02',
    title: 'NE CUNOAȘTEM ÎN LINIȘTE',
    body: 'Primele 15 minute sunt doar pentru discuție. Niciun instrument, nicio grabă — doar o conversație calmă.',
  },
  {
    number: '03',
    title: 'CONTROLUL BLÂND',
    body: 'Verificăm totul cu grijă și îți explicăm în cuvinte simple ce vedem. Tu decizi ce vrei să facem mai departe.',
  },
  {
    number: '04',
    title: 'PLECI CU UN PLAN CLAR',
    body: 'Primești un plan detaliat cu prețuri transparente. Fără presiune — vii înapoi când ești gata.',
  },
]

export default function PrimaVizita() {
  const leftRef = useRef(null)
  const stepRefs = useRef([])

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
      { threshold: 0.15 }
    )

    if (leftRef.current) observer.observe(leftRef.current)
    stepRefs.current.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="prima-vizita">
      <div className={styles.container}>

        {/* Left — sticky heading column */}
        <div className={styles.left} ref={leftRef}>
          <p className={styles.eyebrow}>vrem să știi exact la ce să te aștepți</p>
          <h2 className={styles.heading}>PRIMA<br />VIZITĂ</h2>
          <p className={styles.sub}>
            Vrem să știi exact la ce să te aștepți. Nicio surpriză, nicio procedură fără acordul tău.
          </p>
          <a href="#contact" className={styles.cta}>Programează-te</a>
        </div>

        {/* Right — vertical timeline */}
        <div className={styles.right}>
          <div className={styles.line} aria-hidden="true" />
          {STEPS.map(({ number, title, body }, i) => (
            <div
              key={number}
              className={styles.step}
              ref={(el) => (stepRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={styles.stepDot} aria-hidden="true" />
              <div className={styles.stepContent}>
                <span className={styles.stepNumber}>{number}</span>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepBody}>{body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
