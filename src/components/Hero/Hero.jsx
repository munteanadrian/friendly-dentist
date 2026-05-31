import useParallax from '../../hooks/useParallax'
import styles from './Hero.module.css'
import { trackEvent } from '../../utils/analytics'

export default function Hero() {
  const offset = useParallax(0.35)

  return (
    <section className={styles.hero} id="hero">
      <div
        className={styles.parallaxBg}
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        aria-hidden="true"
      >
        <img
          src="/cover-fara-text.webp"
          alt=""
          className={styles.parallaxImg}
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.heroInner}>
          <div className={styles.textGroup}>
            <p className={styles.eyebrow}>o nouă perspectivă asupra stomatologiei</p>
            <h1 className={styles.heading}>SE POATE ȘI</h1>
            <p className={styles.script}>altfel</p>
          </div>
          <div className={styles.cta}>
            <a href="#contact" className={styles.ctaBtn} onClick={() => trackEvent('cta_click', { location: 'hero' })}>Programează-te</a>
            <a href="#prima-vizita" className={styles.ctaSecondary}>Cum decurge vizita →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
