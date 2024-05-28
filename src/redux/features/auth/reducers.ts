import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '@/redux/axios/apiClient'

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async ({ username, password }, thunkAPI) => {
		try {
			const response = await apiClient.post('token/', {
				username,
				password,
			})
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data)
		}
	}
)

export const logoutUser = createAsyncThunk(
	'auth/logoutUser',
	async (_, thunkAPI) => {
		sessionStorage.removeItem('token')
		sessionStorage.removeItem('refresh')
		sessionStorage.removeItem('user_id')
		sessionStorage.removeItem('username')
	}
)

const extraReducers = builder => {
	builder
		.addCase(loginUser.pending, state => {
			state.loading = true
		})
		.addCase(loginUser.fulfilled, (state, action) => {
			state.loading = false
			state.isAuthenticated = true
			state.user = action.payload.user
			state.token = action.payload.token
		})
		.addCase(loginUser.rejected, (state, action) => {
			state.loading = false
			state.isAuthenticated = false
			state.error = action.error.message || 'Failed to log in'
		})
		.addCase(logoutUser.fulfilled, state => {
			state.isAuthenticated = false
			state.user = null
			state.token = null
		})
}

export default extraReducers
