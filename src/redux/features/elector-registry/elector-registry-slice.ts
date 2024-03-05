import { createSlice } from '@reduxjs/toolkit'
import initialState from './state'
import extraReducers from './reducers'

const electorRegistrySlice = createSlice({
	name: 'electorRegistries',
	initialState,
	reducers: {},
	extraReducers,
})

export default electorRegistrySlice.reducer
