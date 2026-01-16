import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notifications: [],
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload
    },
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload)
    },
    markAsRead: (state, action) => {
      const id = action.payload
      const notification = state.notifications.find(n => n.id === id)
      if (notification) {
        notification.read = true
      }
    },
    markAllAsRead: (state) => {
      state.notifications.forEach(n => n.read = true)
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload)
    },
  },
})

export const { setNotifications, addNotification, markAsRead, markAllAsRead, removeNotification } = notificationsSlice.actions
export default notificationsSlice.reducer
