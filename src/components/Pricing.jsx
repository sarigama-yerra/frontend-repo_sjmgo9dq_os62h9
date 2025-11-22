import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    highlight: 'Best for new stores',
    features: ['1,000 contacts', 'Basic automation', 'Email builder', 'Community support'],
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/mo',
    highlight: 'For growing teams',
    popular: true,
    features: ['10,000 contacts', 'Advanced automation', 'A/B testing', 'Priority support'],
  },
  {
    name: 'Scale',
    price: '$149',
    period: '/mo',
    highlight: 'For high-volume senders',
    features: ['100,000 contacts', 'AI personalization', 'Multi-store', 'SLA support'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#151628]"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-[#1D1F33]/70"
          >
            Start free. Upgrade when you grow.
          </motion.p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`rounded-2xl border ${p.popular ? 'border-transparent bg-gradient-to-b from-[#EEF0FF] to-[#E4E6FF] p-[1px]' : 'border-[#E4E6FF]'}  shadow-[0_10px_30px_rgba(115,87,255,0.08)]`}
            >
              <div className={`rounded-2xl ${p.popular ? 'bg-white' : 'bg-gradient-to-b from-white to-[#F5F6FF]'} p-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#151628]">{p.name}</h3>
                    <p className="text-xs text-[#1D1F33]/60">{p.highlight}</p>
                  </div>
                  {p.popular && (
                    <span className="text-xs font-semibold rounded-full bg-[#B9FF5A] text-[#151628] px-2 py-1">Popular</span>
                  )}
                </div>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#151628]">{p.price}</span>
                  <span className="text-sm text-[#1D1F33]/60">{p.period}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-[#1D1F33]/80">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#7357FF] to-[#4DA8FF] text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold ${p.popular ? 'bg-gradient-to-r from-[#7357FF] to-[#4DA8FF] text-white shadow-[0_12px_40px_rgba(115,87,255,0.35)]' : 'border border-[#E4E6FF] text-[#1D1F33] bg-white'}`}>
                  Choose {p.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
