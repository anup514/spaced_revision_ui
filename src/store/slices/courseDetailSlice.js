import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentCourseView: 'global-recall',
  currentLessonId: 1,
  currentLessonTab: 'flashcards',
  collapsedSections: [],
  courseDetailFilters: {
    gsPaper: 'All Papers',
    subject: 'All Subjects',
    topic: 'All Topics'
  },
  userContent: {
    flashcards: [],
    mcqs: [],
    notes: []
  },
  contentFilter: {
    notes: 'all',
    flashcards: 'all',
    mcqs: 'all'
  },
  videoPlayer: {
    currentTime: 0,
    duration: 0,
    isPlaying: false,
    showControls: true,
    addMenuOpen: false,
    modalOpen: false,
    modalType: null,
    capturedTime: 0,
    fromSection: false,
    volume: 1,
    isMuted: false,
    playbackRate: 1,
    isFullscreen: false,
  },
  revealStates: {},
  quizAnswers: {},
}

const courseDetailSlice = createSlice({
  name: 'courseDetail',
  initialState,
  reducers: {
    setCurrentCourseView: (state, action) => {
      state.currentCourseView = action.payload
    },
    setCurrentLessonId: (state, action) => {
      state.currentLessonId = action.payload
    },
    setCurrentLessonTab: (state, action) => {
      state.currentLessonTab = action.payload
    },
    toggleSectionCollapse: (state, action) => {
      const sectionId = action.payload
      const index = state.collapsedSections.indexOf(sectionId)
      if (index > -1) {
        state.collapsedSections.splice(index, 1)
      } else {
        state.collapsedSections.push(sectionId)
      }
    },
    setCourseDetailFilters: (state, action) => {
      state.courseDetailFilters = { ...state.courseDetailFilters, ...action.payload }
    },
    setContentFilter: (state, action) => {
      state.contentFilter = { ...state.contentFilter, ...action.payload }
    },
    addUserContent: (state, action) => {
      const { type, content } = action.payload
      state.userContent[type].push(content)
    },
    updateVideoPlayer: (state, action) => {
      state.videoPlayer = { ...state.videoPlayer, ...action.payload }
    },
    setRevealState: (state, action) => {
      const { id, revealed } = action.payload
      state.revealStates[id] = revealed
    },
    setQuizAnswer: (state, action) => {
      const { id, answer } = action.payload
      state.quizAnswers[id] = answer
    },
  },
})

export const {
  setCurrentCourseView,
  setCurrentLessonId,
  setCurrentLessonTab,
  toggleSectionCollapse,
  setCourseDetailFilters,
  setContentFilter,
  addUserContent,
  updateVideoPlayer,
  setRevealState,
  setQuizAnswer,
} = courseDetailSlice.actions
export default courseDetailSlice.reducer
