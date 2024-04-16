import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import initialState from './state'
import extraReducers from './reducers'


const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers
})
   
export default authSlice.reducer
