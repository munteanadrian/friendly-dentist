import { useEffect, useRef } from 'react'
import styles from './EchipaGrid.module.css'

const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Mihaela Stănculete',
    specialty: 'Fondatoarea clinicii · Protetică',
    photo: '/CM_Photo_Art-266.webp',
    experience: '18 ani experiență',
    description:
      'Medic specialist protetică dentară și fondatoarea Friendly Dentist. Mereu gata să asculte și să ofere planuri de tratament personalizate. Pentru ea, stomatologia înseamnă mai mult decât estetică — înseamnă încredere și o relație sinceră cu fiecare pacient.',
    tags: ['Coroane ceramice', 'Fațete dentare', 'Proteze pe implanturi'],
  },
  {
    id: 2,
    name: 'Dr. Sânziana Nedelea',
    specialty: 'Protetică Dentară',
    photo: '/CM_Photo_Art-269.webp',
    experience: '12 ani experiență',
    description:
      'Votată de pacienți ca cel mai grijuliu și empatic medic. Face coroane, fațete și proteze pe implanturi. Mereu cu zâmbetul pe buze, Sânzi ajută pacienții să învingă frica de dentist!',
    tags: ['Coroane ceramice', 'Fațete dentare', 'Proteze'],
  },
  {
    id: 3,
    name: 'Dr. Dana Voicu',
    specialty: 'Endodonție',
    photo: '/CM_Photo_Art-281.webp',
    experience: '14 ani experiență',
    description:
      'Aduce speranță dinților pe care mulți îi cred fără scăpare. Specialist endodont, efectuează tratamente de canal la microscop atunci când caria a avansat mult și dintele a devenit dureros.',
    tags: ['Tratamente de canal', 'Microscop dentar', 'Urgențe dentare'],
  },
  {
    id: 4,
    name: 'Dr. Theodora Pîrvu',
    specialty: 'Parodontologie',
    photo: '/CM_Photo_Art-296.webp',
    experience: '9 ani experiență',
    description:
      'Ne învață că nu e normal ca gingiile să sângereze! Om cald, cu o răbdare de fier. Iubește ceea ce face și nu te lasă niciodată să pleci din cabinet fără periuțe interdentare.',
    tags: ['Detartraj profesional', 'Tratament parodontal', 'Chirurgie gingivală'],
  },
  {
    id: 5,
    name: 'Dr. Dana Trîncă',
    specialty: 'Ortodonție',
    photo: '/CM_Photo_Art-273.webp',
    experience: '10 ani experiență',
    description:
      'Știe că fiecare zâmbet are nevoie de un plan personalizat. Prietenoasă, răbdătoare și mereu cu gluma la ea — exact genul de om lângă care uiți că porți aparat dentar.',
    tags: ['Alinere invizibile', 'Aparat fix', 'Ortodonție la adulți'],
  },
]

export default function EchipaGrid() {
  const cardRefs = useRef([])

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
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="echipa-grid" className={styles.section}>
      <div className={styles.inner}>
        {DOCTORS.map((doctor, i) => (
          <div key={doctor.id}>
            <article
              ref={(el) => (cardRefs.current[i] = el)}
              className={`${styles.card} ${i % 2 !== 0 ? styles.cardReverse : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={styles.photoWrap}>
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className={styles.photo}
                  loading="lazy"
                />
              </div>
              <div className={styles.details}>
                <span className={styles.specialtyLabel}>{doctor.specialty}</span>
                <h2 className={styles.name}>{doctor.name}</h2>
                <span className={styles.experienceBadge}>{doctor.experience}</span>
                <hr className={styles.rule} />
                <p className={styles.bio}>{doctor.description}</p>
                <ul className={styles.tags} aria-label="Competențe">
                  {doctor.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={styles.cta}>
                  Programează-te →
                </a>
              </div>
            </article>
            {i < DOCTORS.length - 1 && <div className={styles.divider} aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  )
}
