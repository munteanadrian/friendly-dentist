import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'
import { trackEvent } from '../../utils/analytics'

const NAV_LINKS = [
  { label: 'Acasă', to: '/' },
  { label: 'Servicii', to: '/servicii' },
  { label: 'Prima Vizită', to: '/prima-vizita' },
  { label: 'Echipă', to: '/echipa' },
  { label: 'Recenzii', to: '/recenzii' },
  { label: 'FAQ', to: '/faq' },
]

// Pages that start with a light background — nav must be opaque from the top
const LIGHT_BG_ROUTES = ['/prima-vizita', '/echipa', '/recenzii']

export default function Nav() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)

  const forcedOpaque = LIGHT_BG_ROUTES.includes(pathname)

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${(atTop && !forcedOpaque) ? styles.transparent : styles.opaque}`} aria-label="Navigație principală">
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="Friendly Dentist — acasă">
          <img src="/logo.webp" alt="Friendly Dentist" className={styles.logoImg} />
        </Link>

        <ul className={styles.links} role="list">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} className={styles.link}>{label}</Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className={styles.cta} onClick={() => trackEvent('cta_click', { location: 'nav' })}>Programează-te</Link>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Închide meniu' : 'Deschide meniu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} className={styles.mobileLink} onClick={close}>{label}</Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" className={`${styles.cta} ${styles.mobileCta}`} onClick={() => { close(); trackEvent('cta_click', { location: 'nav_mobile' }) }}>
          Programează-te
        </Link>
      </div>
    </nav>
  )
}
