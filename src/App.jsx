import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import HomePage from './pages/HomePage'
import ServiciiPage from './pages/ServiciiPage'
import PrimaVizitaPage from './pages/PrimaVizitaPage'
import EchipaPage from './pages/EchipaPage'
import RecenziiPage from './pages/RecenziiPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servicii" element={<ServiciiPage />} />
      <Route path="/prima-vizita" element={<PrimaVizitaPage />} />
      <Route path="/echipa" element={<EchipaPage />} />
      <Route path="/recenzii" element={<RecenziiPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </>
  )
}
