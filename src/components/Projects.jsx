import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Realtime IoT Dashboard',
    desc: 'Telemetry ingestion, WebSocket streaming, and anomaly detection pipeline.',
    tags: ['TypeScript', 'WebSocket', 'MQTT', 'Docker'],
    link: '#',
    repo: '#'
  },
  {
    title: '3D Portfolio Engine',
    desc: 'Interactive WebGL scenes with Spline and custom shader effects.',
    tags: ['React', 'Spline', 'ThreeJS'],
    link: '#',
    repo: '#'
  },
  {
    title: 'Serverless Image Toolkit',
    desc: 'Edge image processing with on-demand optimization and AI upscaling.',
    tags: ['AWS', 'Lambda', 'S3', 'CloudFront'],
    link: '#',
    repo: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(168,85,247,0.15),transparent_50%),radial-gradient(600px_circle_at_80%_30%,rgba(34,211,238,0.12),transparent_50%)]" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h2>
          <p className="mt-3 text-white/70">A snapshot of work spanning systems, frontend, and cloud.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition overflow-hidden"
            >
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-tr from-fuchsia-500/30 to-cyan-500/30 rounded-full blur-3xl group-hover:scale-110 transition" />
              <h3 className="text-white font-semibold text-xl">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-white/80">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                  <ExternalLink className="w-4 h-4"/> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-2 text-white/70 hover:text-white">
                  <Github className="w-4 h-4"/> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
