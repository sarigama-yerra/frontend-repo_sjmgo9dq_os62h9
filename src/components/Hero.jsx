import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="hero">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1023]/40 to-white/80" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=""
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#151628] shadow-sm ring-1 ring-[#E4E6FF] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#B9FF5A]" />
                New: AI Workflows for Shopify & Stripe
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#151628]">
                Automate email marketing with soft purple vibes
              </h1>
              <p className="mt-5 text-lg text-[#1D1F33]/80 max-w-xl">
                PulseMail helps you design, automate, and personalize campaigns that convert. Build journeys, trigger flows, and keep your audience engaged—without the busywork.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#7357FF] to-[#4DA8FF] px-6 py-3 text-white font-semibold shadow-[0_12px_40px_rgba(115,87,255,0.35)]"
                >
                  Start free trial
                </motion.a>
                <motion.a
                  whileHover={{ x: 2 }}
                  href="#features"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#E4E6FF] bg-white/80 px-6 py-3 text-[#1D1F33] shadow-sm"
                >
                  See features
                </motion.a>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-[#1D1F33]/70">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/60?img=${i}`} alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-white" />
                  ))}
                </div>
                <p>Trusted by 3,000+ brands</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:h-[540px] h-[380px] rounded-3xl"
            >
              {/* Spline canvas is background; keep right column for spacing visuals */}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
