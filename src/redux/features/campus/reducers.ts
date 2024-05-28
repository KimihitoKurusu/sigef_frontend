import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '@/redux/axios/apiClient'
import { CampusType } from '@/types/types'

export const fetchCampuses = createAsyncThunk(
	'campuses/fetchCampuses',
	async () => {
		const response = await apiClient.get('elections/campuses/')
		return response.data
	}
)

export const createCampus = createAsyncThunk(
	'campuses/createCampus',
	async (campus: CampusType) => {
		const response = await apiClient.post('elections/campuses/', campus)
		return response.data
	}
)

export const updateCampus = createAsyncThunk(
	'campuses/updateCampus',
	async ({ id, campus }: { id: number; campus: CampusType }) => {
		const response = await apiClient.put(`elections/campuses/${id}/`, campus)
		return response.data
	}
)

export const patchCampus = createAsyncThunk(
	'campuses/patchCampus',
	async ({ id, campus }: { id: number; campus: Partial<CampusType> }) => {
		const response = await apiClient.patch(`elections/campuses/${id}/`, campus)
		return response.data
	}
)

export const deleteCampus = createAsyncThunk(
	'campuses/deleteCampus',
	async (id: number) => {
		await apiClient.delete(`elections/campuses/${id}/`)
		return id
	}
)

const extraReducers = builder => {
	builder
		.addCase(fetchCampuses.pending, state => {
			state.status = 'loading'
		})
		.addCase(fetchCampuses.fulfilled, (state, action) => {
			state.status = 'succeeded'
			state.campuses = action.payload
		})
		.addCase(fetchCampuses.rejected, (state, action) => {
			state.status = 'failed'
			state.error = action.error.message
		})
		.addCase(createCampus.fulfilled, (state, action) => {
			state.campuses.push(action.payload)
		})
		.addCase(updateCampus.fulfilled, (state, action) => {
			const index = state.campuses.findIndex(
				c => c.id === action.payload.id
			)
			if (index !== -1) {
				state.campuses[index] = action.payload
			}
		})
		.addCase(patchCampus.fulfilled, (state, action) => {
			const index = state.campuses.findIndex(
				c => c.id === action.payload.id
			)
			if (index !== -1) {
				state.campuses[index] = {
					...state.campuses[index],
					...action.payload,
				}
			}
		})
		.addCase(deleteCampus.fulfilled, (state, action) => {
			state.campuses = state.campuses.filter(c => c.id !== action.payload)
		})
}

export default extraReducers