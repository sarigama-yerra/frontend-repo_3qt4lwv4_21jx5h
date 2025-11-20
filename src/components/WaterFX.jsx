import React from 'react'

// Provides global animated water-like gradient background and SVG filters for watery glass refraction
export default function WaterFX({ children }) {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated gradient waves background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 animate-[bgShift_18s_ease-in-out_infinite] opacity-80" style={{
          backgroundImage:
            'radial-gradient(1200px_800px_at_10%_10%, rgba(59,130,246,0.12), transparent), radial-gradient(1000px_700px_at_90%_20%, rgba(34,211,238,0.12), transparent), radial-gradient(900px_600px_at_50%_120%, rgba(59,130,246,0.10), transparent)'
        }} />
        <div className="absolute inset-0 mix-blend-screen opacity-30 animate-[spin_60s_linear_infinite]" style={{
          background: 'conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,0.15), rgba(59,130,246,0.1), rgba(34,211,238,0.15), rgba(56,189,248,0.15))'
        }} />
        {/* soft noise for texture */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)'
        }} />
      </div>

      {/* Hidden SVG filters for watery refraction / caustics */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="water-displace">
            <feTurbulence type="turbulence" baseFrequency="0.008" numOctaves="3" seed="2" result="turb" />
            <feDisplacementMap in="SourceGraphic" in2="turb" scale="12" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="glass-shimmer">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="2" result="noise" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.6" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" in2="noise" mode="screen" />
          </filter>
        </defs>
      </svg>

      {children}
    </div>
  )
}
