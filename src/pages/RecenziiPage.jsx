import Nav from '../components/Nav/Nav.jsx'
import reviewsData from '../data/reviews.json'
import PageHero from '../components/PageHero/PageHero.jsx'
import RecenziiStats from '../components/RecenziiStats/RecenziiStats.jsx'
import Recenzii from '../components/Recenzii/Recenzii.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'
import WhatsApp from '../components/WhatsApp/WhatsApp.jsx'

const rating = reviewsData.rating.toFixed(1)
const total = reviewsData.total >= 100
  ? `${Math.floor(reviewsData.total / 100) * 100}+`
  : reviewsData.total

export default function RecenziiPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="experiențele pacienților noștri"
          title="Recenzii"
          subtitle={`Peste ${rating}★ din ${total} recenzii Google. Nu spunem noi — spun ei.`}
          theme="dark"
          ghost="Recenzii"
        />
        <RecenziiStats />
        <Recenzii variant="full" />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
