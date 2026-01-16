function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-gray-100 dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark',
    primary: 'bg-primary/10 text-primary',
    success: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    warning: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
    danger: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
