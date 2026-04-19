'use client'
import { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'
import { CHURCH } from '@/data/church'

export function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gold-gradient text-navy-900 flex items-center justify-between px-4 py-2 shadow-lg">
      <div className="flex-1 text-center">
        <span className="text-xs sm:text-sm font-bold tracking-wide">
          🔥 Annual Convention 2026 — July 20–25 · Register Now!
        </span>
        <a href="#calendar" className="ml-3 underline text-xs font-bold hover:no-underline" onClick={() => setOpen(false)}>
          Learn More →
        </a>
      </div>
      <button
        onClick={() => setOpen(false)}
        className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-navy-900/10 transition-colors flex-shrink-0"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}

export function WhatsAppFloat() {
  return (
    <a
      href={CHURCH.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 bg-navy-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us!
      </span>
    </a>
  )
}
