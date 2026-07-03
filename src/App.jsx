import { lazy, Suspense } from 'react'
const LiquidEther = lazy(() => import('./components/LiquidEther'))
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import ProductWork from './components/sections/ProductWork'
import Experience from './components/sections/Experience'
import Achievements from './components/sections/Achievements'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Leadership from './components/sections/Leadership'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Full-screen liquid ether background — fixed behind all content */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={null}>
          <LiquidEther
            colors={['#DC2626', '#F97316', '#1E1E2F']}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={16}
            iterationsPoisson={16}
            resolution={0.35}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </Suspense>
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <ProductWork />
          <Experience />
          <Achievements />
          <Education />
          <Skills />
          <Leadership />
          <Certifications />
          <Contact />
        </main>
      </div>
    </div>
  )
}
