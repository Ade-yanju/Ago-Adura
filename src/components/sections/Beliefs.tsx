import SectionHeader from '@/components/ui/SectionHeader'
import { BELIEFS } from '@/data/church'

export default function Beliefs() {
  return (
    <section id="beliefs" className="section-pad bg-navy-gradient relative overflow-hidden">
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: 'repeating-linear-gradient(60deg, #F5C518 0, #F5C518 1px, transparent 0, transparent 42px)', backgroundSize: '42px 42px' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="What We Believe"
          title="Our Core Beliefs"
          subtitle="Rooted in Scripture, guided by the Holy Spirit, and proven through generations of faith."
          center
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BELIEFS.map((belief, i) => (
            <div
              key={belief.title}
              className="group relative glass rounded-2xl p-6 border border-gold-500/15 hover:border-gold-500/40 hover:bg-gold-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold-500/10"
            >
              <div className="text-3xl mb-4">{belief.icon}</div>
              <h3 className="font-display font-bold text-gold-400 text-lg mb-3">{belief.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-4">{belief.text}</p>
              <div className="pt-4 border-t border-white/10">
                <span className="text-gold-500/70 text-xs font-mono tracking-wider">{belief.verse}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Statement of faith */}
        <div className="mt-14 text-center">
          <div className="inline-block glass rounded-2xl px-8 py-6 border border-gold-500/20 max-w-2xl">
            <div className="font-display italic text-white/70 text-lg leading-relaxed mb-3">
              "We are a Christ Apostolic Church family — committed to prayer, the power of the Holy Spirit, and the unchanging Word of God."
            </div>
            <div className="text-gold-400 text-xs tracking-widest uppercase font-semibold">— CAC Statement of Faith</div>
          </div>
        </div>
      </div>
    </section>
  )
}
