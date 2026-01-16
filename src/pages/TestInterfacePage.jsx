import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

function TestInterfacePage() {
  const { testId } = useParams()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/courses')}
          className="mb-6 flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Courses
        </button>
        <div className="bg-white dark:bg-[#0d1b1b] rounded-xl p-8 border border-slate-200 dark:border-white/5">
          <h1 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Test Interface</h1>
          <p className="text-slate-600 dark:text-slate-400">Test ID: {testId}</p>
          <p className="text-slate-600 dark:text-slate-400 mt-4">Test interface implementation coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export default TestInterfacePage
