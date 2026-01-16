import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from './store/slices/appSlice'
import { setCommunityCourses } from './store/slices/coursesSlice'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CoursesPage from './pages/CoursesPage'
import ChatPage from './pages/ChatPage'
import FeedbackPage from './pages/FeedbackPage'
import NotificationsPage from './pages/NotificationsPage'
import CourseDetailPage from './pages/CourseDetailPage'
import TestInterfacePage from './pages/TestInterfacePage'
import RevisionQueuePage from './pages/RevisionQueuePage'

function App() {
  const dispatch = useDispatch()
  const isDark = useSelector((state) => state.app.isDark)

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      dispatch(setTheme(true))
    } else {
      dispatch(setTheme(false))
    }

    // Load liked courses
    const savedLikes = localStorage.getItem('likedCourses')
    if (savedLikes) {
      // Liked courses are handled in coursesSlice
    }

    // Initialize community courses from script.js state
    // This would normally come from an API or be imported
    const initialCommunityCourses = [
      {
        id: 1,
        title: "2025 Complete Economics for UPSC Civil Services Exam",
        instructor: { 
          name: "Vimal Singh, Senior Faculty", 
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vimal",
          bio: "Vimal Singh is a renowned Economics faculty with over 15 years of experience in teaching UPSC aspirants."
        },
        price: "12,999",
        originalPrice: "24,999",
        rating: 4.8,
        reviews: "12,450",
        category: "UPSC",
        isBestseller: true,
        students: "18.2k+",
        validity: "Till Exam",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 2,
        title: "Logical Reasoning & Data Interpretation for CAT/Banking",
        instructor: { 
          name: "Sahil Khanna", 
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sahil",
          bio: "Sahil Khanna is an expert in Quantitative Aptitude and Logical Reasoning."
        },
        price: "9,450",
        originalPrice: "16,500",
        rating: 4.7,
        reviews: "8,210",
        category: "SSC/BANKING",
        isBestseller: false,
        students: "12k+",
        validity: "18 Months",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 3,
        title: "Ancient & Medieval Indian History: Detailed Analysis",
        instructor: { 
          name: "Priya Deshmukh", 
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
          bio: "Dr. Priya Deshmukh is a distinguished History professor."
        },
        price: "10,800",
        originalPrice: "21,000",
        rating: 4.9,
        reviews: "3,105",
        category: "UPSC",
        isBestseller: true,
        students: "5.4k+",
        validity: "Till Exam",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 4,
        title: "Modern Physics for JEE Advanced 2024",
        instructor: { 
          name: "Prof. Amit Verma", 
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
          bio: "Prof. Amit Verma is a renowned Physics educator."
        },
        price: "11,500",
        originalPrice: "18,999",
        rating: 4.9,
        reviews: "5,620",
        category: "JEE MAINS",
        isBestseller: true,
        students: "9k+",
        validity: "2 Years",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
      },
    ]
    dispatch(setCommunityCourses(initialCommunityCourses))
  }, [dispatch])

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-[#050505] transition-colors duration-500">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/courses" replace />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/course/:courseId" element={<CourseDetailPage />} />
            <Route path="/test/:testId" element={<TestInterfacePage />} />
            <Route path="/revision" element={<RevisionQueuePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
