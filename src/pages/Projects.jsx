import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const demoProjects = [
  { id: 1, title: 'Holographic Dashboard', tag: 'Web Dev', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop', desc: 'A glass UI dashboard with real-time widgets and 3D motion.' },
  { id: 2, title: 'Vision Transformer Playground', tag: 'AI/ML', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop', desc: 'Interactive demos and visualizations for vision models.' },
  { id: 3, title: 'Aqua Travel', tag: 'Mobile Apps', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop', desc: 'A mobile trip planner with AR wayfinding and glass UI.' },
]

export default function ProjectsPage() {
  const [active, setActive] = useState('Web Dev')
  const [modal, setModal] = useState(null)
  const tags = ['Web Dev', 'AI/ML', 'Mobile Apps']

  const filtered = demoProjects.filter(p => p.tag === active)

  return (
    <div className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {tags.map(t => (
            <button key={t} onClick={() => setActive(t)} className={`px-4 py-2 rounded-xl border ${active===t ? 'bg-white/15 text-white' : 'bg-white/5 text-white/80'} border-white/15 backdrop-blur-xl`}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <motion.div key={p.id} whileHover={{ y: -6 }} className="group relative rounded-3xl overflow-hidden border border-white/15 bg-white/10 backdrop-blur-2xl">
              <img src={p.img} alt={p.title} className="h-48 w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"/>
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-white/80 text-sm mt-1">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <button onClick={() => setModal(p)} className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-teal-500 text-white text-sm">Preview</button>
                  <a href="#" className="inline-flex items-center gap-1 text-cyan-300 text-sm">Live <ExternalLink className="w-4 h-4"/></a>
                </div>
              </div>
              <div className="absolute inset-x-6 -bottom-6 h-12 bg-gradient-to-t from-white/10 to-transparent blur-xl opacity-70" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center p-6 z-50">
            <motion.div initial={{scale:0.95, y:10}} animate={{scale:1, y:0}} exit={{scale:0.95, y:10}} transition={{type:'spring', stiffness:160, damping:18}} className="relative max-w-3xl w-full rounded-3xl border border-white/15 bg-white/10 overflow-hidden">
              <div className="aspect-video bg-gradient-to-tr from-sky-500/20 to-teal-400/20" style={{filter:'url(#water-displace)'}} />
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold">{modal.title}</h3>
                <p className="text-white/80 mt-2">{modal.desc}</p>
                <div className="mt-6 flex justify-end gap-3">
                  <a href="#" className="px-4 py-2 rounded-lg bg-white/10 border border-white/15 text-white">Code</a>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-teal-500 text-white" onClick={() => setModal(null)}>Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
