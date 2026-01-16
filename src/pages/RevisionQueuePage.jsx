import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Brain, Zap } from 'lucide-react'
import { useSelector } from 'react-redux'

function RevisionQueuePage() {
  const navigate = useNavigate()
  const [selectedMode, setSelectedMode] = useState('flashcards')
  const myCourses = useSelector((state) => state.courses.myCourses)
  const stats = useSelector((state) => state.stats)

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

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Select Course for Revision</h1>
          <p className="text-slate-600 dark:text-slate-400">Choose a course to review due flashcards and MCQs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {myCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-[#0d1b1b] rounded-xl p-6 border border-slate-200 dark:border-white/5 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{course.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{course.nextDue} due</p>
              <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors">
                Start Revision
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-[#0d1b1b] rounded-xl p-6 border border-slate-200 dark:border-white/5">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedMode('flashcards')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                selectedMode === 'flashcards'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Brain className="w-5 h-5" />
              <span>Flashcards</span>
              <span className="ml-2 px-2 py-1 bg-white/20 rounded text-sm">{stats.flashcardsDue}</span>
            </button>
            <button
              onClick={() => setSelectedMode('mcqs')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                selectedMode === 'mcqs'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Zap className="w-5 h-5" />
              <span>MCQs</span>
              <span className="ml-2 px-2 py-1 bg-white/20 rounded text-sm">{stats.mcqsDue}</span>
            </button>
          </div>
          <p className="text-slate-600 dark:text-slate-400">Revision session implementation coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export default RevisionQueuePage
