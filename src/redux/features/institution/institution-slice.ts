import { createSlice } from '@reduxjs/toolkit'
import initialState from './state'
import extraReducers from './reducers'

const institutionSlice = createSlice({
	name: 'institutions',
	initialState,
	reducers: {},
	extraReducers
})

export default institutionSlice.reducer
