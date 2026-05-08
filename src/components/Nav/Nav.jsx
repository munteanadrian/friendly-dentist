import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'Servicii', to: '/servicii' },
  { label: 'Prima Vizită', to: '/prima-vizita' },
  { label: 'Echipă', to: '/echipa' },
  { label: 'Recenzii', to: '/recenzii' },
  { label: 'FAQ', to: '/faq' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)

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
    <nav className={`${styles.nav} ${atTop ? styles.transparent : styles.opaque}`} aria-label="Navigație principală">
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

        <Link to="/contact" className={styles.cta}>Programează-te</Link>

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
        <Link to="/contact" className={`${styles.cta} ${styles.mobileCta}`} onClick={close}>
          Programează-te
        </Link>
      </div>
    </nav>
  )
}
