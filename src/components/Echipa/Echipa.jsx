import styles from './Echipa.module.css'

const DOCTORS = [
  {
    name: 'Dr. Mihaela Stănculete',
    specialty: 'Endodonție',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Dr. Sanziana Nedelea',
    specialty: 'Protetică Dentară',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Dr. Dana Trincă',
    specialty: 'Ortodonție',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Dr. Dana Stănculete',
    specialty: 'Endodonție',
    photo: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Dr. Alina Dumitrescu',
    specialty: 'Parodontologie',
    photo: 'https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=400&h=500&fit=crop&crop=face',
  },
]

export default function Echipa() {
  return (
    <section className={styles.section} id="echipa">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Echipa noastră</h2>
          <p className={styles.subtext}>Specialiști dedicați, oameni cu răbdare.</p>
          <p className={styles.intro}>
            Fiecare medic este specialist în domeniul lui — nu generaliști, ci experți care fac un singur lucru foarte bine.
          </p>
        </div>

        <div className={styles.grid}>
          {DOCTORS.map(({ name, specialty, photo }) => (
            <article key={name} className={styles.card}>
              <div className={styles.photoWrap}>
                <img src={photo} alt={name} className={styles.photo} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.specialty}>{specialty}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
