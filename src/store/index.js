import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import statsReducer from './slices/statsSlice'
import coursesReducer from './slices/coursesSlice'
import chatReducer from './slices/chatSlice'
import notificationsReducer from './slices/notificationsSlice'
import courseDetailReducer from './slices/courseDetailSlice'
import testReducer from './slices/testSlice'
import revisionReducer from './slices/revisionSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    stats: statsReducer,
    courses: coursesReducer,
    chat: chatReducer,
    notifications: notificationsReducer,
    courseDetail: courseDetailReducer,
    test: testReducer,
    revision: revisionReducer,
  },
})
