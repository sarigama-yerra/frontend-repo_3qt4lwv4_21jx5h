import React from 'react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const timeline = [
    { year: '2025', title: 'B.Sc. in Software Engineering', desc: 'Graduated with honors. Focus on web systems, graphics, and AI.' },
    { year: '2024', title: 'Research Assistant', desc: 'Worked on ML-driven UI personalization and real-time visualization.' },
    { year: '2023', title: 'Intern, Frontend', desc: 'Built reactive dashboards and design systems.' },
  ]
  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'TensorFlow', 'Three.js', 'Docker', 'AWS']

  return (
    <div className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <motion.div initial={{rotateY: -15, opacity:0}} whileInView={{rotateY:0, opacity:1}} viewport={{once:true}} transition={{duration:0.8}} className="lg:col-span-1 relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[inset_0_0_60px_rgba(255,255,255,0.06)]" style={{transformStyle: 'preserve-3d'}}>
              <div className="absolute inset-0" style={{filter: 'url(#water-displace)'}} />
              <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover opacity-90"/>
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-teal-400/10 mix-blend-overlay" />
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-10">
            <div className="relative rounded-3xl p-8 border border-white/15 bg-white/10 backdrop-blur-2xl">
              <h2 className="text-3xl font-bold text-white">About Me</h2>
              <p className="mt-3 text-white/80">I’m a Software Engineer Graduate passionate about building fast, accessible, and visually-immersive products. My toolkit spans frontend, backend, and ML — always with a design-first mindset.</p>
            </div>

            <div className="relative rounded-3xl p-8 border border-white/15 bg-white/10 backdrop-blur-2xl">
              <h3 className="text-xl font-semibold text-white">Education & Experience</h3>
              <div className="mt-6 space-y-6">
                {timeline.map((t) => (
                  <div key={t.year} className="flex items-start gap-4">
                    <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.6)]" />
                    <div>
                      <p className="text-white font-semibold">{t.year} — {t.title}</p>
                      <p className="text-white/80 text-sm">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl p-8 border border-white/15 bg-white/10 backdrop-blur-2xl">
              <h3 className="text-xl font-semibold text-white">Core Skills</h3>
              <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map(s => (
                  <div key={s} className="relative group p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <div className="absolute inset-x-4 -bottom-5 h-10 bg-gradient-to-t from-white/10 to-transparent blur-md opacity-60 rounded-full" />
                    <span className="text-white/90">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
