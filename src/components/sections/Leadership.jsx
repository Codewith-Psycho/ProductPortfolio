import { motion } from 'framer-motion'
import { Users, Calendar, Megaphone } from 'lucide-react'
import { resumeData } from '../../data/resumeData'

const icons = [Users, Calendar, Megaphone]

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 section-alt">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <div className="accent-line mb-4" />
          <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-accent mb-3">Extracurricular</p>
          <h2 className="font-display font-extrabold text-[clamp(1.5rem,3.5vw,2.2rem)] tracking-tight text-white mb-12">Campus Leadership</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {resumeData.leadership.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <span className="text-[0.65rem] font-bold tracking-wider uppercase text-accent">{item.role}</span>
                <h3 className="font-display font-bold text-base text-white mt-1 mb-1">{item.org}</h3>
                <p className="text-xs text-slate-500 mb-4">{item.date} · {item.location}</p>
                <ul className="space-y-2">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-xs text-slate-400 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
