function Card({ children, className = '', hover = false, onClick }) {
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow cursor-pointer' : ''
  const clickClasses = onClick ? 'cursor-pointer' : ''

  return (
    <div
      className={`bg-white dark:bg-[#0d1b1b] rounded-xl border border-slate-200 dark:border-white/5 p-6 ${hoverClasses} ${clickClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card
