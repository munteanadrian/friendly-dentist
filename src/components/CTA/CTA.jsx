import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section} aria-label="Contactează-ne">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>Prima consultație e de cunoaștere</p>
          <h2 className={styles.heading}>
            Hai să ne<br />
            <span className={styles.script}>cunoaștem</span>
          </h2>
          <p className={styles.sub}>
            Fără obligații, fără presiune. Vii, discutăm, tu decizi ce urmează.
          </p>
        </div>
        <div className={styles.right}>
          <a href="tel:+40743169796" className={styles.phoneBlock}>
            <span className={styles.phoneLabel}>Suntem la telefon</span>
            <span className={styles.phoneNumber}>0743 169 796</span>
            <span className={styles.phoneHours}>Lun–Vin 9:00–21:00 · Sâm 10:00–16:00</span>
          </a>
          <div className={styles.actions}>
            <a href="#contact" className={styles.ctaPrimary}>Programează-te →</a>
            <a
              href="https://wa.me/40743169796"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              Sau scrie-ne pe WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
