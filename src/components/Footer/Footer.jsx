import styles from './Footer.module.css'

const NAV_LINKS = [
  { label: 'Servicii', href: '#servicii' },
  { label: 'Prima Vizită', href: '#prima-vizita' },
  { label: 'Echipă', href: '#echipa' },
  { label: 'Recenzii', href: '#recenzii' },
  { label: 'FAQ', href: '#faq' },
]

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cols}>
          <div className={styles.col}>
            <a href="#" className={styles.logo} aria-label="Friendly Dentist — acasă">
              <span className={styles.badge}>FD</span>
              <span className={styles.brandName}>Friendly Dentist</span>
            </a>
            <p className={styles.tagline}>Se poate și altfel.</p>
          </div>

          <div className={styles.col}>
            <p className={styles.colHeading}>Navigație</p>
            <ul className={styles.navLinks}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className={styles.navLink}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colHeading}>Contact</p>
            <div className={styles.contactInfo}>
              <a href="tel:+40743169796" className={styles.contactLine}>0743 169 796</a>
              <p className={styles.contactLine}>Str. Cezar Bolliac 66, București</p>
              <p className={styles.contactLine}>Lun–Vin 9:00–21:00 · Sâm 10:00–16:00</p>
            </div>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 Friendly Dentist · Toate drepturile rezervate</p>
        </div>
      </div>
    </footer>
  )
}
