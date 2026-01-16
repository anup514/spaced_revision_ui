import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentChatCourse: null,
  chats: {},
  chatReadStates: {},
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setCurrentChatCourse: (state, action) => {
      state.currentChatCourse = action.payload
    },
    addMessage: (state, action) => {
      const { courseId, message } = action.payload
      if (!state.chats[courseId]) {
        state.chats[courseId] = []
      }
      state.chats[courseId].push(message)
    },
    markMessagesAsRead: (state, action) => {
      const { courseId, messageIds } = action.payload
      if (!state.chatReadStates[courseId]) {
        state.chatReadStates[courseId] = []
      }
      state.chatReadStates[courseId] = [
        ...new Set([...state.chatReadStates[courseId], ...messageIds])
      ]
    },
    setChats: (state, action) => {
      state.chats = action.payload
    },
  },
})

export const { setCurrentChatCourse, addMessage, markMessagesAsRead, setChats } = chatSlice.actions
export default chatSlice.reducer
