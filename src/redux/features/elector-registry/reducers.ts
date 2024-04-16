import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '@/redux/axios/apiClient'
import { ElectorRegistryType } from '@/types/types'

export const fetchElectorRegistries = createAsyncThunk(
	'electorRegistries/fetchElectorRegistries',
	async () => {
		const response = await apiClient.get('/elector-registries/')
		return response.data
	}
)

export const createElectorRegistry = createAsyncThunk(
	'electorRegistries/createElectorRegistry',
	async (electorRegistry: ElectorRegistryType) => {
		const response = await apiClient.post(
			'/elector-registries/',
			electorRegistry
		)
		return response.data
	}
)

export const updateElectorRegistry = createAsyncThunk(
	'electorRegistries/updateElectorRegistry',
	async ({
		id,
		electorRegistry,
	}: {
		id: number
		electorRegistry: ElectorRegistryType
	}) => {
		const response = await apiClient.put(
			`/elector-registries/${id}/`,
			electorRegistry
		)
		return response.data
	}
)

export const patchElectorRegistry = createAsyncThunk(
	'electorRegistries/patchElectorRegistry',
	async ({
		id,
		electorRegistry,
	}: {
		id: number
		electorRegistry: Partial<ElectorRegistryType>
	}) => {
		const response = await apiClient.patch(
			`/elector-registries/${id}/`,
			electorRegistry
		)
		return response.data
	}
)

export const deleteElectorRegistry = createAsyncThunk(
	'electorRegistries/deleteElectorRegistry',
	async (id: number) => {
		await apiClient.delete(`/elector-registries/${id}/`)
		return id
	}
)

const extraReducers = builder => {
	builder
		.addCase(fetchElectorRegistries.pending, state => {
			state.status = 'loading'
		})
		.addCase(fetchElectorRegistries.fulfilled, (state, action) => {
			state.status = 'succeeded'
			state.electorRegistries = action.payload
		})
		.addCase(fetchElectorRegistries.rejected, (state, action) => {
			state.status = 'failed'
			state.error = action.error.message
		})
		.addCase(createElectorRegistry.fulfilled, (state, action) => {
			state.electorRegistries.push(action.payload)
		})
		.addCase(updateElectorRegistry.fulfilled, (state, action) => {
			const index = state.electorRegistries.findIndex(
				er => er.id === action.payload.id
			)
			if (index !== -1) {
				state.electorRegistries[index] = action.payload
			}
		})
		.addCase(patchElectorRegistry.fulfilled, (state, action) => {
			const index = state.electorRegistries.findIndex(
				er => er.id === action.payload.id
			)
			if (index !== -1) {
				state.electorRegistries[index] = {
					...state.electorRegistries[index],
					...action.payload,
				}
			}
		})
		.addCase(deleteElectorRegistry.fulfilled, (state, action) => {
			state.electorRegistries = state.electorRegistries.filter(
				er => er.id !== action.payload
			)
		})
}

export default extraReducers
