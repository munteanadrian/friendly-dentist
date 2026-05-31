import styles from './RecenziiStats.module.css'
import reviewsData from '../../data/reviews.json'

const ratingStr = `${reviewsData.rating.toFixed(1)}★`
const totalStr = reviewsData.total >= 100
  ? `${Math.floor(reviewsData.total / 100) * 100}+`
  : `${reviewsData.total}`

const stats = [
  { value: ratingStr, label: 'rating mediu Google' },
  { value: totalStr, label: 'recenzii Google' },
  { value: '5', label: 'specialiști dedicați' },
]

export default function RecenziiStats() {
  return (
    <section id="recenzii-stats" className={styles.section}>
      <div className={styles.inner}>
        {stats.map((stat, index) => (
          <div key={stat.label} className={styles.group}>
            <div className={styles.stat}>
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.label}>{stat.label}</p>
            </div>
            {index < stats.length - 1 && (
              <div className={styles.divider} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
