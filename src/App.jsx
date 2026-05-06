import Nav from './components/Nav/Nav.jsx'
import Hero from './components/Hero/Hero.jsx'
import Servicii from './components/Servicii/Servicii.jsx'
import PrimaVizita from './components/PrimaVizita/PrimaVizita.jsx'
import Echipa from './components/Echipa/Echipa.jsx'
import Recenzii from './components/Recenzii/Recenzii.jsx'
// TODO: import FAQ from './components/FAQ/FAQ.jsx'
// TODO: import Contact from './components/Contact/Contact.jsx'
// TODO: import Footer from './components/Footer/Footer.jsx'

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
        {/* TODO: <FAQ /> */}
        {/* TODO: <Contact /> */}
        {/* TODO: <Footer /> */}
      </main>
    </>
  )
}

export default App
