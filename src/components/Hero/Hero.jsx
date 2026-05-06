import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.textGroup}>
          <p className={styles.eyebrow}>o nouă perspectivă asupra stomatologiei</p>
          <h1 className={styles.heading}>SE POATE ȘI</h1>
          <p className={styles.script}>altfel</p>
        </div>
        <div className={styles.cta}>
          <a href="#contact" className={styles.ctaBtn}>Programează-te</a>
          <span className={styles.subtext}>Fără obligații. Primul pas e simplu.</span>
        </div>
      </div>
    </section>
  )
}
