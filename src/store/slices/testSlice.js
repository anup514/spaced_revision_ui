import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  testState: null,
  timerInterval: null,
  timeRemaining: 0,
  question: null,
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTestState: (state, action) => {
      state.testState = action.payload
    },
    setTimerInterval: (state, action) => {
      state.timerInterval = action.payload
    },
    setTimeRemaining: (state, action) => {
      state.timeRemaining = action.payload
    },
    setQuestion: (state, action) => {
      state.question = action.payload
    },
    clearTest: (state) => {
      state.testState = null
      state.timerInterval = null
      state.timeRemaining = 0
      state.question = null
    },
  },
})

export const { setTestState, setTimerInterval, setTimeRemaining, setQuestion, clearTest } = testSlice.actions
export default testSlice.reducer
