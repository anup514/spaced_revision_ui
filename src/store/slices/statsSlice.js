import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mcqsDue: 42,
  flashcardsDue: 85,
  flashcardsDone: 1280,
  mcqsDone: 450,
  streak: 12,
  nextMilestone: 15,
}

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    updateStats: (state, action) => {
      return { ...state, ...action.payload }
    },
    incrementStreak: (state) => {
      state.streak += 1
    },
    resetStreak: (state) => {
      state.streak = 0
    },
  },
})

export const { updateStats, incrementStreak, resetStreak } = statsSlice.actions
export default statsSlice.reducer
