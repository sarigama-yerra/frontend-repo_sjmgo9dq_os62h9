import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-[#7357FF] to-[#4DA8FF] p-1 shadow-[0_20px_60px_rgba(115,87,255,0.22)]"
        >
          <div className="rounded-3xl bg-gradient-to-b from-white to-[#F5F6FF] p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#151628]">
                  Start sending smarter emails today
                </h3>
                <p className="mt-3 text-[#1D1F33]/70">
                  Join thousands of brands automating their email marketing with PulseMail. Free forever on Starter.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 rounded-xl border border-[#E4E6FF] bg-white px-4 py-3 text-[#1D1F33] placeholder-[#1D1F33]/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B9FF5A]"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B9FF5A] px-6 py-3 font-semibold text-[#151628] shadow-[0_10px_30px_rgba(185,255,90,0.35)]"
                >
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
