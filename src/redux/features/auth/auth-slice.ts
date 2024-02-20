import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import apiClient from '../../axios/apiClient'
import { initialState } from './state'
import reducers from './reducers'

export const fetchToken = createAsyncThunk(
	'auth/fetchToken',
	async credentials => {
		const response = await apiClient.post('/token/', credentials)
		return response.data
	}
)

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers,
	extraReducers: builder => {
		builder.addCase(fetchToken.fulfilled, (state, action) => {
			state.token = action.payload.access
			localStorage.setItem('token', action.payload.access)
			state.refresh = action.payload.refresh
			localStorage.setItem('token', action.payload.refresh)
		})
	},
})

export const { logIn, logOut } = authSlice.actions
export default authSlice.reducer
