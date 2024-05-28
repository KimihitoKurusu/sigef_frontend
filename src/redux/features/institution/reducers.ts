import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '@/redux/axios/apiClient'
import { InstitutionType } from '@/types/types'

const fetchInstitutions = createAsyncThunk(
	'institutions/fetchInstitutions',
	async () => {
		const response = await apiClient.get('elections/institutions/')
		return response.data
	}
)

const createInstitution = createAsyncThunk(
	'institutions/createInstitution',
	async (institution: InstitutionType) => {
		const response = await apiClient.post('elections/institutions/', institution)
		return response.data
	}
)

const updateInstitution = createAsyncThunk(
	'institutions/updateInstitution',
	async ({
		id,
		institution,
	}: {
		id: number
		institution: InstitutionType
	}) => {
		const response = await apiClient.put(
			`elections/institutions/${id}/`,
			institution
		)
		return response.data
	}
)

const patchInstitution = createAsyncThunk(
	'institutions/patchInstitution',
	async ({
		id,
		institution,
	}: {
		id: number
		institution: Partial<InstitutionType>
	}) => {
		const response = await apiClient.patch(
			`elections/institutions/${id}/`,
			institution
		)
		return response.data
	}
)

const deleteInstitution = createAsyncThunk(
	'institutions/deleteInstitution',
	async (id: number) => {
		await apiClient.delete(`elections/institutions/${id}/`)
		return id
	}
)

const extraReducers = builder => {
	builder
		.addCase(fetchInstitutions.pending, state => {
			state.status = 'loading'
		})
		.addCase(fetchInstitutions.fulfilled, (state, action) => {
			state.status = 'succeeded'
			state.institutions = action.payload
		})
		.addCase(fetchInstitutions.rejected, (state, action) => {
			state.status = 'failed'
			state.error = action.error.message
		})
		.addCase(createInstitution.fulfilled, (state, action) => {
			state.institutions.push(action.payload)
		})
		.addCase(updateInstitution.fulfilled, (state, action) => {
			const index = state.institutions.findIndex(
				i => i.id === action.payload.id
			)
			if (index !== -1) {
				state.institutions[index] = action.payload
			}
		})
		.addCase(patchInstitution.fulfilled, (state, action) => {
			const index = state.institutions.findIndex(
				i => i.id === action.payload.id
			)
			if (index !== -1) {
				state.institutions[index] = {
					...state.institutions[index],
					...action.payload,
				}
			}
		})
		.addCase(deleteInstitution.fulfilled, (state, action) => {
			state.institutions = state.institutions.filter(
				i => i.id !== action.payload
			)
		})
}

export {
	fetchInstitutions,
	createInstitution,
	updateInstitution,
	patchInstitution,
	deleteInstitution,
}

export default extraReducers
