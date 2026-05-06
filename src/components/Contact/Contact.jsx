import { useState } from 'react'
import styles from './Contact.module.css'

const SERVICES = [
  'Protetică Dentară',
  'Endodonție la Microscop',
  'Parodontologie',
  'Ortodonție',
  'Igienizare & Prevenție',
  'Stomatologie Pediatrică',
  'Nu știu încă',
]

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const INITIAL_FORM = { name: '', phone: '', email: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Câmp obligatoriu'
    if (!form.phone.trim()) e.phone = 'Câmp obligatoriu'
    if (!form.email.trim()) e.email = 'Câmp obligatoriu'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Adresă de email invalidă'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Primul pas e<br />cel mai ușor</h2>
          <p className={styles.subtext}>
            Completează formularul și te contactăm noi.<br />
            Fără formulare lungi, fără așteptare.
          </p>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><PhoneIcon /></div>
              <div>
                <p className={styles.infoLabel}>Telefon</p>
                <a href="tel:+40743169796" className={styles.infoValue}>0743 169 796</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><PinIcon /></div>
              <div>
                <p className={styles.infoLabel}>Adresă</p>
                <p className={styles.infoValue}>Str. Cezar Bolliac 66, București</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><ClockIcon /></div>
              <div>
                <p className={styles.infoLabel}>Program</p>
                <p className={styles.infoValue}>Lun–Vin 9:00–21:00</p>
                <p className={styles.infoValue}>Sâm 10:00–16:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <h3 className={styles.formHeading}>Fă o programare</h3>
            <p className={styles.formSubtext}>Completează mai jos și te sunăm noi.</p>

            {submitted ? (
              <div className={styles.success}>
                <p>Mulțumim! Te contactăm în curând.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-name">Nume</label>
                  <input
                    id="contact-name"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    type="text"
                    value={form.name}
                    onChange={set('name')}
                    autoComplete="name"
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-phone">Telefon</label>
                  <input
                    id="contact-phone"
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    type="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    autoComplete="tel"
                  />
                  {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    autoComplete="email"
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-service">Serviciu</label>
                  <div className={styles.selectWrap}>
                    <select
                      id="contact-service"
                      className={styles.select}
                      value={form.service}
                      onChange={set('service')}
                    >
                      <option value="">— Alege un serviciu —</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <span className={styles.selectArrow} aria-hidden="true">▾</span>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-message">Mesaj</label>
                  <textarea
                    id="contact-message"
                    className={styles.textarea}
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                  />
                </div>

                <button type="submit" className={styles.submit}>Trimite</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
