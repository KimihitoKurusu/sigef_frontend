import { createSlice } from '@reduxjs/toolkit'
import initialState from './state'
import extraReducers from './reducers'

const facultySlice = createSlice({
	name: 'faculties',
	initialState,
	reducers: {},
	extraReducers,
})

export default facultySlice.reducer
