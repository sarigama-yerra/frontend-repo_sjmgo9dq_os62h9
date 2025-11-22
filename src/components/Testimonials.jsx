import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'PulseMail helped us recover 22% more revenue with automated abandon cart flows. The UI is delightful.',
    name: 'Ava Thompson',
    role: 'Head of Growth, Nova Commerce',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    quote: 'We launched our first onboarding sequence in under an hour. The analytics are insanely helpful.',
    name: 'Miguel Perez',
    role: 'Founder, ByteKit',
    avatar: 'https://i.pravatar.cc/100?img=33',
  },
  {
    quote: 'Subject line AI gave us a 12% uplift in open rates. The experience feels premium and fast.',
    name: 'Lena Park',
    role: 'CRM Lead, Hikari',
    avatar: 'https://i.pravatar.cc/100?img=25',
  },
]

export default function Testimonials() {
  return (
    <section className="relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(77,168,255,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-[#151628]"
        >
          Loved by modern teams
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-[#E4E6FF] bg-gradient-to-b from-white to-[#F5F6FF] p-6 shadow-[0_10px_30px_rgba(115,87,255,0.08)]"
            >
              <p className="text-[#1D1F33]/80">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full" />
                <div>
                  <div className="text-sm font-semibold text-[#151628]">{t.name}</div>
                  <div className="text-xs text-[#1D1F33]/60">{t.role}</div>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
