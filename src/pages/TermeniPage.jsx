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
          <p className={styles.updated}>Ultima actualizare: mai 2026</p>

          <div className={styles.section}>
            <h2>1. Informații generale</h2>
            <p>
              Prezentul site web, disponibil la adresa <strong>friendlydentist.ro</strong>, este operat de
              cabinetul stomatologic <strong>Friendly Dentist</strong>, cu sediul la Str. Cezar Bolliac 66,
              București, România (denumit în continuare „Operatorul" sau „noi").
            </p>
            <p>
              Prin accesarea și utilizarea acestui site, ești de acord cu prezentele Termeni și Condiții.
              Dacă nu ești de acord cu oricare dintre prevederile de mai jos, te rugăm să nu utilizezi site-ul.
            </p>
          </div>

          <div className={styles.section}>
            <h2>2. Scopul site-ului</h2>
            <p>
              Site-ul <strong>friendlydentist.ro</strong> are caracter exclusiv informativ. Informațiile
              prezentate — descrieri de servicii, prezentarea echipei, programul de lucru — nu constituie
              consultanță medicală, diagnostic sau recomandare terapeutică.
            </p>
            <div className={styles.highlight}>
              <p>
                Orice decizie medicală trebuie luată exclusiv în urma unei consultații față în față cu un
                medic stomatolog. Completarea formularului de programare nu reprezintă un contract medical
                și nu înlocuiește o consultație clinică.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>3. Proprietate intelectuală</h2>
            <p>
              Conținutul acestui site — texte, fotografii, grafice, logo-uri, design — este proprietatea
              Friendly Dentist sau este utilizat cu acordul titularilor de drepturi. Reproducerea, distribuirea
              sau modificarea oricărui element fără acordul scris al Operatorului este interzisă.
            </p>
            <p>
              Fotografiile echipei și ale clinicii sunt realizate de CM Photo Art și nu pot fi reproduse
              fără acordul fotografului.
            </p>
          </div>

          <div className={styles.section}>
            <h2>4. Formularul de programare</h2>
            <p>
              Completarea formularului de contact sau de programare de pe site reprezintă o solicitare
              de programare, nu o confirmare a acesteia. Friendly Dentist te va contacta în cel mai scurt
              timp pentru a confirma data și ora disponibilă.
            </p>
            <p>
              Friendly Dentist nu garantează disponibilitatea unui anumit slot orar la momentul completării
              formularului.
            </p>
          </div>

          <div className={styles.section}>
            <h2>5. Limitarea răspunderii</h2>
            <p>
              Friendly Dentist depune toate eforturile pentru ca informațiile de pe site să fie corecte și
              actualizate, dar nu garantează exhaustivitatea sau acuratețea absolută a acestora. Site-ul
              poate fi temporar indisponibil din cauze tehnice fără notificare prealabilă.
            </p>
            <p>
              Operatorul nu este răspunzător pentru daune directe sau indirecte rezultate din utilizarea
              sau incapacitatea de utilizare a site-ului ori din interpretarea informațiilor prezentate.
            </p>
          </div>

          <div className={styles.section}>
            <h2>6. Linkuri externe</h2>
            <p>
              Site-ul poate conține linkuri către platforme externe (Google Maps, rețele sociale etc.).
              Aceste linkuri sunt furnizate pentru confortul utilizatorilor; Friendly Dentist nu exercită
              niciun control asupra conținutului extern și nu poate fi tras la răspundere pentru acesta.
            </p>
          </div>

          <div className={styles.section}>
            <h2>7. Modificarea termenilor</h2>
            <p>
              Ne rezervăm dreptul de a actualiza prezentele Termeni și Condiții oricând, fără notificare
              prealabilă. Versiunea în vigoare este întotdeauna cea publicată pe această pagină, cu data
              ultimei actualizări afișată în antet.
            </p>
          </div>

          <div className={styles.section}>
            <h2>8. Legea aplicabilă și soluționarea litigiilor</h2>
            <p>
              Prezentele Termeni și Condiții sunt guvernate de legislația română. Orice litigiu va fi
              soluționat pe cale amiabilă sau, în caz de eșec, de instanțele competente din România.
            </p>
            <p>
              În calitate de consumator, ai dreptul de a apela la:
            </p>
            <ul>
              <li>
                <strong>ANPC</strong> (Autoritatea Națională pentru Protecția Consumatorilor) —{' '}
                <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer">anpc.ro</a>
              </li>
              <li>
                Platforma europeană de soluționare online a litigiilor (SOL) —{' '}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                  ec.europa.eu/consumers/odr
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>9. Contact</h2>
            <p>
              Pentru orice întrebare legată de acești termeni, ne poți contacta la:{' '}
              <a href="mailto:contact@friendlydentist.ro">contact@friendlydentist.ro</a> sau telefonic
              la <a href="tel:+40743169796">0743 169 796</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
