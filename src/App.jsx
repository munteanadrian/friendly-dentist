import Nav from './components/Nav/Nav.jsx'
import Hero from './components/Hero/Hero.jsx'
import Servicii from './components/Servicii/Servicii.jsx'
import PrimaVizita from './components/PrimaVizita/PrimaVizita.jsx'
import Echipa from './components/Echipa/Echipa.jsx'
import Recenzii from './components/Recenzii/Recenzii.jsx'
import FAQ from './components/FAQ/FAQ.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import WhatsApp from './components/WhatsApp/WhatsApp.jsx'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Servicii />
        <PrimaVizita />
        <Echipa />
        <Recenzii />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}

export default App
