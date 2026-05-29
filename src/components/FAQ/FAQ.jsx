import { useState } from 'react'
import styles from './FAQ.module.css'

const ITEMS = [
  {
    q: 'De la ce vârstă pot veni copiii?',
    a: 'Recomandăm prima vizită în jurul vârstei de 2–3 ani, imediat după ce apar primii dințișori. E o vizită de cunoaștere relaxată, fără proceduri — mai mult un joc cu instrumentele.',
  },
  {
    q: 'Ce faceți dacă cel mic plânge sau refuză?',
    a: 'Nicio problemă — nu forțăm niciodată. Avem exerciții de „joacă cu instrumentele" și putem opri oricând. Răbdarea noastră nu are limite și avem toată ziua pentru voi.',
  },
  {
    q: 'Anestezia doare?',
    a: 'Aplicăm mai întâi un gel anestezic topic, astfel că înțepătura e abia simțită. Majoritatea pacienților sunt surprinși cât de ușor a trecut față de ce se așteptau.',
  },
  {
    q: 'Pot sta cu copilul în cabinet?',
    a: 'Absolut! Părintele este binevenit în cabinet pe tot parcursul vizitei. Prezența ta îl liniștește pe cel mic — și, sincer, pe tine.',
  },
  {
    q: 'Cât durează o ședință?',
    a: 'Consultația și igienizarea durează aproximativ 45–60 de minute. Nu grăbim niciodată — mergem în ritmul tău, nu al nostru.',
  },
  {
    q: 'Acceptați CNAS sau asigurări private?',
    a: 'Da! Lucrăm cu CNAS și cu principalele asigurări private din România. Sună-ne și verificăm împreună exact ce se acoperă în cazul tău.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Întrebări<br />Frecvente</h2>
          <p className={styles.subtext}>
            Răspunsuri sincere la cele mai frecvente întrebări.
          </p>
          <a href="tel:+40743169796" className={styles.telLink}>
            Sună-ne direct →
          </a>
        </div>

        <div className={styles.right}>
          {ITEMS.map((item, i) => (
            <div key={i} className={styles.item}>
              <button
                className={styles.trigger}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className={styles.question}>{item.q}</span>
                <span className={`${styles.icon} ${openIndex === i ? styles.iconOpen : ''}`}>+</span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`${styles.answer} ${openIndex === i ? styles.answerOpen : ''}`}
                role="region"
              >
                <p className={styles.answerText}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
