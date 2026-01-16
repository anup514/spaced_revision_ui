import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ChevronLeft, Brain, ClipboardList, PenTool, TrendingUp } from 'lucide-react'
import { courseDetailData } from '../data/courseData'

function CourseDetailPage() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const course = courseDetailData[parseInt(courseId)]
  const currentCourseView = useSelector((state) => state.courseDetail.currentCourseView)

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-slate-600 dark:text-slate-400">Course not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white dark:bg-[#0d1b1b] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            <button
              onClick={() => navigate('/courses')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="h-6 w-px bg-border-light dark:bg-white/5"></div>
            <div>
              <h1 className="text-lg font-semibold text-slate-900 dark:text-white">{course.title}</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">Aggregate Mastery: {course.totalMastery}%</p>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 bg-white dark:bg-[#0d1b1b] rounded-xl p-6 border border-slate-200 dark:border-white/5 h-fit sticky top-24">
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Study Hub</h2>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white">
                  <Brain className="w-5 h-5" />
                  <span>Smart Revision</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white">
                  <ClipboardList className="w-5 h-5" />
                  <span>Test Series</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white">
                  <PenTool className="w-5 h-5" />
                  <span>Answer Writing</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white">
                  <TrendingUp className="w-5 h-5" />
                  <span>Analytics Lab</span>
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Lesson Modules</h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {course.sections.map((section) => (
                  <div key={section.id} className="mb-4">
                    <h3 className="font-medium text-sm mb-2 text-text-primary-light dark:text-text-primary-dark">{section.title}</h3>
                    <div className="space-y-1 pl-4">
                      {section.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          className="block w-full text-left text-sm py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-600 dark:text-slate-400"
                        >
                          {lesson.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white dark:bg-[#0d1b1b] rounded-xl p-8 border border-slate-200 dark:border-white/5">
              <div className="text-center py-16">
                <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-white">Smart Revision Engine</h2>
                <p className="text-slate-600 dark:text-slate-400">Select a mode to start your revision session</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailPage
