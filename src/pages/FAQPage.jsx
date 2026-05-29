import Nav from '../components/Nav/Nav.jsx'
import PageHero from '../components/PageHero/PageHero.jsx'
import FAQAll from '../components/FAQAll/FAQAll.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'
import WhatsApp from '../components/WhatsApp/WhatsApp.jsx'

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="răspunsuri sincere"
          title="Întrebări Frecvente"
          subtitle="Nu găsești ce cauți? Sună-ne direct — suntem oameni, nu roboți."
          theme="dark"
          ghost="FAQ"
        />
        <FAQAll />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
