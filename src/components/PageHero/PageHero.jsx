import styles from './PageHero.module.css'

export default function PageHero({ eyebrow, title, subtitle, theme = 'dark', ghost }) {
  return (
    <div className={`${styles.hero} ${theme === 'light' ? styles.light : styles.dark}`}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.rule} aria-hidden="true" />
      </div>
      <span className={styles.ghost} aria-hidden="true">{ghost || title}</span>
    </div>
  )
}
