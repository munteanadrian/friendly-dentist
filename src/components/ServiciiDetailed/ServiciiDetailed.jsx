import { useEffect, useRef } from 'react'
import styles from './ServiciiDetailed.module.css'

const SERVICES = [
  {
    num: '01',
    title: 'Protetică Dentară',
    tag: 'Estetică & Restaurare',
    specialist: 'Dr. Mihaela Stănculete & Dr. Sânziana Nedelea',
    specialistLabel: 'Protetică',
    description:
      'Coroanele, fațetele și protezele realizate la Friendly Dentist urmează un singur principiu: rezultatul trebuie să pară că n-ai avut niciodată o problemă. Lucrăm cu laboratoare de înaltă precizie și materiale biocompatibile — fiecare lucrare e personalizată estetic și funcțional, nu fabricată în serie.',
    ideal: [
      'ai dinți deteriorați sau lipsă',
      'vrei să îmbunătățești aspectul zâmbetului',
      'ai implanturi care necesită lucrări protetice',
    ],
    photo: 'https://picsum.photos/seed/protetica/800/560',
    photoAlt: 'Zâmbet frumos după tratament protetic',
    bg: 'light',
  },
  {
    num: '02',
    title: 'Endodonție la Microscop',
    tag: 'Tratamente de Canal',
    specialist: 'Dr. Dana Voicu',
    specialistLabel: 'Endodonție',
    description:
      'Tratamentele de canal au reputația de a fi neplăcute — în mare parte pentru că mulți le-au experimentat fără microscop și fără anestezie modernă. La noi, lucrăm exclusiv sub microscop: precizie chirurgicală, disconfort minim. Salvăm dinții pe care alți medici i-ar extrage.',
    ideal: [
      'ai dureri acute la rece, cald sau spontane',
      'dintele a început să se închidă la culoare',
      'ai o carie profundă sau o infecție',
    ],
    photo: 'https://picsum.photos/seed/endodontie/800/560',
    photoAlt: 'Echipament modern de endodonție la microscop',
    bg: 'white',
  },
  {
    num: '03',
    title: 'Parodontologie',
    tag: 'Sănătatea Gingiilor',
    specialist: 'Dr. Theodora Pîrvu',
    specialistLabel: 'Parodontologie',
    description:
      'Gingiile care sângerează la periaj nu sunt normale — sunt un semnal. Parodontologia tratează inflamațiile și infecțiile tisulare din jurul dinților, structurile care îi țin în loc. Neglijată, parodontita duce la pierderea dinților. Tratată la timp, se poate controla complet.',
    ideal: [
      'gingiile sângerează la periaj sau spontan',
      'observi retracție gingivală sau dinți care par mai lungi',
      'ai respirație urât mirositoare persistentă',
    ],
    photo: 'https://picsum.photos/seed/parodontologie/800/560',
    photoAlt: 'Consultație stomatologică la cabinet',
    bg: 'light',
  },
  {
    num: '04',
    title: 'Ortodonție',
    tag: 'Alinierea Dinților',
    specialist: 'Dr. Dana Trîncă',
    specialistLabel: 'Ortodonție',
    description:
      'Dinții strâmbi sau mușcătura incorectă nu sunt doar o problemă estetică — afectează modul în care mesteci, vorbești și te simți. Oferim aparate fixe și alinere transparente, ambele cu planuri strict individuale. Nimeni nu primește același tratament ca altcineva.',
    ideal: [
      'ai dinți îngrămădiți sau cu spații',
      'mușcătura nu e corectă (overbite, underbite, crossbite)',
      'vrei o alternativă invizibilă la aparat dentar clasic',
    ],
    photo: 'https://picsum.photos/seed/ortodontie/800/560',
    photoAlt: 'Tratament ortodontic cu alinere transparente',
    bg: 'white',
  },
  {
    num: '05',
    title: 'Igienizare & Prevenție',
    tag: 'Mentenanță',
    specialist: 'Echipa Friendly Dentist',
    specialistLabel: 'Prevenție',
    description:
      'Detartrajul, airflow și controalele periodice nu sunt opționale — sunt fundamentul oricărui plan de sănătate dentară. Recomandăm igienizare profesională la fiecare 6 luni. E cel mai simplu lucru pe care îl poți face pentru dinții tăi și, pe termen lung, cel mai ieftin.',
    ideal: [
      'nu ai mai fost la dentist de peste 6 luni',
      'simți o peliculă persistentă pe dinți',
      'vrei să previi problemele înainte să apară',
    ],
    photo: 'https://picsum.photos/seed/igienizare/800/560',
    photoAlt: 'Igienizare profesională și detartraj',
    bg: 'light',
  },
  {
    num: '06',
    title: 'Stomatologie Pediatrică',
    tag: 'Cei Mici',
    specialist: 'Echipa Friendly Dentist',
    specialistLabel: 'Pediatrie',
    description:
      'Frica de dentist se formează la primele vizite. De aceea, prima vizită a copilului la noi nu e o consultație — e o vizită de cunoaștere. Niciun instrument nu iese dacă cel mic nu vrea. Lucrăm în ritmul lui, cu răbdare și cu mult joc. Obiectivul nostru: să plece cu un zâmbet.',
    ideal: [
      'copilul tău are 2+ ani și nu a mai fost la dentist',
      'are frică sau anxietate față de stomatolog',
      'are dureri sau pete pe dinți de lapte',
    ],
    photo: 'https://picsum.photos/seed/pediatrica/800/560',
    photoAlt: 'Copil relaxat la consultație stomatologică',
    bg: 'white',
  },
]

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
      <path d="M2 6.5L4.5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ServiciiDetailed() {
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    const current = sectionRefs.current
    current.forEach((el) => { if (el) observer.observe(el) })
    return () => current.forEach((el) => { if (el) observer.unobserve(el) })
  }, [])

  return (
    <div id="servicii-detalii">
      {SERVICES.map((service, index) => (
        <section
          key={service.num}
          className={`${styles.serviceSection} ${styles[service.bg]}`}
          ref={(el) => (sectionRefs.current[index] = el)}
          aria-labelledby={`service-title-${service.num}`}
        >
          <div className={`${styles.inner} ${index % 2 !== 0 ? styles.reverse : ''}`}>

            <div className={styles.content}>
              <span className={styles.serviceNum}>{service.num}</span>
              <h2 id={`service-title-${service.num}`} className={styles.title}>
                {service.title}
              </h2>
              <span className={styles.tag}>{service.tag}</span>
              <p className={styles.description}>{service.description}</p>

              <div className={styles.specialist}>
                <span className={styles.specialistLabel}>Specialist:</span>
                <span className={styles.specialistName}>{service.specialist}</span>
              </div>

              <div className={styles.ideal}>
                <p className={styles.idealHeading}>Ideal dacă:</p>
                <ul className={styles.idealList}>
                  {service.ideal.map((item, i) => (
                    <li key={i} className={styles.idealItem}>
                      <span className={styles.checkIcon}><CheckIcon /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact" className={styles.cta}>Programează consultație →</a>
            </div>

            <div className={styles.photoCol}>
              <img
                src={service.photo}
                alt={service.photoAlt}
                className={styles.photo}
                loading="lazy"
              />
            </div>

          </div>
        </section>
      ))}
    </div>
  )
}
