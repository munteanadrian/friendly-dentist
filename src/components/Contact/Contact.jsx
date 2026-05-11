import { useState } from 'react'
import styles from './Contact.module.css'
import { trackEvent } from '../../utils/analytics'

const SERVICES = [
  'Protetică Dentară',
  'Endodonție la Microscop',
  'Parodontologie',
  'Ortodonție',
  'Igienizare & Prevenție',
  'Stomatologie Pediatrică',
  'Nu știu încă',
]

const WHATSAPP_NUMBER = '40743169796' // E.164 without +

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

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6L9 17l-5-5"/>
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

  const buildWhatsAppMessage = () => {
    const lines = [
      '🦷 *Cerere programare — Friendly Dentist*',
      '',
      `👤 *Nume:* ${form.name}`,
      `📞 *Telefon:* ${form.phone}`,
      `📧 *Email:* ${form.email}`,
      form.service ? `🔧 *Serviciu dorit:* ${form.service}` : null,
      form.message ? `💬 *Mesaj:* ${form.message}` : null,
    ].filter(Boolean)
    return encodeURIComponent(lines.join('\n'))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    trackEvent('generate_lead', { method: 'whatsapp_form', service: form.service || 'unspecified' })
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>

        {/* ── Top: Heading + tagline ── */}
        <div className={styles.topRow}>
          <div className={styles.topLeft}>
            <p className={styles.eyebrow}>Suntem aici pentru tine</p>
            <h2 className={styles.heading}>Primul pas e<br />cel mai ușor</h2>
          </div>
          <p className={styles.subtext}>
            Completează formularul și trimite-ne un mesaj direct pe WhatsApp.
            Te contactăm noi în cel mai scurt timp.
          </p>
        </div>

        {/* ── Info bar ── */}
        <div className={styles.infoBar}>
          <a href="tel:+40743169796" className={styles.infoItem} id="contact-phone-link" onClick={() => trackEvent('phone_call', { location: 'contact_section' })}>
            <div className={styles.infoIcon}><PhoneIcon /></div>
            <div className={styles.infoTexts}>
              <p className={styles.infoLabel}>Telefon</p>
              <p className={styles.infoValue}>0743 169 796</p>
            </div>
          </a>

          <div className={styles.infoDivider} />

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}><PinIcon /></div>
            <div className={styles.infoTexts}>
              <p className={styles.infoLabel}>Adresă</p>
              <p className={styles.infoValue}>Str. Cezar Bolliac 66, București</p>
            </div>
          </div>

          <div className={styles.infoDivider} />

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}><ClockIcon /></div>
            <div className={styles.infoTexts}>
              <p className={styles.infoLabel}>Program</p>
              <p className={styles.infoValue}>Lun–Vin&nbsp;9:00–21:00 · Sâm&nbsp;10:00–16:00</p>
            </div>
          </div>
        </div>

        {/* ── Main content: map + form ── */}
        <div className={styles.main}>

          {/* Map */}
          <div className={styles.mapWrap}>
            <iframe
              id="contact-map"
              title="Locație Cabinet Stomatologic Friendly Dentist"
              className={styles.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.5543710635677!2d26.082!3d44.422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4a6b5b3c1d%3A0x0!2sStrada+Cezar+Bolliac+66%2C+Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1715000000000!5m2!1sro!2sro"
            />
            <div className={styles.mapOverlay}>
              <a
                href="https://maps.google.com/?q=Strada+Cezar+Bolliac+66,+Bucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
                id="contact-map-directions"
                onClick={() => trackEvent('directions_click')}
              >
                <PinIcon />
                Deschide în Google Maps
              </a>
            </div>
          </div>

          {/* Form card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.formHeading}>Fă o programare</h3>
              <p className={styles.formSubtext}>Completează și te contactăm în cel mai scurt timp.</p>
            </div>

            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}><CheckIcon /></div>
                <p className={styles.successTitle}>Mulțumim!</p>
                <p className={styles.successMsg}>Mesajul a fost trimis pe WhatsApp. Te contactăm în curând.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-name">Nume</label>
                    <input
                      id="contact-name"
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      type="text"
                      value={form.name}
                      onChange={set('name')}
                      autoComplete="name"
                      placeholder="Ion Popescu"
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
                      placeholder="07xx xxx xxx"
                    />
                    {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                  </div>
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
                    placeholder="adresa@email.ro"
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
                  <label className={styles.label} htmlFor="contact-message">Mesaj <span className={styles.optional}>(opțional)</span></label>
                  <textarea
                    id="contact-message"
                    className={styles.textarea}
                    rows={3}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Orice detalii utile pentru noi..."
                  />
                </div>

                <button type="submit" className={styles.submit} id="contact-submit">
                  <span className={styles.submitIcon}><WhatsAppIcon /></span>
                  Trimite pe WhatsApp
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
