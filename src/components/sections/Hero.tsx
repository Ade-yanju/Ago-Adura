'use client'
import { useEffect, useState } from 'react'
import { ChevronDown, Play } from 'lucide-react'
import clsx from 'clsx'

const SLIDES = [
  {
    tagline: 'Welcome Home',
    title: 'CAC AGO ADURA NLA',
    subtitle: 'TI GBOGBO ENIYAN',
    verse: '"For My house shall be called a house of prayer for all nations."',
    reference: 'Isaiah 56:7',
    bg: 'from-navy-900 via-navy-800 to-navy-700',
  },
  {
    tagline: 'Spirit-Filled Worship',
    title: 'The Great Prayer',
    subtitle: 'HOUSE FOR ALL PEOPLE',
    verse: '"Ask and it will be given to you; seek and you will find; knock and the door will be opened to you."',
    reference: 'Matthew 7:7',
    bg: 'from-[#020D2A] via-[#071A47] to-[#0D2B6B]',
  },
  {
    tagline: 'Join Our Family',
    title: 'Rooted in Faith,',
    subtitle: 'FILLED WITH FIRE',
    verse: '"Not by might nor by power, but by My Spirit, says the LORD Almighty."',
    reference: 'Zechariah 4:6',
    bg: 'from-navy-900 via-[#0A1F55] to-navy-700',
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const scrollToNext = () => {
    const next = document.querySelector('#about')
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className={clsx('absolute inset-0 transition-all duration-1000 bg-gradient-to-br', SLIDES[activeSlide].bg)} />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #F5C518 0, #F5C518 1px, transparent 0, transparent 50%)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-500/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-navy-500/20 blur-[120px] pointer-events-none" />

      {/* Large cross watermark */}
      <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none">
        <div
          className="font-display text-white/[0.025] font-bold select-none"
          style={{ fontSize: 'clamp(280px, 40vw, 560px)', lineHeight: 1 }}
          aria-hidden
        >
          ✝
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto pt-20">
        {mounted && (
          <div key={activeSlide} className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-500/40 bg-gold-500/10 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">
                {SLIDES[activeSlide].tagline}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            </div>

            {/* Title */}
            <h1 className="font-display font-bold leading-[1.05] mb-3 text-white"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
              {SLIDES[activeSlide].title}
            </h1>
            <div className="font-display font-bold gold-text leading-tight mb-8"
              style={{ fontSize: 'clamp(1.5rem, 4.5vw, 3.5rem)' }}>
              {SLIDES[activeSlide].subtitle}
            </div>

            {/* Verse */}
            <blockquote className="max-w-2xl mx-auto mb-10">
              <p className="font-display italic text-white/65 leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>
                {SLIDES[activeSlide].verse}
              </p>
              <cite className="text-gold-400 text-sm font-semibold tracking-wider not-italic mt-2 block">
                — {SLIDES[activeSlide].reference}
              </cite>
            </blockquote>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gold-gradient text-navy-800 font-bold text-sm tracking-widest uppercase rounded-xl shadow-2xl hover:shadow-gold-500/40 hover:brightness-110 transition-all duration-300 hover:-translate-y-0.5 min-w-48"
              >
                Join Us Sunday
              </button>
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-white/25 text-white/85 font-semibold text-sm tracking-widest uppercase rounded-xl hover:border-gold-400/60 hover:text-gold-400 transition-all duration-300 backdrop-blur-sm hover:bg-white/5 min-w-48"
              >
                Learn More
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={clsx(
              'rounded-full transition-all duration-500',
              i === activeSlide ? 'w-8 h-2 bg-gold-500' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            )}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll prompt */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-gold-400 transition-colors z-10 flex flex-col items-center gap-2 group"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-gold-400" />
      </button>

      {/* Live badge */}
      <div className="absolute top-24 right-6 sm:right-10 z-10">
        <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-2.5 border border-gold-500/20">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white/70 text-xs font-medium">Sunday Service 7:00 AM</span>
        </div>
      </div>
    </section>
  )
}
