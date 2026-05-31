import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import CookieBanner from './components/CookieBanner/CookieBanner'
import HomePage from './pages/HomePage'

const ServiciiPage = lazy(() => import('./pages/ServiciiPage'))
const PrimaVizitaPage = lazy(() => import('./pages/PrimaVizitaPage'))
const EchipaPage = lazy(() => import('./pages/EchipaPage'))
const RecenziiPage = lazy(() => import('./pages/RecenziiPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const TermeniPage = lazy(() => import('./pages/TermeniPage'))
const PoliticaPage = lazy(() => import('./pages/PoliticaPage'))

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CookieBanner />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicii" element={<ServiciiPage />} />
          <Route path="/prima-vizita" element={<PrimaVizitaPage />} />
          <Route path="/echipa" element={<EchipaPage />} />
          <Route path="/recenzii" element={<RecenziiPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/termeni-si-conditii" element={<TermeniPage />} />
          <Route path="/politica-de-confidentialitate" element={<PoliticaPage />} />
        </Routes>
      </Suspense>
    </>
  )
}
