import { CHURCH, SERVICES } from '@/data/church'
import { Facebook, Instagram, Youtube, Twitter, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  const quickLinks = ['About', 'Our Beliefs', 'Services', 'Ministries', 'Calendar', 'Give', 'Contact']
  const ministriesLinks = ['Youth Fellowship', "Women's Fellowship", "Men's Fellowship", "Children's Ministry", 'Worship Ministry', 'Evangelism']

  return (
    <footer className="bg-navy-900 text-white">
      {/* Upper footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-xl shadow-lg flex-shrink-0">✝</div>
              <div>
                <div className="font-display text-gold-400 font-bold text-sm leading-tight">CAC AGO ADURA NLA</div>
                <div className="text-white/40 text-[10px] tracking-widest uppercase">TI GBOGBO ENIYAN</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A Spirit-filled Christ Apostolic Church — The Great Prayer House for All People, located in Ile Epo, Oke Odo, Abule Egba, Lagos.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: CHURCH.social.facebook, label: 'Facebook' },
                { Icon: Instagram, href: CHURCH.social.instagram, label: 'Instagram' },
                { Icon: Youtube, href: CHURCH.social.youtube, label: 'YouTube' },
                { Icon: MessageCircle, href: CHURCH.social.whatsapp, label: 'WhatsApp' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold-500/20 flex items-center justify-center text-white/50 hover:text-gold-400 transition-all border border-white/5 hover:border-gold-500/30"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g,'-').replace("'","")}`} className="text-white/45 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Ministries</h4>
            <ul className="space-y-2.5">
              {ministriesLinks.map((m) => (
                <li key={m}>
                  <a href="#ministries" className="text-white/45 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors" />
                    {m}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/45 text-sm leading-relaxed">{CHURCH.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`tel:${CHURCH.phone}`} className="text-white/45 hover:text-gold-400 text-sm transition-colors">{CHURCH.phone}</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${CHURCH.email}`} className="text-white/45 hover:text-gold-400 text-sm transition-colors">{CHURCH.email}</a>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/45 text-sm">{CHURCH.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service times bar */}
      <div className="border-t border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {SERVICES.slice(0, 4).map((s) => (
            <div key={s.id} className="flex items-center gap-2 text-xs text-white/30">
              <span>{s.icon}</span>
              <span className="text-white/50 font-medium">{s.day}:</span>
              <span>{s.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 <span className="text-gold-500">CAC AGO ADURA NLA TI GBOGBO ENIYAN</span>. All Rights Reserved.
          </p>
          <p className="text-white/20 text-xs">Built for the Kingdom of God · Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  )
}
