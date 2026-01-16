import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myCourses: [
    {
      id: 101,
      title: "UPSC GS: Indian Polity Masterclass",
      instructor: "Dr. Arvind Sharma",
      progress: 65,
      nextDue: "12 Flashcards",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 102,
      title: "Comprehensive Geography for UPSC 2025",
      instructor: "Saira Banu",
      progress: 42,
      nextDue: "8 MCQs",
      image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80"
    }
  ],
  communityCourses: [],
  likedCourses: [],
  currentCourseId: null,
  currentCommunityCourseId: null,
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setMyCourses: (state, action) => {
      state.myCourses = action.payload
    },
    setCommunityCourses: (state, action) => {
      state.communityCourses = action.payload
    },
    toggleLikeCourse: (state, action) => {
      const courseId = action.payload
      const index = state.likedCourses.indexOf(courseId)
      if (index > -1) {
        state.likedCourses.splice(index, 1)
      } else {
        state.likedCourses.push(courseId)
      }
      localStorage.setItem('likedCourses', JSON.stringify(state.likedCourses))
    },
    setCurrentCourseId: (state, action) => {
      state.currentCourseId = action.payload
    },
    setCurrentCommunityCourseId: (state, action) => {
      state.currentCommunityCourseId = action.payload
    },
    updateCourseProgress: (state, action) => {
      const { courseId, progress } = action.payload
      const course = state.myCourses.find(c => c.id === courseId)
      if (course) {
        course.progress = progress
      }
    },
  },
})

export const { 
  setMyCourses, 
  setCommunityCourses, 
  toggleLikeCourse, 
  setCurrentCourseId,
  setCurrentCommunityCourseId,
  updateCourseProgress 
} = coursesSlice.actions
export default coursesSlice.reducer
