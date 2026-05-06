import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'Servicii', href: '#servicii' },
  { label: 'Prima Vizită', href: '#prima-vizita' },
  { label: 'Echipă', href: '#echipa' },
  { label: 'Recenzii', href: '#recenzii' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Navigație principală">
      <div className={styles.inner}>
        <a href="#" className={styles.logo} aria-label="Friendly Dentist — acasă">
          <span className={styles.badge}>FD</span>
        </a>

        <ul className={styles.links} role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta}>Programează-te</a>

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
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.mobileLink} onClick={close}>{label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className={`${styles.cta} ${styles.mobileCta}`} onClick={close}>
          Programează-te
        </a>
      </div>
    </nav>
  )
}
