import Nav from '../components/Nav/Nav.jsx'
import PageHero from '../components/PageHero/PageHero.jsx'
import Recenzii from '../components/Recenzii/Recenzii.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'
import WhatsApp from '../components/WhatsApp/WhatsApp.jsx'

export default function RecenziiPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="experiențele pacienților noștri"
          title="Recenzii"
          subtitle="Peste 4.9★ din 200+ recenzii Google. Nu spunem noi — spun ei."
          theme="dark"
          ghost="Recenzii"
        />
        <Recenzii />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
