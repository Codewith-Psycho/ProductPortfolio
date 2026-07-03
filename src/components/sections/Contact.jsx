import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight, Download } from 'lucide-react'
import { resumeData } from '../../data/resumeData'
import resumePdf from '../../../Resume/MasterResume.pdf'

export default function Contact() {
  return (
    <section id="contact" className="py-28 section-dark relative overflow-hidden">
      {/* Crimson glow pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-accent mb-6">Contact</p>

          <h2 className="font-display font-extrabold text-[clamp(1.8rem,4vw,2.5rem)] leading-tight text-white mb-6">
            If you have a problem worth solving, I want to hear about it.
          </h2>

          <p className="text-sm text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
            Open to Data/Business Analyst, PM, and Founder's Office roles (Onsite / Remote / Hybrid). PAN-based.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${resumeData.email}`} className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25">
            <Mail size={18} />
            {resumeData.email}
          </a>
          <a href={resumePdf} download="Himanshu_Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3.5 border border-accent/30 hover:border-accent text-accent-light font-semibold text-sm rounded-xl transition-all duration-300 bg-accent/5 hover:bg-accent/15">
            <Download size={18} />
            Download Resume
            <ArrowUpRight size={14} />
          </a>
          <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/10 hover:border-accent/30 text-slate-300 hover:text-white font-medium text-sm rounded-xl transition-all duration-300">
            <Linkedin size={18} />
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
          <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/10 hover:border-accent/30 text-slate-300 hover:text-white font-medium text-sm rounded-xl transition-all duration-300">
            <Github size={18} />
            GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-6 border-t border-white/5 text-center">
        <p className="text-xs text-slate-700">
          © 2026 Himanshu · Delhi, India · Built with intention, not a template.
        </p>
      </div>
    </section>
  )
}
