import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section} aria-label="Contactează-ne">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>fără obligații, fără presiune</p>

        <h2 className={styles.heading}>
          Primul pas e
          <span className={styles.script}>simplu</span>
        </h2>

        <p className={styles.sub}>
          Vii, discutăm, tu decizi ce urmează. Nicio procedură fără acordul tău.
        </p>

        <div className={styles.divider} aria-hidden="true" />

        <a href="tel:+40743169796" className={styles.phone}>0743 169 796</a>

        <div className={styles.actions}>
          <a href="#contact" className={styles.ctaPrimary}>Programează-te</a>
          <a
            href="https://wa.me/40743169796"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
          >
            Sau pe WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
