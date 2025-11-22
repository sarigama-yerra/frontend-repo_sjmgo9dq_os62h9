import { motion } from 'framer-motion'
import { Sparkles, Workflow, BarChart3, Users, MailOpen, Zap } from 'lucide-react'

const features = [
  {
    icon: MailOpen,
    title: 'Smart Campaigns',
    desc: 'Design beautiful emails with AI-assisted templates and auto A/B testing.',
  },
  {
    icon: Workflow,
    title: 'Visual Automation',
    desc: 'Drag-and-drop journey builder with triggers for signups, purchases, and more.',
  },
  {
    icon: BarChart3,
    title: 'Deep Analytics',
    desc: 'Track opens, clicks, and revenue with cohort and funnel insights.',
  },
  {
    icon: Users,
    title: 'Dynamic Segments',
    desc: 'Powerful filtering and real-time segments based on behavior and attributes.',
  },
  {
    icon: Zap,
    title: 'AI Personalization',
    desc: 'Subject lines, send times, and content blocks personalized to each user.',
  },
  {
    icon: Sparkles,
    title: 'Integrations',
    desc: 'Shopify, Stripe, Zapier, and 50+ more. Import data with one click.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(115,87,255,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#151628]"
          >
            Everything you need to grow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-[#1D1F33]/70"
          >
            A complete email marketing platform designed for modern brands.
          </motion.p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group rounded-2xl border border-[#E4E6FF] bg-gradient-to-b from-white to-[#F5F6FF] p-6 shadow-[0_10px_30px_rgba(115,87,255,0.08)] hover:shadow-[0_20px_50px_rgba(77,168,255,0.15)]"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#7357FF] to-[#4DA8FF] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(115,87,255,0.35)]">
                {<f.icon className="h-6 w-6" />}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#151628]">{f.title}</h3>
              <p className="mt-2 text-sm text-[#1D1F33]/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
