import { createSlice } from '@reduxjs/toolkit'
import extraReducers from './reducers'
import initialState from './state'

const campusSlice = createSlice({
	name: 'campuses',
	initialState,
	reducers: {},
	extraReducers,
})

export default campusSlice.reducer
