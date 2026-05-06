import styles from './Servicii.module.css'

const CrownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 17h18L18 8l-3.5 5L12 4 9.5 13 6 8 3 17Z"/>
    <path d="M3 17v1.5A1.5 1.5 0 004.5 20h15a1.5 1.5 0 001.5-1.5V17"/>
  </svg>
)

const MicroscopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="16" r="4"/>
    <path d="M9 12V7"/>
    <path d="M9 7h5V4"/>
    <path d="M7 4h4"/>
    <circle cx="14" cy="7" r="1.2"/>
    <path d="M5 21h8"/>
    <path d="M13 16h5a2 2 0 000-4h-5"/>
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2L4 5.5v6c0 5.2 3.5 9.5 8 11 4.5-1.5 8-5.8 8-11v-6L12 2Z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
)

const BracesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 14c0 3.5 2.5 6 8 6s8-2.5 8-6"/>
    <rect x="5" y="8" width="4" height="5" rx="1"/>
    <rect x="10" y="8" width="4" height="5" rx="1"/>
    <rect x="15" y="8" width="4" height="5" rx="1"/>
    <line x1="5" y1="10.5" x2="19" y2="10.5"/>
  </svg>
)

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/>
    <path d="M17 2l.8 2.2L20 5l-2.2.8L17 8l-.8-2.2L14 5l2.2-.8L17 2Z"/>
  </svg>
)

const ChildIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="10" r="7"/>
    <path d="M9.5 13c.7 1.3 1.5 2 2.5 2s1.8-.7 2.5-2"/>
    <circle cx="9.5" cy="9" r="1" fill="currentColor" stroke="none"/>
    <circle cx="14.5" cy="9" r="1" fill="currentColor" stroke="none"/>
    <path d="M8 20c0-1 .9-2 2-2h4c1.1 0 2 1 2 2"/>
  </svg>
)

const SERVICES = [
  {
    Icon: CrownIcon,
    title: 'Protetică Dentară',
    body: 'Coroane, fațete și proteze pe implanturi realizate cu grijă pentru un zâmbet natural și durabil.',
  },
  {
    Icon: MicroscopeIcon,
    title: 'Endodonție la Microscop',
    body: 'Salvăm dinții pe care mulți îi cred pierduți. Tratament de canal cu microscop, precis și fără durere.',
  },
  {
    Icon: ShieldIcon,
    title: 'Parodontologie',
    body: 'Gingiile sănătoase sunt fundamentul unui zâmbet frumos. Nu e normal ca ele să sângereze și o putem rezolva.',
  },
  {
    Icon: BracesIcon,
    title: 'Ortodonție',
    body: 'Aparate fixe sau aliniere transparentă — fiecare zâmbet primește planul lui personalizat, fără griji.',
  },
  {
    Icon: SparkleIcon,
    title: 'Igienizare & Prevenție',
    body: 'Detartraj, airflow și control periodic. Prevenția e cel mai simplu tratament și cel mai ieftin.',
  },
  {
    Icon: ChildIcon,
    title: 'Stomatologie Pediatrică',
    body: 'Cei mici merită o experiență blândă și distractivă. Transformăm prima vizită la dentist într-o amintire plăcută.',
  },
]

export default function Servicii() {
  return (
    <section className={styles.section} id="servicii">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>îngrijire completă pentru toată</p>
            <h2 className={styles.heading}>FAMILIA</h2>
          </div>
          <p className={styles.description}>
            Fiecare specialist din echipă este dedicat unui domeniu, astfel că fiecare dinte al tău ajunge la cel mai bun om pentru el.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map(({ Icon, title, body }) => (
            <article key={title} className={styles.card}>
              <div className={styles.icon}>
                <Icon />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
