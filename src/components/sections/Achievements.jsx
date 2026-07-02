import { motion } from 'framer-motion'
import { Crown, Medal, Award, Star } from 'lucide-react'
import { resumeData } from '../../data/resumeData'

const typeIcons = { winner: Crown, finalist: Medal, certificate: Award }
const typeColors = {
  winner: 'from-fire/20 to-amber-500/10 border-fire/20',
  finalist: 'from-accent/20 to-accent/5 border-accent/20',
  certificate: 'from-emerald-500/15 to-emerald-500/5 border-emerald-500/20',
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 section-darker">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <div className="accent-line mb-4" />
          <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-accent mb-3">Recognition</p>
          <h2 className="font-display font-extrabold text-[clamp(1.5rem,3.5vw,2.2rem)] tracking-tight text-white mb-3">Achievements & Hackathons</h2>
          <p className="text-sm text-slate-500 max-w-lg mb-2 leading-relaxed">The never-give-up mentality. Consistent Team Lead and finalist across national-level AI, Blockchain, SaaS & Product Strategy competitions (2024–2026).</p>
          <p className="text-xs text-slate-600 mb-12">Directed cross-functional squads of 4–6 members through discovery, build, and demo phases under high-stakes conditions.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resumeData.achievements.map((item, i) => {
            const Icon = typeIcons[item.type] || Star
            const color = typeColors[item.type] || typeColors.finalist
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: i * 0.06 }} className={`rounded-xl bg-gradient-to-br ${color} border p-5 hover:scale-[1.02] transition-transform duration-300 ${item.highlight ? 'ring-1 ring-accent/30' : ''}`}>
                <Icon size={20} className={item.type === 'winner' ? 'text-fire mb-3' : 'text-accent-light mb-3'} />
                <h4 className="font-semibold text-sm text-white mb-1">{item.title}</h4>
                <p className={`font-display font-bold text-base ${item.type === 'winner' ? 'text-fire-light' : 'text-accent-light'}`}>{item.result}</p>
                <p className="text-xs text-slate-500 mt-1">{item.detail}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
