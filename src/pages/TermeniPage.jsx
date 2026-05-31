import Nav from '../components/Nav/Nav.jsx'
import Footer from '../components/Footer/Footer.jsx'
import styles from './LegalPage.module.css'

export default function TermeniPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Termeni și Condiții</h1>
          <p className={styles.updated}>Ultima actualizare: ianuarie 2026</p>
          <p className={styles.placeholder}>
            Această pagină este în curs de actualizare. Te rugăm să ne contactezi la{' '}
            <a href="mailto:contact@friendlydentist.ro">contact@friendlydentist.ro</a>{' '}
            pentru orice nelămurire.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
