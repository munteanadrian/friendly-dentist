import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const NAV_LINKS = [
  { label: 'Acasă', to: '/' },
  { label: 'Servicii', to: '/servicii' },
  { label: 'Prima Vizită', to: '/prima-vizita' },
  { label: 'Echipă', to: '/echipa' },
  { label: 'Recenzii', to: '/recenzii' },
  { label: 'FAQ', to: '/faq' },
]

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.94a8.27 8.27 0 004.84 1.55V7.05a4.85 4.85 0 01-1.07-.36z" />
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
          
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logoLink} aria-label="Friendly Dentist — acasă">
              <img src="/logo.webp" alt="Friendly Dentist Logo" className={styles.logoImg} />
            </Link>
            <p className={styles.tagline}>Se poate și <span className={styles.cursive}>altfel</span>.</p>
            <p className={styles.description}>O clinică dentară de familie din București, unde zâmbetele se construiesc cu răbdare, empatie și multă grijă.</p>
          </div>

          <div className={styles.col}>
            <p className={styles.colHeading}>Navigație</p>
            <ul className={styles.navLinks}>
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className={styles.navLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colHeading}>Program & Contact</p>
            <div className={styles.contactInfo}>
              <a href="tel:+40743169796" className={styles.contactLinePhone}>0743 169 796</a>
              <p className={styles.contactLine}>Str. Cezar Bolliac 66, București</p>
              <div className={styles.hours}>
                <p className={styles.contactLine}>Luni–Vineri: 9:00–21:00</p>
                <p className={styles.contactLine}>Sâmbătă: 10:00–16:00</p>
              </div>
            </div>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/friendlydentist.ro/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.tiktok.com/@dr.mihaela.stanculete" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>

        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Friendly Dentist. Toate drepturile rezervate.</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Termeni și Condiții</a>
            <span className={styles.separator}>·</span>
            <a href="#" className={styles.legalLink}>Politica de Confidențialitate</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
