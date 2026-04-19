'use client'
import { useState, useEffect } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import clsx from 'clsx'

const TESTIMONIALS = [
  {
    name: 'Adebayo Olusola',
    role: 'Church Member, 8 years',
    initials: 'AO',
    text: 'Coming to CAC AGO ADURA changed my life completely. I came in broken, and God met me in the night vigil. The healing and deliverance I received here is indescribable. This is truly a house of prayer for all people.',
    stars: 5,
  },
  {
    name: 'Sister Kemi Adeleke',
    role: 'Women\'s Fellowship Member',
    initials: 'KA',
    text: "The women's fellowship here is a family. I found my purpose, deepened my faith, and made lifelong friends. Pastor preaches the undiluted Word every Sunday. I am grateful to God for leading me to this church.",
    stars: 5,
  },
  {
    name: 'Brother Emeka Nwosu',
    role: 'Youth Member',
    initials: 'EN',
    text: 'As a young man, I was at a crossroads. The youth fellowship here gave me direction, purpose, and a community that genuinely cares. The Friday Ago Adura changed everything for me spiritually.',
    stars: 5,
  },
  {
    name: 'Deaconess Funke Bello',
    role: 'Member, 15 years',
    initials: 'FB',
    text: 'Fifteen years in this church and the fire of God has never gone cold. The prayer atmosphere here is unmatched. When I had a serious health challenge, the prayers of this church brought my miracle.',
    stars: 5,
  },
  {
    name: 'Mr & Mrs Tunde Lawal',
    role: 'New Members',
    initials: 'TL',
    text: 'We relocated to Lagos with no church family. A friend invited us to CAC AGO ADURA and we have never looked back. The warmth, the Word, and the worship here are extraordinary.',
    stars: 5,
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const go = (dir: number) => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setIdx((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
      setTransitioning(false)
    }, 250)
  }

  useEffect(() => {
    const t = setInterval(() => go(1), 6000)
    return () => clearInterval(t)
  }, [])

  const t = TESTIMONIALS[idx]

  return (
    <section id="testimonials" className="section-pad bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Testimonies"
          title="What God Has Done"
          subtitle="Lives transformed, miracles received, families restored — to the glory of God."
          center
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-navy-gradient rounded-3xl p-8 sm:p-12 text-center border border-gold-500/20 shadow-2xl overflow-hidden">
            {/* bg texture */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: 'repeating-linear-gradient(60deg, #F5C518 0, #F5C518 1px, transparent 0, transparent 42px)', backgroundSize: '42px 42px' }} />

            <Quote className="w-12 h-12 text-gold-500/30 mx-auto mb-6 relative z-10" />

            <div
              className={clsx(
                'relative z-10 transition-all duration-250',
                transitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              )}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-gold-400 text-xl">★</span>
                ))}
              </div>

              <p className="font-display italic text-white/80 leading-relaxed text-lg sm:text-xl mb-8">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center font-display font-bold text-navy-800 shadow-lg">
                  {t.initials}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/45 text-xs">{t.role}</div>
                </div>
              </div>
            </div>

            {/* Nav buttons */}
            <button
              onClick={() => go(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-gold-400 transition-colors z-10 border border-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-gold-400 transition-colors z-10 border border-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { if (!transitioning) { setTransitioning(true); setTimeout(() => { setIdx(i); setTransitioning(false) }, 250) } }}
                className={clsx(
                  'rounded-full transition-all duration-400',
                  i === idx ? 'w-6 h-2 bg-gold-500' : 'w-2 h-2 bg-navy-200 hover:bg-gold-300'
                )}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Share testimony CTA */}
        <div className="mt-12 text-center">
          <p className="text-navy-500/70 text-sm mb-3">Has God done something amazing in your life through our church?</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 border-2 border-gold-400 text-gold-600 font-bold text-sm rounded-xl hover:bg-gold-50 transition-colors tracking-widest uppercase"
          >
            Share Your Testimony
          </button>
        </div>
      </div>
    </section>
  )
}
