import { motion } from 'framer-motion'
import { Brain, Cog, Server, ShieldAlert, Award } from 'lucide-react'
import { resumeData } from '../../data/resumeData'

const categoryIcons = [Brain, Cog, Server, ShieldAlert, Award]
const categoryGradients = [
  'from-accent/20 to-accent/5',
  'from-fire/20 to-fire/5',
  'from-purple-500/15 to-purple-500/5',
  'from-emerald-500/15 to-emerald-500/5',
  'from-blue-500/15 to-blue-500/5',
]
const categoryAccents = [
  'text-accent-light',
  'text-fire-light',
  'text-purple-400',
  'text-emerald-400',
  'text-blue-400',
]
const categoryBorders = [
  'border-accent/15 hover:border-accent/30',
  'border-fire/15 hover:border-fire/30',
  'border-purple-500/15 hover:border-purple-500/30',
  'border-emerald-500/15 hover:border-emerald-500/30',
  'border-blue-500/15 hover:border-blue-500/30',
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 section-dark">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="accent-line mb-4" />
          <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-accent mb-3">Capabilities</p>
          <h2 className="font-display font-extrabold text-[clamp(1.5rem,3.5vw,2.2rem)] tracking-tight text-white mb-3">
            Skills & Tools
          </h2>
          <p className="text-sm text-slate-500 max-w-lg mb-12 leading-relaxed">
            Rooted in product thinking. Backed by technical depth and cross-functional execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resumeData.skills.map((skill, i) => {
            const Icon = categoryIcons[i] || Brain
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`glass-card rounded-xl p-6 border ${categoryBorders[i] || 'border-white/10'} transition-all duration-400`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryGradients[i] || 'from-white/10 to-white/5'} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={categoryAccents[i] || 'text-slate-300'} />
                </div>
                <h3 className={`font-display font-bold text-base ${categoryAccents[i] || 'text-white'} mb-3`}>
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span
                      key={j}
                      className="text-xs font-medium text-slate-300 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg hover:bg-white/10 hover:text-white hover:border-accent/15 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
