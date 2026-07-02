import { motion } from 'framer-motion'
import { GraduationCap, School } from 'lucide-react'
import { resumeData } from '../../data/resumeData'

export default function Education() {
  return (
    <section id="education" className="py-24 section-dark">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <div className="accent-line mb-4" />
          <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-accent mb-3">Education</p>
          <h2 className="font-display font-extrabold text-[clamp(1.5rem,3.5vw,2.2rem)] tracking-tight text-white mb-3">Academic Foundation</h2>
          <p className="text-sm text-slate-500 max-w-lg mb-12 leading-relaxed">Undeniable proof of the ability to commit and build a strong foundation.</p>
        </motion.div>

        <div className="space-y-6">
          {/* University */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="glass-card rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">{resumeData.education[0].institution}</h3>
                  <p className="text-sm text-accent font-semibold">{resumeData.education[0].degree}</p>
                  <p className="text-xs text-slate-500 mt-1">{resumeData.education[0].date} · {resumeData.education[0].location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-accent/5 border border-accent/15 rounded-lg px-4 py-2">
                <span className="font-display font-extrabold text-2xl text-accent-light">{resumeData.education[0].cgpa}</span>
                <span className="text-xs text-slate-500">CGPA<br />{resumeData.education[0].cgpaNote}</span>
              </div>
            </div>
            <div className="mt-5 pt-5 border-t border-white/5">
              <p className="text-[0.65rem] font-bold tracking-wider uppercase text-slate-500 mb-3">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {resumeData.education[0].coursework.map((course, i) => (
                  <span key={i} className="text-xs font-medium text-slate-300 bg-white/5 border border-white/5 px-3 py-1 rounded-full hover:bg-white/10 transition-colors duration-300">{course}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* School */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.1 }} className="glass-card rounded-xl p-6 md:p-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                <School size={24} className="text-slate-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">{resumeData.education[1].institution}</h3>
                <p className="text-sm text-slate-400">{resumeData.education[1].degree}</p>
                <p className="text-xs text-slate-500 mt-1">{resumeData.education[1].date} · {resumeData.education[1].location}</p>
                <div className="flex gap-4 mt-3">
                  <div className="text-sm">
                    <span className="font-bold text-white">{resumeData.education[1].score}</span>
                    <span className="text-slate-500"> Senior Secondary</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-white">{resumeData.education[1].secondaryScore}</span>
                    <span className="text-slate-500"> Secondary</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
