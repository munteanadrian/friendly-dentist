import styles from './ContactTrust.module.css';

const cards = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    heading: 'Fără surprize de preț',
    body: 'Îți explicăm costurile exact la consultație. Nu plătești nimic fără acordul tău explicit.',
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    heading: 'Răspuns rapid',
    body: 'Te contactăm în maxim 2 ore în timpul programului. Urgențele sunt tratate în aceeași zi.',
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
    heading: 'Specialiști, nu generaliști',
    body: 'Fiecare tratament ajunge la medicul cu specializarea potrivită — nu la oricine e disponibil.',
  },
];

export default function ContactTrust() {
  return (
    <section id="contact-trust" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>de ce să ne alegi</p>
          <h2 className={styles.heading}>Transparență la fiecare pas</h2>
        </header>

        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.heading} className={styles.card}>
              <div className={styles.iconWrap}>{card.icon}</div>
              <h3 className={styles.cardHeading}>{card.heading}</h3>
              <p className={styles.cardBody}>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
