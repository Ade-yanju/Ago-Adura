import SectionHeader from '@/components/ui/SectionHeader'
import { LEADERSHIP } from '@/data/church'

const STRUCTURE = [
  { tier: 1, role: 'Senior Pastor', desc: 'Overall spiritual leadership, vision, and oversight of all ministries and assemblies', icon: '👑' },
  { tier: 2, role: 'Assistant Pastor(s)', desc: 'Supporting leadership across key ministry departments and pastoral care', icon: '⛪' },
  { tier: 3, role: 'Deacons & Deaconesses', desc: 'Serving the congregation, administering church welfare and sacraments', icon: '🤝' },
  { tier: 4, role: 'Ministry Leaders', desc: 'Heads of individual ministries — Youth, Women, Men, Children, Worship, Evangelism', icon: '🔑' },
  { tier: 5, role: 'Church Members', desc: 'The body of Christ — every member gifted, valued, and vital to the mission', icon: '🌟' },
]

export default function PowerStructure() {
  return (
    <section id="structure" className="section-pad bg-[#F7F3E8]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Power Structure"
          title="Church Leadership"
          subtitle="A clear, accountable, and Spirit-led structure serving the body of Christ."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Org Chart */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-navy-800 text-2xl mb-6">Organisational Structure</h3>
            {STRUCTURE.map((tier, i) => (
              <div key={tier.tier} className="flex items-start gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-navy-gradient flex items-center justify-center text-lg shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                    {tier.icon}
                  </div>
                  {i < STRUCTURE.length - 1 && (
                    <div className="w-0.5 h-8 bg-gradient-to-b from-gold-500/40 to-transparent mt-1" />
                  )}
                </div>
                <div className="bg-white rounded-2xl p-4 flex-1 border border-navy-100 group-hover:border-gold-300 group-hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-bold text-gold-600 tracking-widest uppercase bg-gold-50 px-2 py-0.5 rounded-full">Tier {tier.tier}</span>
                    <span className="font-semibold text-navy-800 text-sm">{tier.role}</span>
                  </div>
                  <p className="text-navy-500/70 text-xs leading-relaxed">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership cards */}
          <div>
            <h3 className="font-display font-bold text-navy-800 text-2xl mb-6">Meet Our Leaders</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LEADERSHIP.map((leader) => (
                <div
                  key={leader.role}
                  className="group bg-white rounded-2xl p-6 border border-navy-100 hover:border-gold-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-navy-gradient flex items-center justify-center font-display font-bold text-gold-400 text-xl mb-4 shadow-lg">
                    {leader.initials}
                  </div>
                  <div className="text-[10px] font-bold text-gold-600 tracking-widest uppercase mb-1 bg-gold-50 inline-block px-2 py-0.5 rounded-full">
                    {leader.title}
                  </div>
                  <h4 className="font-display font-bold text-navy-800 text-lg mt-1 mb-0.5">{leader.name}</h4>
                  <p className="text-navy-500/70 text-xs mb-3">{leader.role}</p>
                  <p className="text-navy-600/60 text-xs leading-relaxed">{leader.description}</p>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-5 p-4 rounded-xl bg-gold-50 border border-gold-200">
              <p className="text-gold-700 text-xs leading-relaxed">
                <strong>Note:</strong> Update this section with the actual names and photos of your church leaders. Upload photos to <code className="bg-gold-100 px-1 rounded">/public/leaders/</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
