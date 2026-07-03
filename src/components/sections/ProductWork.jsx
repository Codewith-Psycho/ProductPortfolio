import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { resumeData } from '../../data/resumeData'
import { useGlowEffect } from '../../hooks/useGlowEffect'

function CaseCard({ project, index, isHero }) {
  const [expanded, setExpanded] = useState(false)
  const { onMouseMove } = useGlowEffect()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className={`glass-card rounded-2xl overflow-hidden glow-border ${isHero ? 'md:col-span-2' : ''}`}
    >
      <div className={`p-6 ${isHero ? 'md:p-10' : 'md:p-8'}`}>
        {/* Tags + Date */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className={`text-[0.65rem] font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${i === 0 ? 'bg-accent/15 text-accent-light border border-accent/20' : 'bg-white/5 text-slate-400 border border-white/5'}`}>{tag}</span>
            ))}
          </div>
          <span className="text-xs text-slate-600">{project.date}</span>
        </div>

        {/* Title + Meta */}
        <h3 className={`font-display font-bold text-white mb-1 ${isHero ? 'text-2xl' : 'text-xl'}`}>{project.title}</h3>
        <p className="text-sm text-slate-500 mb-1">{project.subtitle}</p>
        <p className="text-xs text-accent font-medium mb-5">{project.role}</p>

        {/* Metric badge */}
        {project.metric && (
          <div className="inline-flex items-baseline gap-2 bg-accent/10 border border-accent/15 rounded-lg px-4 py-2 mb-5">
            <span className={`font-display font-extrabold text-accent-light ${isHero ? 'text-3xl' : 'text-2xl'}`}>{project.metric}</span>
            <span className="text-xs text-slate-400">{project.metricLabel}</span>
          </div>
        )}

        {/* Content blocks — first 2 always visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {project.blocks.slice(0, 2).map((block, i) => (
            <div key={i}>
              <div className="text-[0.65rem] font-bold tracking-wider uppercase text-accent/70 mb-2">{block.label}</div>
              <p className="text-sm text-slate-300 leading-relaxed">{block.text}</p>
            </div>
          ))}
        </div>

        {/* Expandable blocks */}
        <AnimatePresence>
          {expanded && project.blocks.length > 2 && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {project.blocks.slice(2).map((block, i) => (
                  <div key={i}>
                    <div className="text-[0.65rem] font-bold tracking-wider uppercase text-accent/70 mb-2">{block.label}</div>
                    <p className="text-sm text-slate-300 leading-relaxed">{block.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle */}
        {project.blocks.length > 2 && (
          <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-1 text-xs text-accent hover:text-fire-light font-medium transition-colors duration-300 mb-4">
            {expanded ? 'Show less' : 'Show more'}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        )}

        {/* Outcome */}
        <div className="bg-accent/5 border-l-2 border-accent rounded-r-lg px-5 py-4 mb-4">
          <div className="text-[0.65rem] font-bold tracking-wider uppercase text-accent mb-1">Outcome</div>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">{project.outcome}</p>
        </div>

        {/* Link */}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-fire-light transition-colors duration-300">
            View Live Product <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function ProductWork() {
  const projects = resumeData.productWork

  return (
    <section id="work" className="py-24 section-dark">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <div className="accent-line mb-4" />
          <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-accent mb-3">Case Studies</p>
          <h2 className="font-display font-extrabold text-[clamp(1.5rem,3.5vw,2.2rem)] tracking-tight text-white mb-3">Product Work</h2>
          <p className="text-sm text-slate-500 max-w-lg mb-12 leading-relaxed">Every project started with a real market gap — not a feature idea. Here's how I think through problems.</p>
        </motion.div>

        {/* Bento Grid: first card spans 2 cols, rest fill 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <CaseCard key={i} project={project} index={i} isHero={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
