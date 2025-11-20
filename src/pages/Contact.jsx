import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="relative py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl p-6">
            <h2 className="text-white text-2xl font-bold">Get in touch</h2>
            <form className="mt-6 space-y-4">
              <input className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/60 backdrop-blur-xl" placeholder="Your Name"/>
              <input className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/60 backdrop-blur-xl" placeholder="Email"/>
              <textarea rows="5" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/60 backdrop-blur-xl" placeholder="Message"/>
              <button className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold shadow-[0_0_30px_rgba(56,189,248,0.35)]">Send</button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl p-6">
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10" style={{filter: 'url(#water-displace)'}}>
                <iframe title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=72.8350%2C18.9220%2C72.9850%2C18.9720&layer=mapnik" className="w-full h-full" />
              </div>
              <div className="mt-4 flex items-center gap-3 text-white/80"><MapPin className="w-4 h-4"/> Remote / Open to relocate</div>
            </div>

            <div className="flex items-center gap-3">
              <a href="mailto:hello@portfolio.dev" className="p-3 rounded-2xl bg-white/10 border border-white/15 text-white"><Mail className="w-5 h-5"/></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 rounded-2xl bg-white/10 border border-white/15 text-white"><Github className="w-5 h-5"/></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-2xl bg-white/10 border border-white/15 text-white"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
