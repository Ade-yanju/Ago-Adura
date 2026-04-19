import SectionHeader from '@/components/ui/SectionHeader'
import { Play, Youtube, Radio, Headphones, BookOpen } from 'lucide-react'

const MEDIA = [
  {
    title: 'Live Sunday Service',
    desc: 'Watch our Sunday service live every week on YouTube. Never miss a sermon.',
    icon: Youtube,
    color: 'from-red-600/20 to-red-800/20 border-red-500/30',
    iconColor: 'text-red-500',
    label: 'Watch Live',
    href: '#',
  },
  {
    title: 'Sermon Archive',
    desc: 'Access hundreds of past sermons and teachings from our pastors.',
    icon: BookOpen,
    color: 'from-blue-600/20 to-blue-800/20 border-blue-500/30',
    iconColor: 'text-blue-400',
    label: 'Browse Sermons',
    href: '#',
  },
  {
    title: 'Radio / Podcast',
    desc: 'Listen to daily devotionals, teachings, and prayers on the go.',
    icon: Headphones,
    color: 'from-purple-600/20 to-purple-800/20 border-purple-500/30',
    iconColor: 'text-purple-400',
    label: 'Listen Now',
    href: '#',
  },
]

export default function Media() {
  return (
    <section id="media" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Media & Streaming"
          title="Watch, Listen & Grow"
          subtitle="The ministry is available wherever you are — online, on demand, and always anointed."
          center
        />

        {/* Live stream embed placeholder */}
        <div className="mb-12 rounded-3xl overflow-hidden bg-navy-gradient border border-gold-500/20 shadow-2xl">
          <div className="aspect-video flex flex-col items-center justify-center gap-5 relative">
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, #F5C518 0, #F5C518 1px, transparent 0, transparent 52px)', backgroundSize: '52px 52px' }} />
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-2xl mb-5 mx-auto animate-pulse-gold">
                <Play className="w-10 h-10 text-navy-800 ml-1" />
              </div>
              <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">Live Service Stream</h3>
              <p className="text-white/50 text-sm max-w-sm mx-auto mb-6">
                Embed your YouTube live stream here. Every Sunday at 7:00 AM, the church goes live!
              </p>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-600 text-white font-bold text-sm rounded-xl hover:bg-red-700 transition shadow-xl tracking-wide"
              >
                <Youtube className="w-5 h-5" />
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Media options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MEDIA.map(({ title, desc, icon: Icon, color, iconColor, label, href }) => (
            <div
              key={title}
              className={`group rounded-2xl p-6 border bg-gradient-to-br ${color} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 ${iconColor}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-navy-800 text-xl mb-2">{title}</h4>
              <p className="text-navy-600/70 text-sm leading-relaxed mb-5">{desc}</p>
              <a
                href={href}
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-700 hover:text-gold-600 transition-colors tracking-wide"
              >
                {label} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
