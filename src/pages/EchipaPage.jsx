import Nav from '../components/Nav/Nav.jsx'
import PageHero from '../components/PageHero/PageHero.jsx'
import Echipa from '../components/Echipa/Echipa.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'
import WhatsApp from '../components/WhatsApp/WhatsApp.jsx'

export default function EchipaPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="specialiști, nu generaliști"
          title="Echipa"
          subtitle="Fiecare medic face un singur lucru — și îl face foarte bine. Cunoaște-i."
          theme="light"
          ghost="Echipa"
        />
        <Echipa />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
