import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  revisionMode: null,
  revisionStep: 'mode',
  revisionQueueMode: 'flashcards',
  revisionSession: null,
}

const revisionSlice = createSlice({
  name: 'revision',
  initialState,
  reducers: {
    setRevisionMode: (state, action) => {
      state.revisionMode = action.payload
    },
    setRevisionStep: (state, action) => {
      state.revisionStep = action.payload
    },
    setRevisionQueueMode: (state, action) => {
      state.revisionQueueMode = action.payload
    },
    setRevisionSession: (state, action) => {
      state.revisionSession = action.payload
    },
    clearRevision: (state) => {
      state.revisionMode = null
      state.revisionStep = 'mode'
      state.revisionSession = null
    },
  },
})

export const { 
  setRevisionMode, 
  setRevisionStep, 
  setRevisionQueueMode, 
  setRevisionSession,
  clearRevision 
} = revisionSlice.actions
export default revisionSlice.reducer
