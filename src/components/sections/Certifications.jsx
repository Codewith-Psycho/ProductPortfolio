import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import { resumeData } from '../../data/resumeData'

const issuerColors = {
  'IBM SkillsBuild': 'border-accent/20 bg-accent/5',
  'Google': 'border-emerald-500/20 bg-emerald-500/5',
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 section-darker">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <div className="accent-line mb-4" />
          <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-accent mb-3">Credentials</p>
          <h2 className="font-display font-extrabold text-[clamp(1.5rem,3.5vw,2.2rem)] tracking-tight text-white mb-12">Certifications</h2>
        </motion.div>
        <div className="space-y-5">
          {resumeData.certifications.map((group, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`rounded-xl border p-6 ${issuerColors[group.issuer] || 'border-white/10 bg-white/5'}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-display font-bold text-base text-white">{group.issuer}</span>
                {group.year && <span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded-full">{group.year}</span>}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.certs.map((cert, j) => (
                  <span key={j} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <BadgeCheck size={12} className="text-accent-light flex-shrink-0" />
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
