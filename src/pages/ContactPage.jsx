import Nav from '../components/Nav/Nav.jsx'
import PageHero from '../components/PageHero/PageHero.jsx'
import ContactTrust from '../components/ContactTrust/ContactTrust.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'
import WhatsApp from '../components/WhatsApp/WhatsApp.jsx'

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="suntem aici pentru tine"
          title="Contact"
          subtitle="Primul pas e cel mai ușor. Completează formularul și te contactăm noi."
          theme="dark"
          ghost="Contact"
        />
        <ContactTrust />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
