import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '@/redux/axios/apiClient'
import { FacultyType } from '@/types/types'

export const fetchFaculties = createAsyncThunk(
	'faculties/fetchFaculties',
	async () => {
		const response = await apiClient.get('/faculties/')
		return response.data
	}
)

export const createFaculty = createAsyncThunk(
	'faculties/createFaculty',
	async (faculty: FacultyType) => {
		const response = await apiClient.post('/faculties/', faculty)
		return response.data
	}
)

export const updateFaculty = createAsyncThunk(
	'faculties/updateFaculty',
	async ({ id, faculty }: { id: number; faculty: FacultyType }) => {
		const response = await apiClient.put(`/faculties/${id}/`, faculty)
		return response.data
	}
)

export const patchFaculty = createAsyncThunk(
	'faculties/patchFaculty',
	async ({ id, faculty }: { id: number; faculty: Partial<FacultyType> }) => {
		const response = await apiClient.patch(`/faculties/${id}/`, faculty)
		return response.data
	}
)

export const deleteFaculty = createAsyncThunk(
	'faculties/deleteFaculty',
	async (id: number) => {
		await apiClient.delete(`/faculties/${id}/`)
		return id
	}
)

const extraReducers = builder => {
	builder
		.addCase(fetchFaculties.pending, state => {
			state.status = 'loading'
		})
		.addCase(fetchFaculties.fulfilled, (state, action) => {
			state.status = 'succeeded'
			state.faculties = action.payload
		})
		.addCase(fetchFaculties.rejected, (state, action) => {
			state.status = 'failed'
			state.error = action.error.message
		})
		.addCase(createFaculty.fulfilled, (state, action) => {
			state.faculties.push(action.payload)
		})
		.addCase(updateFaculty.fulfilled, (state, action) => {
			const index = state.faculties.findIndex(
				f => f.id === action.payload.id
			)
			if (index !== -1) {
				state.faculties[index] = action.payload
			}
		})
		.addCase(patchFaculty.fulfilled, (state, action) => {
			const index = state.faculties.findIndex(
				f => f.id === action.payload.id
			)
			if (index !== -1) {
				state.faculties[index] = {
					...state.faculties[index],
					...action.payload,
				}
			}
		})
		.addCase(deleteFaculty.fulfilled, (state, action) => {
			state.faculties = state.faculties.filter(
				f => f.id !== action.payload
			)
		})
}

export default extraReducers