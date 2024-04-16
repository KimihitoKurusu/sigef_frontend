import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '@/redux/axios/apiClient'
import { ElectionType } from '@/types/types'

const fetchElections = createAsyncThunk(
	'elections/fetchElections',
	async () => {
		const response = await apiClient.get('/elections/')
		return response.data
	}
)

const createElection = createAsyncThunk(
	'elections/createElection',
	async (election: ElectionType) => {
		const response = await apiClient.post('/elections/', election)
		return response.data
	}
)

const updateElection = createAsyncThunk(
	'elections/updateElection',
	async ({ id, election }: { id: number; election: ElectionType }) => {
		const response = await apiClient.put(`/elections/${id}/`, election)
		return response.data
	}
)

const patchElection = createAsyncThunk(
	'elections/patchElection',
	async ({
		id,
		election,
	}: {
		id: number
		election: Partial<ElectionType>
	}) => {
		const response = await apiClient.patch(`/elections/${id}/`, election)
		return response.data
	}
)

const deleteElection = createAsyncThunk(
	'elections/deleteElection',
	async (id: number) => {
		await apiClient.delete(`/elections/${id}/`)
		return id
	}
)

const extraReducers = builder => {
	builder
		.addCase(fetchElections.pending, state => {
			state.status = 'loading'
		})
		.addCase(fetchElections.fulfilled, (state, action) => {
			state.status = 'succeeded'
			state.elections = action.payload
		})
		.addCase(fetchElections.rejected, (state, action) => {
			state.status = 'failed'
			state.error = action.error.message
		})
		.addCase(createElection.fulfilled, (state, action) => {
			state.elections.push(action.payload)
		})
		.addCase(updateElection.fulfilled, (state, action) => {
			const index = state.elections.findIndex(
				e => e.id === action.payload.id
			)
			if (index !== -1) {
				state.elections[index] = action.payload
			}
		})
		.addCase(patchElection.fulfilled, (state, action) => {
			const index = state.elections.findIndex(
				e => e.id === action.payload.id
			)
			if (index !== -1) {
				state.elections[index] = {
					...state.elections[index],
					...action.payload,
				}
			}
		})
		.addCase(deleteElection.fulfilled, (state, action) => {
			state.elections = state.elections.filter(
				e => e.id !== action.payload
			)
		})
}

export {
	fetchElections,
	createElection,
	updateElection,
	patchElection,
	deleteElection,
}
export default extraReducers
