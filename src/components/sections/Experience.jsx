import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { resumeData } from '../../data/resumeData'

export default function Experience() {
  return (
    <section id="experience" className="py-24 section-alt">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <div className="accent-line mb-4" />
          <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-accent mb-3">Background</p>
          <h2 className="font-display font-extrabold text-[clamp(1.5rem,3.5vw,2.2rem)] tracking-tight text-white mb-3">Work Experience</h2>
          <p className="text-sm text-slate-500 max-w-lg mb-12 leading-relaxed">From C-suite strategy to hands-on product and data delivery.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-[18px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent/40 via-accent/20 to-transparent hidden md:block" />
          <div className="space-y-10">
            {resumeData.experience.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: i * 0.15 }} className="relative md:pl-14">
                <div className="absolute left-2 top-1 w-[18px] h-[18px] rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center hidden md:flex">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div className="glass-card rounded-xl p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">{exp.role}</h3>
                      <p className="text-sm font-semibold text-accent">{exp.company}</p>
                      {exp.detail && <p className="text-xs text-slate-500 mt-0.5">{exp.detail} · {exp.location}</p>}
                    </div>
                    <span className="text-xs text-slate-500 font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">{exp.date}</span>
                  </div>
                  <ul className="space-y-3 mt-4">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
