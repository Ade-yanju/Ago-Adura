'use client'
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { CALENDAR_EVENTS } from '@/data/church'
import { Calendar, MapPin, ChevronRight, X } from 'lucide-react'
import { format, parseISO } from 'date-fns'
import clsx from 'clsx'

const TYPE_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  Convention:  { bg: 'bg-amber-100',  text: 'text-amber-800',  dot: 'bg-amber-500' },
  Special:     { bg: 'bg-blue-100',   text: 'text-blue-800',   dot: 'bg-blue-500' },
  Children:    { bg: 'bg-green-100',  text: 'text-green-800',  dot: 'bg-green-500' },
  Youth:       { bg: 'bg-purple-100', text: 'text-purple-800', dot: 'bg-purple-500' },
  Anniversary: { bg: 'bg-gold-100',   text: 'text-gold-800',   dot: 'bg-gold-500' },
  Prayer:      { bg: 'bg-navy-100',   text: 'text-navy-800',   dot: 'bg-navy-500' },
}

type EventType = typeof CALENDAR_EVENTS[number]

function EventCard({ event, onClick }: { event: EventType; onClick: () => void }) {
  const colors = TYPE_COLORS[event.type] || TYPE_COLORS.Special
  const date = parseISO(event.date)

  return (
    <button
      onClick={onClick}
      className="group w-full text-left bg-white rounded-2xl border border-navy-100 p-5 hover:border-gold-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex gap-4 items-start"
    >
      {/* Date block */}
      <div className="flex-shrink-0 w-14 text-center">
        <div className="bg-navy-gradient rounded-xl py-2 px-1 shadow-md">
          <div className="text-gold-400 text-[10px] font-bold tracking-widest uppercase">{format(date, 'MMM')}</div>
          <div className="text-white font-display font-bold text-2xl leading-none">{format(date, 'd')}</div>
          <div className="text-white/40 text-[10px]">{format(date, 'EEE')}</div>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <span className={clsx('text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full', colors.bg, colors.text)}>
            {event.type}
          </span>
          {event.endDate && (
            <span className="text-[10px] text-navy-400">
              – {format(parseISO(event.endDate), 'MMM d')}
            </span>
          )}
        </div>
        <h4 className="font-display font-bold text-navy-800 text-base group-hover:text-gold-600 transition-colors line-clamp-1">{event.title}</h4>
        <div className="flex items-center gap-1 mt-1">
          <MapPin className="w-3 h-3 text-navy-400/60" />
          <span className="text-navy-500/60 text-xs line-clamp-1">{event.location}</span>
        </div>
      </div>

      <ChevronRight className="w-4 h-4 text-navy-300 group-hover:text-gold-500 flex-shrink-0 mt-0.5 transition-colors" />
    </button>
  )
}

function EventModal({ event, onClose }: { event: EventType; onClose: () => void }) {
  const colors = TYPE_COLORS[event.type] || TYPE_COLORS.Special
  const date = parseISO(event.date)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-navy-900/70 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy-gradient px-8 pt-8 pb-6">
          <div className="flex items-start justify-between mb-4">
            <span className={clsx('text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30')}>
              {event.type}
            </span>
            <button onClick={onClose} className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">{event.title}</h3>
          <div className="flex items-center gap-2 text-gold-400 text-sm">
            <Calendar className="w-4 h-4" />
            <span>
              {format(date, 'MMMM d, yyyy')}
              {event.endDate && ` – ${format(parseISO(event.endDate), 'MMMM d, yyyy')}`}
            </span>
          </div>
        </div>
        {/* Body */}
        <div className="px-8 py-6">
          <p className="text-navy-600/80 leading-relaxed mb-6">{event.description}</p>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F7F3E8] border border-gold-200">
            <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0" />
            <div>
              <p className="text-navy-800 font-semibold text-sm">{event.location}</p>
              <p className="text-navy-500/70 text-xs">Venue</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full mt-5 py-3.5 bg-gold-gradient text-navy-800 font-bold rounded-xl text-sm tracking-widest uppercase hover:brightness-110 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ChurchCalendar() {
  const [selected, setSelected] = useState<EventType | null>(null)
  const [filter, setFilter] = useState<string>('All')

  const types = ['All', ...Array.from(new Set(CALENDAR_EVENTS.map(e => e.type)))]
  const filtered = filter === 'All'
    ? CALENDAR_EVENTS
    : CALENDAR_EVENTS.filter(e => e.type === filter)

  return (
    <section id="calendar" className="section-pad bg-[#F7F3E8]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Church Calendar"
          title="Upcoming Events"
          subtitle="Never miss a moment. Stay connected with every church event and special programme."
          center
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {types.map((type) => {
            const colors = TYPE_COLORS[type]
            return (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={clsx(
                  'px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all border',
                  filter === type
                    ? 'bg-navy-700 text-white border-navy-700 shadow-md'
                    : 'bg-white text-navy-500 border-navy-200 hover:border-gold-400 hover:text-gold-600'
                )}
              >
                {type}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} onClick={() => setSelected(event)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-navy-400">
            <Calendar className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No events in this category yet.</p>
          </div>
        )}
      </div>

      {selected && <EventModal event={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
