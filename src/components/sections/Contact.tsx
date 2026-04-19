'use client'
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { CHURCH } from '@/data/church'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageCircle, Send, CheckCircle } from 'lucide-react'
import clsx from 'clsx'

const SUBJECTS = [
  'General Enquiry',
  'Prayer Request',
  'First-Time Visit',
  'Membership Information',
  'Ministry Partnership',
  'Pastoral Counselling',
  'Wedding / Special Service',
  'Media & Press',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: SUBJECTS[0], message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1800)
  }

  const inputClass = 'w-full px-4 py-3.5 rounded-xl border border-navy-200 bg-white text-navy-800 placeholder-navy-400/50 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition font-body'

  return (
    <section id="contact" className="section-pad bg-[#F7F3E8]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Get in Touch"
          title="Contact Us"
          subtitle="Whether you're looking for a church home, need prayer, or have a question — we'd love to hear from you."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="bg-white rounded-3xl p-10 sm:p-14 text-center shadow-md border border-navy-100">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-display font-bold text-navy-800 text-2xl mb-2">Message Received!</h3>
                <p className="text-navy-500/70 text-sm leading-relaxed mb-6">
                  Thank you for reaching out. A member of our team will be in touch with you shortly. God bless you!
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', subject: SUBJECTS[0], message: '' }) }}
                  className="px-6 py-3 bg-gold-gradient text-navy-800 font-bold text-sm rounded-xl hover:brightness-110 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-navy-100 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-navy-600 uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-600 uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-navy-600 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+234 000 000 0000"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-600 uppercase tracking-wider mb-2">Subject</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className={inputClass}
                    >
                      {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-600 uppercase tracking-wider mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help you? Share your prayer request, question, or anything on your heart…"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={clsx(inputClass, 'resize-none')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center gap-2.5 px-8 py-4 bg-gold-gradient text-navy-800 font-bold text-sm rounded-xl hover:brightness-110 transition-all shadow-lg hover:shadow-gold-500/30 disabled:opacity-70 tracking-widest uppercase"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-navy-800/30 border-t-navy-800 rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { Icon: MapPin,  label: 'Address',          value: CHURCH.address,      href: `https://maps.google.com/?q=${CHURCH.address}` },
              { Icon: Phone,   label: 'Phone',             value: CHURCH.phone,        href: `tel:${CHURCH.phone}` },
              { Icon: Mail,    label: 'Email',             value: CHURCH.email,        href: `mailto:${CHURCH.email}` },
              { Icon: Clock,   label: 'Office Hours',      value: CHURCH.officeHours,  href: null },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="bg-white rounded-2xl p-5 border border-navy-100 flex items-start gap-4 hover:border-gold-300 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-gold-gradient flex items-center justify-center shadow-md flex-shrink-0">
                  <Icon className="w-5 h-5 text-navy-800" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-navy-400 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-navy-800 font-semibold text-sm hover:text-gold-600 transition-colors leading-snug">
                      {value}
                    </a>
                  ) : (
                    <p className="text-navy-800 font-semibold text-sm leading-snug">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="bg-white rounded-2xl p-5 border border-navy-100">
              <p className="text-[10px] font-bold uppercase tracking-widest text-navy-400 mb-4">Follow Us</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { Icon: Facebook,       label: 'Facebook',  href: CHURCH.social.facebook,  color: 'hover:text-blue-500' },
                  { Icon: Instagram,      label: 'Instagram', href: CHURCH.social.instagram, color: 'hover:text-pink-500' },
                  { Icon: Youtube,        label: 'YouTube',   href: CHURCH.social.youtube,   color: 'hover:text-red-500' },
                  { Icon: MessageCircle,  label: 'WhatsApp',  href: CHURCH.social.whatsapp,  color: 'hover:text-green-500' },
                ].map(({ Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx('flex items-center gap-2.5 p-3 rounded-xl border border-navy-100 hover:border-gold-300 transition-all text-navy-500', color, 'hover:shadow-sm group')}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs font-semibold">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Sunday invite */}
            <div className="bg-navy-gradient rounded-2xl p-6 border border-gold-500/20 text-center">
              <div className="text-3xl mb-2">☀️</div>
              <h4 className="font-display font-bold text-white text-lg mb-1">Visit This Sunday</h4>
              <p className="text-white/55 text-sm mb-3">Service begins at 7:00 AM — come experience the power of God first-hand.</p>
              <p className="text-gold-400 text-xs font-bold tracking-wider">{CHURCH.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
