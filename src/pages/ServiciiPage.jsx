import Nav from '../components/Nav/Nav.jsx'
import PageHero from '../components/PageHero/PageHero.jsx'
import Servicii from '../components/Servicii/Servicii.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'
import WhatsApp from '../components/WhatsApp/WhatsApp.jsx'

export default function ServiciiPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="îngrijire completă pentru toată familia"
          title="Servicii"
          subtitle="Fiecare specialist este dedicat unui singur domeniu — astfel că fiecare dinte al tău ajunge la cel mai bun om pentru el."
          theme="dark"
          ghost="Servicii"
        />
        <Servicii />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
