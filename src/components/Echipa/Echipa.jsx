import { useState, useEffect, useRef } from 'react'
import styles from './Echipa.module.css'

const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Mihaela Stănculete',
    specialty: 'Medic Primar Endodont',
    photo: '/CM_Photo_Art-266.jpg',
    studies: 'Universitatea de Medicină și Farmacie „Carol Davila", București',
    experience: '18 ani experiență',
    description:
      'Mihaela este specialista noastră în tratamente de canal. Lucrează cu precizie și răbdare, transformând una din cele mai temute proceduri într-o experiență surprinzător de calmă. Pacienții o descriu adesea ca pe cineva care „îți explică totul înainte să simți ceva".',
    tags: ['Tratamente de canal', 'Microscop dentar', 'Endodonție regenerativă'],
  },
  {
    id: 2,
    name: 'Dr. Sanziana Nedelea',
    specialty: 'Medic Specialist Protetică',
    photo: '/CM_Photo_Art-269.jpg',
    studies: 'UMF „Gr. T. Popa" Iași — specializare în protetică mobilă și fixă',
    experience: '12 ani experiență',
    description:
      'Sanziana se ocupă de restaurări estetice și funcționale — coroane, fațete, proteze. Ochiul ei pentru detaliu și simțul estetic fac diferența atunci când rezultatul trebuie să pară absolut natural.',
    tags: ['Coroane ceramice', 'Fațete dentare', 'Proteze'],
  },
  {
    id: 3,
    name: 'Dr. Dana Trincă',
    specialty: 'Medic Specialist Ortodont',
    photo: '/CM_Photo_Art-273.jpg',
    studies: 'UMF „Carol Davila" — masterat în ortodonție și ortopedie dento-facială',
    experience: '10 ani experiență',
    description:
      'Dana lucrează cu aparate clasice și alinere invizibile. Îi place să vadă transformarea completă — nu doar cum arată dinții, ci cum se simte pacientul în propria față. Abordarea ei combină tehnica cu un simț estetic atent.',
    tags: ['Alinere invizibile', 'Aparat fix', 'Ortodonție la adulți'],
  },
  {
    id: 4,
    name: 'Dr. Dana Stănculete',
    specialty: 'Medic Specialist Endodont',
    photo: '/CM_Photo_Art-281.jpg',
    studies: 'UMF „Carol Davila" — specializare postuniversitară în endodonție',
    experience: '14 ani experiență',
    description:
      'Dana aduce aceeași atenție la detalii ca toată echipa, dar cu o liniște aparte. Pacienții care vin anxioși pleacă de obicei surprinși de cât de simplu a decurs totul. Lucrează mult cu microscop dentar pentru tratamente de precizie.',
    tags: ['Retreatamente de canal', 'Microscop dentar', 'Urgențe dentare'],
  },
  {
    id: 5,
    name: 'Dr. Alina Dumitrescu',
    specialty: 'Medic Specialist Parodontolog',
    photo: '/CM_Photo_Art-296.jpg',
    studies: 'UMF „Carol Davila" — specializare în parodontologie și implantologie',
    experience: '9 ani experiență',
    description:
      'Alina se ocupă de sănătatea gingiilor și a structurilor de suport ale dinților. Știe că parodontologia e adesea ignorată până devine o problemă — de aceea pune accent pe prevenție și pe educarea pacienților în rutina zilnică.',
    tags: ['Detartraj profesional', 'Tratament parodontal', 'Chirurgie gingivală'],
  },
]

export default function Echipa() {
  const [activeDoctor, setActiveDoctor] = useState(null)
  const [current, setCurrent] = useState(0)
  const trackRef = useRef(null)
  const headerRef = useRef(null)
  const cardRefs = useRef([])

  // Scroll-in animation for header
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
      { threshold: 0.15 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  // Track which card is snapped via IntersectionObserver on each card
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const observers = cardRefs.current.map((card, i) => {
      if (!card) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.intersectionRatio >= 0.5) setCurrent(i) },
        { root: track, threshold: 0.5 }
      )
      obs.observe(card)
      return obs
    })

    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setActiveDoctor(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeDoctor ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeDoctor])

  const scrollTo = (index) => {
    const track = trackRef.current
    const card = cardRefs.current[index]
    if (track && card) {
      const scrollPos = card.offsetLeft + card.offsetWidth / 2 - track.offsetWidth / 2
      track.scrollTo({ left: scrollPos, behavior: 'smooth' })
    }
    setCurrent(index)
  }

  const prev = () => scrollTo(Math.max(0, current - 1))
  const next = () => scrollTo(Math.min(DOCTORS.length - 1, current + 1))

  return (
    <section className={styles.section} id="echipa">
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header} ref={headerRef}>
          <p className={styles.eyebrow}>specialiști, nu generaliști</p>
          <h2 className={styles.heading}>Echipa noastră</h2>
          <p className={styles.intro}>
            Fiecare medic face un singur lucru — și îl face foarte bine. Cunoaște-i.
          </p>
        </div>

        {/* Carousel */}
        <div className={styles.carouselWrap}>
          <div className={styles.track} ref={trackRef}>
            {DOCTORS.map((doc, i) => (
              <article
                key={doc.id}
                className={styles.card}
                ref={(el) => (cardRefs.current[i] = el)}
                onClick={() => setActiveDoctor(doc)}
                role="button"
                tabIndex={0}
                aria-label={`Detalii despre ${doc.name}`}
                onKeyDown={(e) => e.key === 'Enter' && setActiveDoctor(doc)}
              >
                <div className={styles.photoWrap}>
                  <img src={doc.photo} alt={doc.name} className={styles.photo} />
                  <div className={styles.cardOverlay} aria-hidden="true">
                    <span className={styles.viewMore}>Vezi profil →</span>
                  </div>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{doc.name}</h3>
                  <p className={styles.specialty}>{doc.specialty}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Arrows */}
          <button
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={prev}
            disabled={current === 0}
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={next}
            disabled={current === DOCTORS.length - 1}
            aria-label="Următor"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots} role="tablist" aria-label="Navigație medici">
          {DOCTORS.map((doc, i) => (
            <button
              key={doc.id}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => scrollTo(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={doc.name}
            />
          ))}
        </div>

      </div>

      {/* Modal */}
      {activeDoctor && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setActiveDoctor(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Profil ${activeDoctor.name}`}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setActiveDoctor(null)}
              aria-label="Închide"
            >
              ✕
            </button>

            <div className={styles.modalPhoto}>
              <img src={activeDoctor.photo} alt={activeDoctor.name} />
            </div>

            <div className={styles.modalInfo}>
              <p className={styles.modalSpecialty}>{activeDoctor.specialty}</p>
              <h2 className={styles.modalName}>{activeDoctor.name}</h2>
              <p className={styles.modalExp}>{activeDoctor.experience}</p>
              <div className={styles.divider} aria-hidden="true" />
              <p className={styles.modalStudies}>{activeDoctor.studies}</p>
              <p className={styles.modalDesc}>{activeDoctor.description}</p>
              <div className={styles.tags}>
                {activeDoctor.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <a href="#contact" className={styles.modalCta} onClick={() => setActiveDoctor(null)}>
                Programează-te
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
