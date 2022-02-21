import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    startNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return null
    }
  }
})

export const { clearNotification, startNotification } = notificationSlice.actions

export const setNotification = (notification, duration) => {
  return dispatch => {
    dispatch(startNotification(notification))
    setTimeout(() => {
      dispatch(clearNotification())
    }, duration * 1000)
  }
}

export default notificationSlice.reducer
