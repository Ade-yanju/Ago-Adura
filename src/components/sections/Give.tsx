'use client'
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { Heart, Copy, CheckCheck, Smartphone, Building2, Globe } from 'lucide-react'
import clsx from 'clsx'

const ACCOUNTS = [
  {
    bank: 'Access Bank',
    name: 'CAC AGO ADURA NLA TI GBOGBO ENIYAN',
    number: '0123456789',
    icon: '🏦',
  },
  {
    bank: 'First Bank of Nigeria',
    name: 'CAC AGO ADURA NLA TI GBOGBO ENIYAN',
    number: '2012345678',
    icon: '🏛️',
  },
  {
    bank: 'GTBank',
    name: 'CAC AGO ADURA NLA TI GBOGBO ENIYAN',
    number: '0156789012',
    icon: '🏧',
  },
]

const GIVING_TYPES = [
  { label: 'Tithes', icon: '🌾', desc: '10% of your income — the foundation of Kingdom giving' },
  { label: 'Offerings', icon: '🎁', desc: 'Freewill gifts to the work of God in our assembly' },
  { label: 'Thanksgiving', icon: '🙏', desc: 'Express your gratitude to God for His blessings' },
  { label: 'Building Fund', icon: '⛪', desc: 'Contribute to the expansion of our church facilities' },
  { label: 'Missions', icon: '🌍', desc: 'Support the spread of the gospel beyond our walls' },
  { label: 'Welfare', icon: '💛', desc: 'Help care for members in need within our community' },
]

function AccountCard({ account }: { account: typeof ACCOUNTS[number] }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(account.number)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="glass rounded-2xl p-6 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 hover:bg-gold-500/5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{account.icon}</span>
          <div>
            <div className="text-gold-400 text-xs font-bold tracking-widest uppercase">{account.bank}</div>
          </div>
        </div>
        <Building2 className="w-5 h-5 text-white/20" />
      </div>
      <div className="font-display text-white font-semibold text-sm mb-1 leading-tight">{account.name}</div>
      <div className="font-display text-gold-400 font-bold text-2xl tracking-[0.12em] mt-3 mb-4">{account.number}</div>
      <button
        onClick={copy}
        className={clsx(
          'flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-widest uppercase transition-all',
          copied
            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
            : 'bg-white/10 text-white/70 hover:bg-gold-500/20 hover:text-gold-400 border border-white/10 hover:border-gold-500/30'
        )}
      >
        {copied ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        {copied ? 'Copied!' : 'Copy Account Number'}
      </button>
    </div>
  )
}

export default function Give() {
  return (
    <section id="give" className="section-pad bg-navy-gradient relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #F5C518 0, #F5C518 1px, transparent 0, transparent 52px)', backgroundSize: '52px 52px' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Kingdom Giving"
          title="Give & Support the Work of God"
          subtitle="Your generous giving fuels our ministry, supports our community, and advances the Kingdom."
          center
          light
        />

        {/* Scripture */}
        <div className="text-center mb-12">
          <blockquote className="font-display italic text-white/55 text-lg max-w-xl mx-auto">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          </blockquote>
          <cite className="text-gold-400 text-sm font-semibold not-italic mt-2 block tracking-wider">— 2 Corinthians 9:7</cite>
        </div>

        {/* Giving types */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
          {GIVING_TYPES.map((type) => (
            <div
              key={type.label}
              className="group glass rounded-2xl p-4 border border-gold-500/15 hover:border-gold-500/40 text-center cursor-pointer hover:bg-gold-500/5 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{type.icon}</div>
              <div className="text-gold-400 font-bold text-sm mb-1">{type.label}</div>
              <div className="text-white/35 text-[11px] leading-tight hidden sm:block">{type.desc}</div>
            </div>
          ))}
        </div>

        {/* Bank accounts */}
        <h3 className="font-display font-bold text-white text-2xl sm:text-3xl text-center mb-2">Bank Transfer Details</h3>
        <p className="text-white/50 text-center text-sm mb-8">Make transfers directly to any of our accounts below</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {ACCOUNTS.map((acc) => (
            <AccountCard key={acc.bank} account={acc} />
          ))}
        </div>

        {/* Mobile giving */}
        <div className="glass rounded-2xl p-6 sm:p-8 border border-gold-500/20 max-w-2xl mx-auto text-center">
          <Smartphone className="w-10 h-10 text-gold-400 mx-auto mb-3" />
          <h4 className="font-display font-bold text-white text-xl mb-2">Give via Mobile Transfer</h4>
          <p className="text-white/50 text-sm mb-4 leading-relaxed">
            Use your mobile banking app (USSD, Opay, PalmPay, etc.) to transfer to any of the accounts above. Include your name and the purpose (e.g. "Tithe – Adebayo").
          </p>
          <div className="flex items-center justify-center gap-2 text-gold-400 text-xs font-semibold tracking-widest uppercase">
            <Heart className="w-3.5 h-3.5" />
            <span>Thank you for your faithful giving</span>
            <Heart className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Note */}
        <p className="text-white/25 text-xs text-center mt-6">
          ⚠️ Update the account numbers above with your actual banking details before publishing.
        </p>
      </div>
    </section>
  )
}
