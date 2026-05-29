import { useState } from 'react';
import styles from './FAQAll.module.css';

const CATEGORIES = [
  {
    id: 'programare',
    label: 'Programare & Informații',
    items: [
      { q: 'Care sunt prețurile?', a: 'Fiecare caz e diferit, deci fiecare plan de tratament e cotat individual. La consultație îți explicăm costurile exact — fără surprize, fără costuri ascunse. Acceptăm CNAS și principalele asigurări private din România.' },
      { q: 'Aveți urgențe dentare?', a: 'Da. Suntem disponibili pentru urgențe în aceeași zi sau în maxim 24 de ore. Sună-ne la 0743 169 796 și găsim împreună o soluție rapidă.' },
      { q: 'Acceptați CNAS sau asigurări private?', a: 'Da! Lucrăm cu CNAS și cu principalele asigurări private din România. Sună-ne și verificăm împreună exact ce se acoperă în cazul tău.' },
    ],
  },
  {
    id: 'prima-vizita',
    label: 'Prima Vizită',
    items: [
      { q: 'Cum mă pregătesc pentru prima vizită?', a: 'Nu e nevoie de nimic special. Dacă ai fișe medicale, radiografii vechi sau o listă de medicamente pe care le iei, adu-le — ne ajută. Altfel, vino relaxat. Primele 15 minute sunt doar pentru discuție.' },
      { q: 'Trebuie să aduc ceva?', a: 'Actul de identitate pentru dosar. Dacă ai radiografii sau fișe de la alt cabinet, sunt binevenite. Altceva nu e necesar.' },
      { q: 'Cât durează o ședință?', a: 'Consultația și igienizarea durează aproximativ 45–60 de minute. Nu grăbim niciodată — mergem în ritmul tău, nu al nostru.' },
    ],
  },
  {
    id: 'copii',
    label: 'Copii',
    items: [
      { q: 'De la ce vârstă pot veni copiii?', a: 'Recomandăm prima vizită în jurul vârstei de 2–3 ani, imediat după ce apar primii dințișori. E o vizită de cunoaștere relaxată, fără proceduri — mai mult un joc cu instrumentele.' },
      { q: 'Ce faceți dacă cel mic plânge sau refuză?', a: 'Nicio problemă — nu forțăm niciodată. Avem exerciții de „joacă cu instrumentele" și putem opri oricând. Răbdarea noastră nu are limite și avem toată ziua pentru voi.' },
      { q: 'Pot sta cu copilul în cabinet?', a: 'Absolut! Părintele este binevenit în cabinet pe tot parcursul vizitei. Prezența ta îl liniștește pe cel mic — și, sincer, pe tine.' },
      { q: 'Dinții de lapte au nevoie de tratament?', a: 'Da. Dinții de lapte bolnavi pot afecta dinții permanenți care vin după ei și pot cauza dureri sau infecții. Tratamentul lor e important — și, la noi, blând.' },
    ],
  },
  {
    id: 'tratamente',
    label: 'Tratamente',
    items: [
      { q: 'Anestezia doare?', a: 'Aplicăm mai întâi un gel anestezic topic, astfel că înțepătura e abia simțită. Majoritatea pacienților sunt surprinși cât de ușor a trecut față de ce se așteptau.' },
      { q: 'Cât durează un tratament ortodontic?', a: 'De la 6 luni pentru cazuri ușoare până la 2 ani pentru aliniamente complexe. Dr. Dana Trîncă îți va spune la consultație o estimare exactă pentru cazul tău specific.' },
      { q: 'Ce e endodonția la microscop și de ce e mai bună?', a: 'Endodonția la microscop înseamnă tratament de canal cu vizualizare mărită (x20–30). Medicul vede exact ce face — precizie mai mare, disconfort mai mic și rezultate mai durabile față de tratamentul clasic.' },
    ],
  },
];

export default function FAQAll() {
  const [openKey, setOpenKey] = useState(null);

  function toggle(key) {
    setOpenKey(prev => (prev === key ? null : key));
  }

  const leftCategories = CATEGORIES.slice(0, 2);
  const rightCategories = CATEGORIES.slice(2);

  function renderCategory(category) {
    return (
      <div key={category.id} className={styles.category}>
        <h2 className={styles.categoryLabel}>{category.label}</h2>
        <div className={styles.accordionList}>
          {category.items.map((item, index) => {
            const key = `${category.id}-${index}`;
            const isOpen = openKey === key;
            return (
              <div
                key={key}
                className={`${styles.accordionItem} ${index === 0 ? styles.firstItem : ''}`}
              >
                <button
                  className={styles.trigger}
                  onClick={() => toggle(key)}
                  aria-expanded={isOpen}
                  aria-controls={`answer-${key}`}
                  id={`question-${key}`}
                >
                  <span className={styles.question}>{item.q}</span>
                  <span
                    className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={`answer-${key}`}
                  role="region"
                  aria-labelledby={`question-${key}`}
                  className={`${styles.answerPanel} ${isOpen ? styles.answerOpen : ''}`}
                >
                  <p className={styles.answerText}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <section id="faq-all" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.col}>
            {leftCategories.map(renderCategory)}
          </div>
          <div className={styles.col}>
            {rightCategories.map(renderCategory)}
          </div>
        </div>
      </div>
    </section>
  );
}
