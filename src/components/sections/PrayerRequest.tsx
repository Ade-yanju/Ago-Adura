'use client'
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { Heart, Send, CheckCircle, Lock } from 'lucide-react'
import clsx from 'clsx'

const PRAYER_TYPES = [
  { label: 'Healing', icon: '🩺' },
  { label: 'Finances', icon: '💰' },
  { label: 'Family', icon: '👨‍👩‍👧' },
  { label: 'Marriage', icon: '💍' },
  { label: 'Career', icon: '💼' },
  { label: 'Salvation', icon: '✝️' },
  { label: 'Deliverance', icon: '🔓' },
  { label: 'Other', icon: '🙏' },
]

export default function PrayerRequest() {
  const [form, setForm] = useState({ name: '', type: '', request: '', anonymous: false })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => setSent(true), 800)
  }

  if (sent) {
    return (
      <section id="prayer" className="section-pad bg-[#F7F3E8]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-md border border-navy-100">
            <div className="text-6xl mb-5">🙏</div>
            <h3 className="font-display font-bold text-navy-800 text-2xl mb-3">Your Prayer Request Has Been Received</h3>
            <p className="text-navy-500/70 mb-6 leading-relaxed">Our prayer team will be interceding on your behalf. Be encouraged — God hears every prayer offered in faith.</p>
            <p className="font-display italic text-navy-400 text-lg mb-8">"The prayer of a righteous person is powerful and effective." — James 5:16</p>
            <button onClick={() => setSent(false)} className="px-8 py-3.5 bg-gold-gradient text-navy-800 font-bold rounded-xl hover:brightness-110 transition text-sm tracking-widest uppercase">
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="prayer" className="section-pad bg-[#F7F3E8]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Prayer Wall"
          title="Submit a Prayer Request"
          subtitle="Our dedicated prayer team intercedes for every request submitted. Nothing is too big or too small for God."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Promise card */}
          <div className="space-y-5">
            <div className="bg-navy-gradient rounded-3xl p-8 sm:p-10 border border-gold-500/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'repeating-linear-gradient(60deg, #F5C518 0, #F5C518 1px, transparent 0, transparent 42px)', backgroundSize: '42px 42px' }} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center text-2xl mb-5 shadow-lg">🔥</div>
                <h3 className="font-display font-bold text-white text-2xl mb-3">We Pray With You</h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Your request goes directly to our prayer team — dedicated intercessors who take every need before the throne of grace. Every request is treated with care and confidentiality.
                </p>
                <div className="flex items-center gap-2 text-gold-400 text-sm">
                  <Lock className="w-4 h-4" />
                  <span>All requests are kept confidential</span>
                </div>
              </div>
            </div>

            {/* Scripture promises */}
            <div className="bg-white rounded-2xl p-6 border border-navy-100">
              <h4 className="font-display font-bold text-navy-800 text-lg mb-4">Prayer Promises</h4>
              <div className="space-y-3">
                {[
                  { v: '"Call to me and I will answer you…"', r: 'Jeremiah 33:3' },
                  { v: '"Do not be anxious about anything, but in every situation, by prayer…"', r: 'Philippians 4:6' },
                  { v: '"Ask and it will be given to you…"', r: 'Matthew 7:7' },
                ].map(({ v, r }) => (
                  <div key={r} className="border-l-2 border-gold-400 pl-4">
                    <p className="font-display italic text-navy-600/80 text-sm leading-snug">{v}</p>
                    <p className="text-gold-600 text-xs font-semibold mt-0.5">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-navy-100 space-y-5">
            <div>
              <label className="block text-xs font-semibold text-navy-600 uppercase tracking-wider mb-2">Your Name</label>
              <input
                type="text"
                placeholder={form.anonymous ? 'Submitting anonymously' : 'Your full name'}
                disabled={form.anonymous}
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl border border-navy-200 bg-white text-navy-800 placeholder-navy-400/50 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition disabled:bg-navy-50 disabled:text-navy-300"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-600 uppercase tracking-wider mb-3">Prayer Category</label>
              <div className="grid grid-cols-4 gap-2">
                {PRAYER_TYPES.map((type) => (
                  <button
                    key={type.label}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, type: type.label }))}
                    className={clsx(
                      'flex flex-col items-center gap-1 p-2.5 rounded-xl border text-center transition-all text-xs font-medium',
                      form.type === type.label
                        ? 'bg-navy-gradient border-gold-500/40 text-gold-400 shadow-md'
                        : 'border-navy-200 text-navy-500 hover:border-gold-300 hover:bg-gold-50'
                    )}
                  >
                    <span className="text-xl">{type.icon}</span>
                    <span className="leading-tight">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-600 uppercase tracking-wider mb-2">Your Prayer Request *</label>
              <textarea
                required
                rows={5}
                placeholder="Share what's on your heart. Our prayer team will be praying specifically for your need…"
                value={form.request}
                onChange={e => setForm(f => ({ ...f, request: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl border border-navy-200 bg-white text-navy-800 placeholder-navy-400/50 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition resize-none"
              />
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setForm(f => ({ ...f, anonymous: !f.anonymous }))}
                className={clsx(
                  'w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all',
                  form.anonymous ? 'bg-gold-500 border-gold-500' : 'border-navy-300 hover:border-gold-400'
                )}
              >
                {form.anonymous && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <span className="text-navy-600/70 text-sm">Submit anonymously</span>
            </label>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-4 bg-gold-gradient text-navy-800 font-bold text-sm rounded-xl hover:brightness-110 transition-all shadow-lg tracking-widest uppercase"
            >
              <Heart className="w-4 h-4" />
              Submit Prayer Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
