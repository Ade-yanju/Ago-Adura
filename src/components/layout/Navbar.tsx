'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { CHURCH } from '@/data/church'
import clsx from 'clsx'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  {
    label: 'Ministries',
    href: '#ministries',
    children: [
      { label: 'All Ministries', href: '#ministries' },
      { label: 'Youth Fellowship', href: '#ministries' },
      { label: "Women's Fellowship", href: '#ministries' },
      { label: "Men's Fellowship", href: '#ministries' },
      { label: "Children's Ministry", href: '#ministries' },
    ],
  },
  { label: 'Services', href: '#services' },
  { label: 'Beliefs', href: '#beliefs' },
  { label: 'Calendar', href: '#calendar' },
  { label: 'AGO Near You', href: '#locator' },
  { label: 'Give', href: '#give' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    setDropdown(null)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-navy-800/95 backdrop-blur-xl shadow-2xl border-b border-gold-500/20'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gold-gradient flex items-center justify-center text-xl shadow-lg animate-pulse-gold flex-shrink-0">
                ✝
              </div>
              <div className="text-left hidden sm:block">
                <div className="font-display text-gold-400 font-bold text-xs lg:text-sm leading-tight tracking-wide line-clamp-1">
                  CAC AGO ADURA NLA
                </div>
                <div className="text-white/50 text-[10px] tracking-widest uppercase">
                  TI GBOGBO ENIYAN
                </div>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <>
                      <button
                        onMouseEnter={() => setDropdown(link.label)}
                        onMouseLeave={() => setDropdown(null)}
                        className="flex items-center gap-1 px-3 py-2 text-white/80 hover:text-gold-400 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
                      >
                        {link.label}
                        <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                      </button>
                      {dropdown === link.label && (
                        <div
                          className="absolute top-full left-0 mt-1 w-52 glass-dark rounded-xl shadow-2xl py-2 border border-gold-500/20"
                          onMouseEnter={() => setDropdown(link.label)}
                          onMouseLeave={() => setDropdown(null)}
                        >
                          {link.children.map((c) => (
                            <button
                              key={c.label}
                              onClick={() => handleNavClick(c.href)}
                              className="w-full text-left px-4 py-2.5 text-white/70 hover:text-gold-400 hover:bg-gold-500/10 text-sm transition-colors"
                            >
                              {c.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="px-3 py-2 text-white/80 hover:text-gold-400 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="ml-3 px-5 py-2.5 bg-gold-gradient text-navy-800 font-bold text-sm rounded-lg hover:brightness-110 transition-all shadow-lg hover:shadow-gold-500/30 hover:shadow-xl"
              >
                Visit Us
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'fixed inset-0 z-40 xl:hidden transition-all duration-500',
          open ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={clsx(
            'absolute inset-0 bg-navy-900/80 backdrop-blur-sm transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0'
          )}
        />
        {/* Drawer */}
        <div
          className={clsx(
            'absolute top-0 right-0 h-full w-72 bg-navy-800 border-l border-gold-500/20 shadow-2xl transition-transform duration-500 flex flex-col',
            open ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="font-display text-gold-400 font-bold text-sm">Menu</div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-6 py-3.5 text-white/80 hover:text-gold-400 hover:bg-gold-500/10 font-medium transition-colors flex items-center justify-between"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-4 h-4 text-white/40" />}
                </button>
                {link.children && (
                  <div className="bg-navy-900/50">
                    {link.children.map((c) => (
                      <button
                        key={c.label}
                        onClick={() => handleNavClick(c.href)}
                        className="w-full text-left px-10 py-2.5 text-white/50 hover:text-gold-400 text-sm transition-colors"
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="p-6 border-t border-white/10">
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full py-3 bg-gold-gradient text-navy-800 font-bold rounded-xl shadow-lg text-sm tracking-wide"
            >
              Visit Us This Sunday
            </button>
            <p className="text-white/40 text-xs text-center mt-3">{CHURCH.address}</p>
          </div>
        </div>
      </div>
    </>
  )
}
