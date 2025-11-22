import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F7FF_45%,#FFFFFF_100%)] text-[#1D1F33]">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Testimonials />
      <Pricing />
      <CTA />
      <footer className="border-t border-[#E4E6FF] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#1D1F33]/70">
            <p>© {new Date().getFullYear()} PulseMail. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#151628]">Privacy</a>
              <a href="#" className="hover:text-[#151628]">Terms</a>
              <a href="#" className="hover:text-[#151628]">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
