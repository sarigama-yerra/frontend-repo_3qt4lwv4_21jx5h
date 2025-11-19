import { useState, useEffect } from 'react'
import { Menu, X, Cpu, Mail, Github, Linkedin } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/5 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-fuchsia-600/30 to-cyan-500/30 border border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
              <Cpu className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-white/90 font-semibold leading-tight">Computer Engineer</p>
              <p className="text-xs text-white/60">Portfolio</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white px-4 py-2 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-white/10 mx-2" />
            <a
              href="mailto:hello@portfolio.dev"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white transition-colors border border-white/10"
            >
              <Mail className="w-4 h-4" /> Contact
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 border border-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/50 backdrop-blur-xl">
          <div className="px-4 pb-4 pt-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-white/90 px-3 py-2 rounded-lg hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="mailto:hello@portfolio.dev" className="flex-1 text-center px-3 py-2 rounded-lg bg-white/10 text-white border border-white/10">Email</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-white/80 hover:text-white border border-white/10"><Github className="w-5 h-5"/></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-white/80 hover:text-white border border-white/10"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
