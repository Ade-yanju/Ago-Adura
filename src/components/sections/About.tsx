'use client'
import { useEffect, useRef, useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { CHURCH } from '@/data/church'

const STATS = [
  { value: '7', suffix: 'days', label: 'of Prayer Weekly' },
  { value: '5', suffix: '+', label: 'Branch Assemblies' },
  { value: '9', suffix: '+', label: 'Active Ministries' },
  { value: '24', suffix: '/7', label: "God's Presence Here" },
]

function StatCard({ value, suffix, label, delay }: { value: string; suffix: string; label: string; delay: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="group bg-white border border-navy-100 rounded-2xl p-6 text-center hover:shadow-xl hover:border-gold-300 transition-all duration-400 hover:-translate-y-1"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`font-display font-bold text-navy-700 leading-none mb-1 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
        {value}<span className="text-gold-500">{suffix}</span>
      </div>
      <div className="text-navy-500/70 text-sm font-medium">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-pad bg-[#F7F3E8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <SectionHeader
              label="Who We Are"
              title="A House of Prayer for All People"
              subtitle="Rooted in faith, filled with fire, open to all."
            />
            <div className="space-y-4 text-navy-700/75 leading-relaxed text-[0.97rem]">
              <p>
                <strong className="text-navy-800 font-semibold">CAC AGO ADURA NLA TI GBOGBO ENIYAN</strong> — meaning <em>"The Great Prayer House for All People"</em> — is a vibrant, Spirit-filled congregation of the Christ Apostolic Church, located in Ile Epo, Oke Odo, Abule Egba, Lagos, Nigeria.
              </p>
              <p>
                We are a church family rooted in faith, prayer, and the power of the Holy Spirit. Our doors are wide open to everyone — regardless of tribe, tongue, status, or background — because we firmly believe the presence and power of God is available for all people.
              </p>
              <p>
                Guided by the foundational principles of the Christ Apostolic Church, we preach salvation through Jesus Christ, divine healing, sanctification, and the baptism of the Holy Spirit with the evidence of speaking in tongues. Come as you are — and encounter a living God.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.querySelector('#beliefs')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 bg-navy-700 text-white font-semibold text-sm rounded-xl hover:bg-navy-800 transition-colors tracking-wide"
              >
                Our Beliefs →
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 border-2 border-gold-500 text-gold-600 font-semibold text-sm rounded-xl hover:bg-gold-50 transition-colors tracking-wide"
              >
                Plan a Visit
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="space-y-6">
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden bg-navy-gradient p-10 shadow-2xl min-h-72 flex flex-col items-center justify-center text-center">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(60deg, #F5C518 0, #F5C518 1px, transparent 0, transparent 40px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="w-24 h-24 rounded-full bg-gold-gradient flex items-center justify-center text-4xl mb-5 shadow-xl animate-float relative z-10">
                ✝
              </div>
              <div className="font-display text-white font-bold text-xl sm:text-2xl relative z-10 mb-2">
                CAC AGO ADURA NLA
              </div>
              <div className="font-display text-white font-bold text-xl sm:text-2xl relative z-10 mb-3">
                TI GBOGBO ENIYAN
              </div>
              <div className="text-gold-400 text-xs tracking-[0.2em] uppercase relative z-10">
                Headquarters · Ile Epo, Oke Odo · Lagos
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <StatCard key={s.label} {...s} delay={i * 100} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
