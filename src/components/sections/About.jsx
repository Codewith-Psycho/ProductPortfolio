import { motion } from 'framer-motion'
import { Rocket, Trophy, Users, Briefcase } from 'lucide-react'
import { resumeData } from '../../data/resumeData'

const highlights = [
  { icon: Briefcase, label: 'C-Suite Exposure', detail: 'Product intern reporting directly to COO at Prodigal AI' },
  { icon: Rocket, label: '3 Live Products', detail: 'Built and shipped from zero — NeeLedger, VoltIQ, Probazar' },
  { icon: Trophy, label: 'National Finalist', detail: '8+ national competitions — always as Team Lead' },
  { icon: Users, label: 'Cross-functional Leader', detail: 'Led teams of 4–6 through discovery, build, and demo phases' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
}

export default function About() {
  return (
    <section id="about" className="py-24 section-darker">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="accent-line mb-4" />
          <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-accent mb-3">About</p>
          <h2 className="font-display font-extrabold text-[clamp(1.5rem,3.5vw,2.2rem)] tracking-tight text-white mb-6">
            Product-first. Data-informed.
          </h2>
        </motion.div>

        {/* PM Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base text-slate-400 leading-relaxed max-w-3xl mb-14 animate-fade-up"
        >
          {resumeData.summary}
        </motion.p>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="glass-card rounded-xl p-5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <item.icon size={20} className="text-accent-light" />
              </div>
              <h3 className="font-semibold text-sm text-white mb-1">{item.label}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
