import { Menu, Mail, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-[#7357FF] to-[#4DA8FF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between text-white">
            <motion.a
              href="#"
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-9 w-9 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center shadow-[0_8px_30px_rgba(115,87,255,0.35)]">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="font-semibold tracking-tight">PulseMail</span>
            </motion.a>

            <nav className="hidden md:flex items-center gap-8 text-white/90">
              {[
                { label: 'Features', href: '#features' },
                { label: 'Automation', href: '#workflow' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Contact', href: '#cta' },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="hover:text-white transition-colors"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.2, duration: 0.4 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <motion.a
                href="#"
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white text-[#1D1F33] px-4 py-2 text-sm font-semibold shadow-[0_10px_30px_rgba(77,168,255,0.35)] hover:shadow-[0_10px_30px_rgba(77,168,255,0.55)] transition-shadow"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Mail className="h-4 w-4" />
                Get Started
              </motion.a>
              <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
