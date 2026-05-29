import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section} aria-label="Contactează-ne">
      <div className={styles.inner}>

        <div className={styles.left}>
          <p className={styles.eyebrow}>ne bucurăm să te cunoaștem</p>
          <h2 className={styles.heading}>
            SUNTEM
            <span className={styles.script}>acum</span>
          </h2>
        </div>

        <div className={styles.right}>
          <p className={styles.sub}>
            Fără obligații, fără presiune. Vii, discutăm, tu decizi ce urmează.
            Nicio procedură fără acordul tău.
          </p>

          <a href="tel:+40743169796" className={styles.phone}>
            0743 169 796
          </a>
          <p className={styles.hours}>Lun–Vin 9:00–21:00 · Sâm 10:00–16:00</p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.ctaPrimary}>Programează-te</a>
            <a
              href="https://wa.me/40743169796"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              sau pe WhatsApp →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
