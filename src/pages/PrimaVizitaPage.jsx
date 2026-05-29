import Nav from '../components/Nav/Nav.jsx'
import PageHero from '../components/PageHero/PageHero.jsx'
import PrimaVizita from '../components/PrimaVizita/PrimaVizita.jsx'
import VizitaPregatire from '../components/VizitaPregatire/VizitaPregatire.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'
import WhatsApp from '../components/WhatsApp/WhatsApp.jsx'

export default function PrimaVizitaPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="ce să te aștepți"
          title="Prima Vizită"
          subtitle="Vrem să știi exact la ce să te aștepți. Fiecare pas e gândit ca tu să te simți în control, nu ca un pacient printre pacienți."
          theme="light"
          ghost="Vizită"
        />
        <PrimaVizita />
        <VizitaPregatire />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
