'use client'
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { MINISTRIES } from '@/data/church'
import clsx from 'clsx'
import { Users, ChevronRight } from 'lucide-react'

export default function Ministries() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="ministries" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Our Ministries"
          title="Find Your Place to Serve"
          subtitle="Every member has a gift, a calling, and a place. Discover the ministry where you belong."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MINISTRIES.map((ministry, i) => (
            <div
              key={ministry.name}
              className={clsx(
                'group relative rounded-2xl p-6 border cursor-pointer transition-all duration-300',
                active === i
                  ? 'bg-navy-gradient border-gold-500/40 shadow-2xl -translate-y-1'
                  : 'bg-white border-navy-100 hover:border-gold-300 hover:shadow-xl hover:-translate-y-1'
              )}
              onClick={() => setActive(active === i ? null : i)}
            >
              {/* Accent */}
              <div className={clsx(
                'absolute top-0 left-6 right-6 h-0.5 rounded-b-full bg-gold-gradient transition-opacity',
                active === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              )} />

              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{ministry.icon}</div>
                <ChevronRight className={clsx(
                  'w-5 h-5 transition-all mt-1',
                  active === i ? 'text-gold-400 rotate-90' : 'text-navy-300 group-hover:text-gold-400'
                )} />
              </div>

              <h3 className={clsx(
                'font-display font-bold text-xl mb-2 transition-colors',
                active === i ? 'text-gold-400' : 'text-navy-800 group-hover:text-navy-700'
              )}>
                {ministry.name}
              </h3>

              <p className={clsx(
                'text-sm leading-relaxed mb-4 transition-colors',
                active === i ? 'text-white/65' : 'text-navy-600/70'
              )}>
                {ministry.description}
              </p>

              {active === i && (
                <div className="pt-4 border-t border-gold-500/20 flex items-center justify-between">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Ministry Leader</p>
                    <p className="text-white/80 text-sm font-semibold">{ministry.leader}</p>
                  </div>
                  <div className="flex items-center gap-1.5 glass rounded-lg px-3 py-1.5">
                    <Users className="w-3.5 h-3.5 text-gold-400" />
                    <span className="text-gold-400 text-xs font-bold">{ministry.members}</span>
                  </div>
                </div>
              )}

              {active !== i && (
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-navy-400/50" />
                  <span className="text-navy-400/50 text-xs">{ministry.members} members</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-12 text-center">
          <p className="text-navy-500/70 text-sm mb-4">Interested in joining a ministry?</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gold-gradient text-navy-800 font-bold text-sm rounded-xl hover:brightness-110 transition-all shadow-lg hover:shadow-gold-500/30 tracking-widest uppercase"
          >
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  )
}
