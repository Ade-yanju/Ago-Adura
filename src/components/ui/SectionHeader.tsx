import clsx from 'clsx'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeader({ label, title, subtitle, center = false, light = false, className }: SectionHeaderProps) {
  return (
    <div className={clsx('mb-12 lg:mb-16', center && 'text-center', className)}>
      <div className={clsx(
        'inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4 px-4 py-1.5 rounded-full border',
        light
          ? 'text-gold-400 border-gold-500/30 bg-gold-500/10'
          : 'text-gold-600 border-gold-500/30 bg-gold-500/10'
      )}>
        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
        {label}
        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
      </div>
      <h2 className={clsx(
        'font-display font-bold leading-[1.1] text-balance',
        'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl',
        light ? 'text-white' : 'text-navy-800'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={clsx(
          'mt-4 text-base sm:text-lg leading-relaxed max-w-2xl',
          center && 'mx-auto',
          light ? 'text-white/60' : 'text-navy-600/70'
        )}>
          {subtitle}
        </p>
      )}
      <div className={clsx(
        'mt-5 h-[3px] w-16 rounded-full bg-gold-gradient',
        center && 'mx-auto'
      )} />
    </div>
  )
}
