'use client'
import { useState, useEffect } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { BRANCHES } from '@/data/church'
import { MapPin, Phone, Clock, ChevronRight, Navigation } from 'lucide-react'
import clsx from 'clsx'
import dynamic from 'next/dynamic'

const BranchMap = dynamic(() => import('@/components/ui/BranchMap'), { ssr: false, loading: () => (
  <div className="w-full h-full min-h-[400px] rounded-2xl bg-navy-100 animate-pulse flex items-center justify-center">
    <div className="text-navy-400 text-sm">Loading map…</div>
  </div>
) })

export default function Locator() {
  const [active, setActive] = useState(BRANCHES[0])
  const [search, setSearch] = useState('')

  const filtered = BRANCHES.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.address.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section id="locator" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="AGO Near You"
          title="Find a Branch Assembly"
          subtitle="With assemblies across Lagos, there's always a CAC AGO ADURA family near you."
          center
        />

        {/* Search */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
            <input
              type="text"
              placeholder="Search by name or area…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-navy-200 bg-[#F7F3E8] text-navy-800 placeholder-navy-400/60 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Branch list */}
          <div className="lg:col-span-2 space-y-3 max-h-[520px] overflow-y-auto pr-1">
            {filtered.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setActive(branch)}
                className={clsx(
                  'w-full text-left rounded-2xl p-5 border transition-all duration-300',
                  active.id === branch.id
                    ? 'bg-navy-gradient border-gold-500/40 shadow-xl'
                    : 'bg-white border-navy-100 hover:border-gold-300 hover:shadow-md'
                )}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={clsx(
                      'text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full',
                      branch.type === 'HQ'
                        ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30'
                        : active.id === branch.id
                          ? 'bg-white/10 text-white/70 border border-white/20'
                          : 'bg-navy-100 text-navy-500 border border-navy-200'
                    )}>
                      {branch.type}
                    </span>
                  </div>
                  <ChevronRight className={clsx('w-4 h-4 flex-shrink-0 mt-0.5 transition-colors', active.id === branch.id ? 'text-gold-400' : 'text-navy-300')} />
                </div>
                <h4 className={clsx(
                  'font-display font-bold text-base mb-1 line-clamp-2',
                  active.id === branch.id ? 'text-white' : 'text-navy-800'
                )}>
                  {branch.name}
                </h4>
                <div className={clsx('flex items-center gap-1.5 text-xs', active.id === branch.id ? 'text-white/60' : 'text-navy-500/60')}>
                  <MapPin className="w-3 h-3" />
                  {branch.address}
                </div>
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-10 text-navy-400">
                <MapPin className="w-8 h-8 mx-auto mb-2 opacity-30" />
                <p className="text-sm">No branches found</p>
              </div>
            )}
          </div>

          {/* Map + detail */}
          <div className="lg:col-span-3 space-y-4">
            {/* Map */}
            <div className="h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-navy-100">
              <BranchMap branches={BRANCHES} active={active} onSelect={setActive} />
            </div>

            {/* Detail card */}
            <div className="bg-navy-gradient rounded-2xl p-6 border border-gold-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center text-xl shadow-lg flex-shrink-0">✝</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gold-400 bg-gold-500/15 border border-gold-500/25 px-2 py-0.5 rounded-full">{active.type}</span>
                  </div>
                  <h4 className="font-display font-bold text-white text-lg leading-tight mb-4">{active.name}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Address</p>
                        <p className="text-white/80 text-sm">{active.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Phone</p>
                        <a href={`tel:${active.phone}`} className="text-white/80 text-sm hover:text-gold-400 transition-colors">{active.phone}</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Sunday Service</p>
                        <p className="text-white/80 text-sm">{active.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex gap-3 flex-wrap">
                <a
                  href={`https://maps.google.com/?q=${active.lat},${active.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gold-gradient text-navy-800 font-bold text-xs rounded-xl hover:brightness-110 transition shadow-lg tracking-widest uppercase"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
                <a
                  href={`tel:${active.phone}`}
                  className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/80 font-semibold text-xs rounded-xl hover:border-gold-400/50 hover:text-gold-400 transition tracking-widest uppercase backdrop-blur-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Branch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
