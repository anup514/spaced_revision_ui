import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun, User, Heart, Settings, HelpCircle, LogOut } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme, setUserProfileDropdownOpen } from '../../store/slices/appSlice'
import { useState, useRef, useEffect } from 'react'

function Navbar() {
  const location = useLocation()
  const dispatch = useDispatch()
  const isDark = useSelector((state) => state.app.isDark)
  const userProfileDropdownOpen = useSelector((state) => state.app.userProfileDropdownOpen)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(setUserProfileDropdownOpen(false))
      }
    }

    if (userProfileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [userProfileDropdownOpen, dispatch])

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[rgba(10,10,13,0.8)] backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-15 gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 via-teal-300 to-aquamarine-400 flex items-center justify-center relative overflow-hidden">
              <svg className="w-full h-full absolute bottom-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M 20 80 Q 30 70, 40 80 T 60 80 T 80 80" stroke="white" strokeWidth="2" fill="none" opacity="0.9"/>
                <path d="M 15 85 Q 30 70, 45 85 T 75 85 T 85 85" stroke="white" strokeWidth="2" fill="none" opacity="0.7"/>
                <path d="M 10 90 Q 30 70, 50 90 T 90 90" stroke="white" strokeWidth="2" fill="none" opacity="0.5"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-slate-900 dark:text-white">Spaced Revision</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/courses"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/courses')
                  ? 'text-primary dark:text-primary-light border-b-2 border-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Courses
            </Link>
            <Link
              to="/chat"
              className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                isActive('/chat')
                  ? 'text-primary dark:text-primary-light border-b-2 border-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Chat
            </Link>
            <Link
              to="/feedback"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/feedback')
                  ? 'text-primary dark:text-primary-light border-b-2 border-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Feedback
            </Link>
            <Link
              to="/notifications"
              className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                isActive('/notifications')
                  ? 'text-primary dark:text-primary-light border-b-2 border-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Notifications
            </Link>
            <Link
              to="#"
              className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Refer & Earn
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* User Avatar */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => dispatch(setUserProfileDropdownOpen(!userProfileDropdownOpen))}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-colors"
              >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=User"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Dropdown */}
              {userProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-card-light dark:bg-card-dark rounded-lg shadow-lg border border-border-light dark:border-white/5 py-2 z-50">
                  <div className="px-4 py-3 border-b border-border-light dark:border-white/5">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=User"
                        alt="User"
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">Anup Timsina</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">anuptimsina514@gmail.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <User className="w-4 h-4" />
                      <span>My Profile</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>Liked Courses</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <HelpCircle className="w-4 h-4" />
                      <span>Help & Support</span>
                    </a>
                    <div className="border-t border-border-light dark:border-white/5 my-2"></div>
                    <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <LogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
