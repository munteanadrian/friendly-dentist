import styles from './RecenziiStats.module.css';

const stats = [
  { value: '4.9★', label: 'rating mediu Google' },
  { value: '200+', label: 'pacienți fericiți' },
  { value: '5', label: 'specialiști dedicați' },
];

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
