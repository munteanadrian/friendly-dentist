import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.text}>
          Nu ai găsit răspunsul căutat? <br />
          <span className={styles.script}>Suntem aici sa ajutam.</span>
        </h2>
        <div className={styles.indicator}>
          ↓
        </div>
      </div>
    </section>
  )
}
