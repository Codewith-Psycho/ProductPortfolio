import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Linkedin, Github } from 'lucide-react'
import { resumeData } from '../../data/resumeData'

function AnimatedCounter({ value, duration = 2000 }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        const numericPart = value.replace(/[^0-9.]/g, '')
        const suffix = value.replace(/[0-9.]/g, '')
        const target = parseFloat(numericPart)
        if (isNaN(target)) { setDisplay(value); return }

        const startTime = performance.now()
        const animate = (currentTime) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = Math.floor(eased * target)
          setDisplay(current + suffix)
          if (progress < 1) requestAnimationFrame(animate)
          else setDisplay(value)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration])

  return <span ref={ref}>{display}</span>
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden section-dark">
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-accent bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
              Product · Data · Strategy
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.06] tracking-tight text-white mb-4"
          >
            I sit at the intersection of product, data, and strategy.<br />
            <span className="text-gradient">I build from there.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[1.05rem] text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            AI & Data Science undergrad who has shipped 3 live products, worked in a COO's office, and diagnosed real product problems in B2B SaaS platforms — all before graduating.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              View Case Studies
              <ArrowDown size={16} />
            </a>
            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/25 text-slate-300 hover:text-white font-medium text-sm rounded-lg transition-all duration-300"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={resumeData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/25 text-slate-300 hover:text-white font-medium text-sm rounded-lg transition-all duration-300"
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/5"
          >
            {resumeData.heroStats.map((stat, i) => (
              <div key={i}>
                <div className="font-display font-extrabold text-3xl tracking-tight text-white">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs text-slate-600 mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
