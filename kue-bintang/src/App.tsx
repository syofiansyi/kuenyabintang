import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Products />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App