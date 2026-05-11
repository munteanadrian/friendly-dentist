import { useState, useEffect } from 'react'
import { grantConsent } from '../../utils/analytics'
import styles from './CookieBanner.module.css'

const CONSENT_KEY = 'fd_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === 'granted') {
      grantConsent()
    } else if (!stored) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'granted')
    grantConsent()
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.banner} role="dialog" aria-label="Consimțământ cookie-uri" aria-live="polite">
      <p className={styles.text}>
        Folosim cookie-uri de analiză pentru a înțelege cum este utilizat site-ul și a-l îmbunătăți.
        Poți refuza fără nicio consecință.
      </p>
      <div className={styles.actions}>
        <button className={styles.decline} onClick={decline}>Refuz</button>
        <button className={styles.accept} onClick={accept}>Accept</button>
      </div>
    </div>
  )
}
