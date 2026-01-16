import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Clock, Zap, Trophy, Award, TrendingUp, Flame, ChevronRight, PlayCircle } from 'lucide-react'

function CoursesPage() {
  const navigate = useNavigate()
  const stats = useSelector((state) => state.stats)
  const myCourses = useSelector((state) => state.courses.myCourses)
  const communityCourses = useSelector((state) => state.courses.communityCourses)

  const streakProgress = (stats.streak / stats.nextMilestone) * 100

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Revision Queue Card */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
            <Zap className="w-full h-full" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5" />
              <h2 className="text-xl font-semibold">Revision Queue</h2>
            </div>
            <div className="flex gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold">{stats.flashcardsDue}</div>
                <div className="text-sm opacity-90">Flashcards</div>
              </div>
              <div className="border-l border-white/20 pl-6">
                <div className="text-3xl font-bold">{stats.mcqsDue}</div>
                <div className="text-sm opacity-90">MCQs Due</div>
              </div>
            </div>
            <button
              onClick={() => navigate('/revision')}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors"
            >
              START REVISION
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Lifetime Mastery Card */}
        <div className="bg-white dark:bg-[#0d1b1b] rounded-xl p-6 border border-slate-200 dark:border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Lifetime Mastery</h3>
          </div>
          <div className="space-y-4 mb-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600 dark:text-slate-400">Flashcards Mastery</span>
                <span className="font-semibold text-slate-900 dark:text-white">{stats.flashcardsDone}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600 dark:text-slate-400">MCQ Accuracy</span>
                <span className="font-semibold text-primary">92%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-4 border-t border-border-light dark:border-white/5">
            <TrendingUp className="w-5 h-5 text-primary" />
            <div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Current Rank</div>
                <div className="font-semibold text-slate-900 dark:text-white">Advanced Aspirant</div>
            </div>
          </div>
        </div>

        {/* Streak Card */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-red-600 p-6 text-white">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
            <Flame className="w-full h-full" />
          </div>
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <Flame className="w-8 h-8" />
            </div>
            <div className="text-5xl font-bold mb-2">{stats.streak}</div>
            <div className="text-sm opacity-90 mb-6">Day Streak</div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex justify-between text-sm mb-2">
                <span>Next Milestone</span>
                <span className="font-semibold">{stats.nextMilestone} Days</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                <div className="bg-white h-2 rounded-full" style={{ width: `${streakProgress}%` }}></div>
              </div>
              <p className="text-xs opacity-90">Keep it up! {stats.nextMilestone - stats.streak} days to Gold Badge.</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Learning Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">My Learning</h2>
          <button className="text-primary hover:text-primary-light transition-colors">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(`/course/${course.id}`)}
              className="bg-white dark:bg-[#0d1b1b] rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative h-48">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">{course.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">By {course.instructor}</p>
                <div className="flex items-center gap-2 text-sm text-primary mb-4">
                  <Zap className="w-4 h-4" />
                  <span>{course.nextDue} DUE TODAY</span>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600 dark:text-slate-400">Mastery</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Courses Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Community Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-[#0d1b1b] rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative h-48">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2 text-text-primary-light dark:text-text-primary-dark">{course.title}</h4>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4">By {course.instructor.name}</p>
                <div className="flex items-center justify-between">
                  <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">₹{course.price}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 line-through">₹{course.originalPrice}</div>
                  </div>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CoursesPage
