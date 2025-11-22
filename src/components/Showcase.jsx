import { motion } from 'framer-motion'

export default function Showcase() {
  return (
    <section id="workflow" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-3xl border border-[#E4E6FF] bg-gradient-to-b from-white to-[#F5F6FF] p-4 shadow-[0_20px_60px_rgba(115,87,255,0.12)]">
              <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-inner">
                <div className="flex items-center gap-2 text-xs text-[#1D1F33]/60 mb-3">
                  <div className="h-2 w-2 rounded-full bg-[#B9FF5A]" />
                  Live workflow
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {['Signup', 'Segment', 'Email', 'Wait', 'Purchase', 'Branch'].map((label, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="rounded-xl border border-[#E4E6FF] bg-gradient-to-b from-white to-[#F5F6FF] p-4 text-center shadow-sm"
                    >
                      <div className="text-sm font-semibold text-[#151628]">{label}</div>
                      <div className="mt-2 h-1 w-full rounded-full bg-gradient-to-r from-[#7357FF] to-[#4DA8FF]" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#151628]">
              Build journeys in minutes
            </h2>
            <p className="mt-4 text-[#1D1F33]/70">
              Create multi-step workflows that react to customer behavior. Use branches, delays, and conditions to craft personalized experiences at scale.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-[#1D1F33]/70">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF0FF] px-3 py-1">
                No-code builder
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF0FF] px-3 py-1">
                Event triggers
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF0FF] px-3 py-1">
                Real-time preview
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
