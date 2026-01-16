import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDark: false,
  activeModal: null,
  userProfileDropdownOpen: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark
      if (typeof document !== 'undefined') {
        if (state.isDark) {
          document.body.classList.add('dark')
          document.body.classList.remove('light')
          localStorage.setItem('theme', 'dark')
        } else {
          document.body.classList.add('light')
          document.body.classList.remove('dark')
          localStorage.setItem('theme', 'light')
        }
      }
    },
    setTheme: (state, action) => {
      state.isDark = action.payload
      if (typeof document !== 'undefined') {
        if (state.isDark) {
          document.body.classList.add('dark')
          document.body.classList.remove('light')
          localStorage.setItem('theme', 'dark')
        } else {
          document.body.classList.add('light')
          document.body.classList.remove('dark')
          localStorage.setItem('theme', 'light')
        }
      }
    },
    setActiveModal: (state, action) => {
      state.activeModal = action.payload
    },
    closeModal: (state) => {
      state.activeModal = null
    },
    setUserProfileDropdownOpen: (state, action) => {
      state.userProfileDropdownOpen = action.payload
    },
  },
})

export const { toggleTheme, setTheme, setActiveModal, closeModal, setUserProfileDropdownOpen } = appSlice.actions
export default appSlice.reducer
