export default function VizitaPregatire() {
  const items = [
    {
      title: 'Act de identitate',
      subtitle: 'pentru dosarul de pacient',
    },
    {
      title: 'Radiografii sau fișe vechi',
      subtitle: 'dacă ai de la alt cabinet — ne ajută să vedem istoricul',
    },
    {
      title: 'Lista de medicamente',
      subtitle: 'în special dacă iei anticoagulante sau ai alergii',
    },
    {
      title: 'Nimic altceva',
      subtitle: 'restul e grija noastră',
    },
  ];

  return (
    <section id="vizita-pregatire" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>înainte să vii</p>
          <h2 className={styles.heading}>Ce să aduci la prima vizită</h2>
          <p className={styles.body}>
            Nu trebuie să te pregătești special. Dar dacă ai oricare din
            lucrurile de mai jos, adu-le — ne ajută să înțelegem mai bine
            situația ta.
          </p>
          <p className={styles.note}>
            Nu ai nimic din lista de mai sus? Nicio problemă. Vino cu mâinile
            goale — cel mai important e să fii acolo.
          </p>
        </div>

        <ul className={styles.right} aria-label="Ce să aduci la prima vizită">
          {items.map((item) => (
            <li key={item.title} className={styles.item}>
              <svg
                className={styles.icon}
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="10" cy="10" r="9" />
                <path d="M6 10l3 3 5-5" />
              </svg>
              <div>
                <p className={styles.itemTitle}>{item.title}</p>
                <p className={styles.itemSubtitle}>{item.subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import styles from './VizitaPregatire.module.css';
