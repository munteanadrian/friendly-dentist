import styles from './PrimaVizita.module.css'

const STEPS = [
  {
    number: '01',
    title: 'PROGRAMEZI RAPID',
    body: 'Suni, trimiți un mesaj sau folosești formularul online. De obicei găsim un loc chiar în săptămâna curentă.',
  },
  {
    number: '02',
    title: 'NE CUNOAȘTEM',
    body: 'Primele 15 minute sunt doar pentru discuție. Niciun instrument, nicio grabă, doar o conversație calmă.',
  },
  {
    number: '03',
    title: 'CONTROLUL BLÂND',
    body: 'Verificăm totul cu grijă și îți explicăm în cuvinte simple ce vedem. Tu decizi ce vrei să facem mai departe.',
  },
  {
    number: '04',
    title: 'PLAN CLAR',
    body: 'Primești un plan detaliat cu prețuri transparente. Fără presiune — vii înapoi când ești gata.',
  },
]

export default function PrimaVizita() {
  return (
    <section className={styles.section} id="prima-vizita">
      <div className={styles.imageWrap}>
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.textContent}>
          <p className={styles.eyebrow}>vrem să știi exact la ce să te aștepți</p>
          <h2 className={styles.heading}>PRIMA VIZITĂ</h2>
        </div>
      </div>

      <div className={styles.stepsWrap}>
        <div className={styles.grid}>
          {STEPS.map(({ number, title, body }) => (
            <article key={number} className={styles.card}>
              <span className={styles.number}>{number}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
