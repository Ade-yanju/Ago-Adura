'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import { SERVICES } from '@/data/church'
import clsx from 'clsx'

const DAY_COLORS: Record<string, string> = {
  'Daily': 'from-amber-500/20 to-orange-500/20 border-amber-300/40',
  'Wednesday': 'from-blue-500/15 to-cyan-500/15 border-blue-300/30',
  'Friday': 'from-purple-500/15 to-indigo-500/15 border-purple-300/30',
  'Sunday': 'from-gold-500/15 to-yellow-500/15 border-gold-300/30',
  'Saturday': 'from-emerald-500/15 to-green-500/15 border-emerald-300/30',
  '1st Sunday Monthly': 'from-red-500/15 to-rose-500/15 border-red-300/30',
}

const DAY_DOT: Record<string, string> = {
  'Daily': 'bg-amber-500',
  'Wednesday': 'bg-blue-500',
  'Friday': 'bg-purple-500',
  'Sunday': 'bg-gold-500',
  'Saturday': 'bg-emerald-500',
  '1st Sunday Monthly': 'bg-red-500',
}

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Worship Schedule"
          title="Join Us for Service"
          subtitle="Every gathering is an opportunity to encounter God. Find the service that works for you."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className={clsx(
                'group relative rounded-2xl p-6 border bg-gradient-to-br transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl',
                DAY_COLORS[service.day] || 'from-gray-50 to-gray-100 border-gray-200'
              )}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Top line accent */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gold-gradient rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-4xl mb-4">{service.icon}</div>

              <div className="flex items-center gap-2 mb-2">
                <div className={clsx('w-2 h-2 rounded-full flex-shrink-0', DAY_DOT[service.day] || 'bg-gray-400')} />
                <span className="text-xs font-bold tracking-widest uppercase text-navy-500/70">{service.day}</span>
              </div>

              <h3 className="font-display font-bold text-navy-800 text-xl mb-1">{service.name}</h3>
              <p className="text-gold-600 font-semibold text-sm mb-3">{service.time}</p>
              <p className="text-navy-600/65 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-navy-gradient text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #F5C518 0, #F5C518 1px, transparent 0, transparent 50px)', backgroundSize: '50px 50px' }}
          />
          <div className="relative z-10">
            <div className="text-4xl mb-4">🙏</div>
            <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-3">New to CAC AGO ADURA?</h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto text-sm sm:text-base">
              We'd love to welcome you! Our Sunday morning service is the perfect place to start. Expect powerful worship, an inspiring message, and a warm, loving community.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gold-gradient text-navy-800 font-bold text-sm rounded-xl tracking-widest uppercase hover:brightness-110 transition shadow-xl hover:shadow-gold-500/40"
            >
              Plan Your First Visit →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
