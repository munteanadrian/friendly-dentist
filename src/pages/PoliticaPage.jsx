import Nav from '../components/Nav/Nav.jsx'
import Footer from '../components/Footer/Footer.jsx'
import styles from './LegalPage.module.css'

export default function PoliticaPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Politica de Confidențialitate</h1>
          <p className={styles.updated}>Ultima actualizare: mai 2026</p>

          <div className={styles.section}>
            <h2>1. Operatorul de date</h2>
            <p>
              Datele tale personale sunt prelucrate de <strong>STATIGE DENTAL SRL</strong>, persoană
              juridică română, CUI 42639302, cu sediul social în Jud. Olt, Municipiul Slatina, Strada
              Crișan Nr. 11, Bloc ZA1, Scara 6, Etaj 1, Ap. 3, ce operează cabinetul stomatologic
              Friendly Dentist la adresa Str. Cezar Bolliac 66, București.
            </p>
            <p>
              Contact: <a href="mailto:contact@friendlydentist.ro">contact@friendlydentist.ro</a> ·{' '}
              <a href="tel:+40743169796">0743 169 796</a>
            </p>
            <p>
              Această politică descrie ce date colectăm prin site-ul <strong>friendlydentist.ro</strong>,
              de ce le colectăm și ce drepturi ai în raport cu ele, în conformitate cu Regulamentul
              (UE) 2016/679 (GDPR) și legislația română aplicabilă.
            </p>
          </div>

          <div className={styles.section}>
            <h2>2. Ce date colectăm și de ce</h2>

            <h3>Formularul de programare / contact</h3>
            <p>
              Când completezi formularul de pe site, colectăm: <strong>nume</strong>,{' '}
              <strong>număr de telefon</strong>, <strong>adresă de email</strong>, serviciul de interes
              și mesajul opțional. Aceste date sunt folosite exclusiv pentru a te contacta și a stabili
              o programare.
            </p>
            <ul>
              <li><strong>Temeiul legal:</strong> Art. 6(1)(b) GDPR — măsuri precontractuale la cererea persoanei vizate.</li>
              <li><strong>Perioada de stocare:</strong> datele sunt păstrate maxim 12 luni de la ultima interacțiune, după care sunt șterse.</li>
            </ul>

            <h3>Date de analiză (Google Analytics 4)</h3>
            <p>
              Dacă accepți cookie-urile de analiză, colectăm date anonimizate despre cum este utilizat
              site-ul (pagini vizitate, timp petrecut, dispozitiv). Nu colectăm date de identificare directă
              prin Analytics.
            </p>
            <ul>
              <li><strong>Temeiul legal:</strong> Art. 6(1)(a) GDPR — consimțământul tău explicit.</li>
              <li><strong>Procesator:</strong> Google LLC (SUA) — transfer acoperit de Clauze Contractuale Standard.</li>
              <li><strong>Stocare:</strong> maxim 14 luni, conform setărilor GA4.</li>
            </ul>

            <h3>Date de comportament (Microsoft Clarity)</h3>
            <p>
              Dacă accepți cookie-urile, folosim Microsoft Clarity pentru a înțelege cum interacționează
              utilizatorii cu site-ul (hărți de căldură, sesiuni anonimizate). Nu sunt înregistrate date
              personale de identificare.
            </p>
            <ul>
              <li><strong>Temeiul legal:</strong> Art. 6(1)(a) GDPR — consimțământul tău explicit.</li>
              <li><strong>Procesator:</strong> Microsoft Corporation (SUA) — transfer acoperit de Clauze Contractuale Standard.</li>
            </ul>

            <h3>Cookie-uri tehnice</h3>
            <p>
              Site-ul stochează în localStorage preferința ta privind cookie-urile (acceptat / refuzat).
              Aceasta nu este un cookie de urmărire și nu necesită consimțământ.
            </p>
          </div>

          <div className={styles.section}>
            <h2>3. Destinatari și transferuri internaționale</h2>
            <p>
              Nu vindem și nu cedăm datele tale unor terți în scopuri comerciale. Datele pot fi accesate de:
            </p>
            <ul>
              <li><strong>Netlify Inc.</strong> — găzduirea site-ului și procesarea formularelor (SUA, transfer acoperit de DPF și SCC).</li>
              <li><strong>Google LLC</strong> — Google Analytics 4 (numai cu consimțământul tău).</li>
              <li><strong>Microsoft Corporation</strong> — Clarity (numai cu consimțământul tău).</li>
              <li>Autorități publice, dacă suntem obligați legal să divulgăm datele.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>4. Drepturile tale</h2>
            <p>
              În temeiul GDPR, ai următoarele drepturi în legătură cu datele tale personale:
            </p>
            <ul>
              <li><strong>Dreptul de acces</strong> — poți solicita o copie a datelor pe care le deținem despre tine.</li>
              <li><strong>Dreptul la rectificare</strong> — poți cere corectarea datelor inexacte.</li>
              <li><strong>Dreptul la ștergere</strong> — poți cere ștergerea datelor, în condițiile prevăzute de GDPR.</li>
              <li><strong>Dreptul la restricționarea prelucrării</strong> — poți cere limitarea prelucrării în anumite situații.</li>
              <li><strong>Dreptul la portabilitate</strong> — poți primi datele furnizate într-un format structurat, lizibil.</li>
              <li><strong>Dreptul de opoziție</strong> — poți te opune prelucrării bazate pe interesul legitim.</li>
              <li><strong>Dreptul de a retrage consimțământul</strong> — poți retrage oricând consimțământul pentru cookie-urile de analiză, fără nicio consecință.</li>
            </ul>
            <p>
              Pentru a exercita oricare dintre aceste drepturi, contactează-ne la{' '}
              <a href="mailto:contact@friendlydentist.ro">contact@friendlydentist.ro</a>. Răspundem
              în maxim 30 de zile.
            </p>
          </div>

          <div className={styles.section}>
            <h2>5. Politica privind cookie-urile</h2>
            <p>
              Folosim două categorii de cookie-uri:
            </p>
            <ul>
              <li>
                <strong>Cookie-uri tehnice / funcționale</strong> — stochează preferința ta privind
                consimțământul. Sunt necesare pentru funcționarea corectă a site-ului și nu pot fi dezactivate.
              </li>
              <li>
                <strong>Cookie-uri de analiză</strong> (Google Analytics, Microsoft Clarity) — activate
                numai cu consimțământul tău explicit. Poți refuza sau retrage oricând acordul prin
                bannerul de cookie-uri afișat la prima vizită.
              </li>
            </ul>
            <p>
              Site-ul nu folosește cookie-uri de publicitate sau de remarketing.
            </p>
          </div>

          <div className={styles.section}>
            <h2>6. Securitatea datelor</h2>
            <p>
              Transmiterea datelor se face exclusiv prin conexiuni HTTPS criptate. Datele din formulare
              sunt accesibile numai echipei Friendly Dentist și nu sunt stocate în baze de date publice.
            </p>
          </div>

          <div className={styles.section}>
            <h2>7. Plângeri</h2>
            <p>
              Dacă consideri că datele tale au fost prelucrate cu încălcarea GDPR, ai dreptul de a depune
              o plângere la autoritatea de supraveghere din România:
            </p>
            <div className={styles.highlight}>
              <p>
                <strong>ANSPDCP</strong> — Autoritatea Națională de Supraveghere a Prelucrării Datelor
                cu Caracter Personal<br />
                B-dul G-ral. Gheorghe Magheru 28–30, Sector 1, 010336 București<br />
                <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">
                  dataprotection.ro
                </a>{' '}
                · <a href="mailto:anspdcp@dataprotection.ro">anspdcp@dataprotection.ro</a>
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>8. Modificări ale politicii</h2>
            <p>
              Această politică poate fi actualizată periodic. Orice modificare semnificativă va fi
              comunicată prin afișarea noii versiuni pe această pagină cu data actualizată. Te încurajăm
              să o consulți periodic.
            </p>
          </div>

          <div className={styles.section}>
            <h2>9. Contact</h2>
            <p>
              Pentru orice întrebare legată de prelucrarea datelor tale, ne poți scrie la{' '}
              <a href="mailto:contact@friendlydentist.ro">contact@friendlydentist.ro</a> sau suna la{' '}
              <a href="tel:+40743169796">0743 169 796</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
