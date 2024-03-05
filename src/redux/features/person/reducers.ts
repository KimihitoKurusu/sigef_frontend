import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '@/redux/axios/apiClient'
import { PersonType } from '@/types/types'

export const fetchPeople = createAsyncThunk('people/fetchPeople', async () => {
	const response = await apiClient.get('/people/')
	return response.data
})

export const createPerson = createAsyncThunk(
	'people/createPerson',
	async (person: PersonType) => {
		const response = await apiClient.post('/people/', person)
		return response.data
	}
)

export const updatePerson = createAsyncThunk(
	'people/updatePerson',
	async ({ id, person }: { id: string, person: PersonType }) => {
		const response = await apiClient.put(`/people/${id}/`, person)
		return response.data
	}
)

export const patchPerson = createAsyncThunk(
	'people/patchPerson',
	async ({ id, person }: { id: string, person: Partial<PersonType> }) => {
		const response = await apiClient.patch(`/people/${id}/`, person)
		return response.data
	}
)

export const deletePerson = createAsyncThunk(
	'people/deletePerson',
	async (id: string) => {
		await apiClient.delete(`/people/${id}/`)
		return id
	}
)

const extraReducers = builder => {
	builder
		.addCase(fetchPeople.pending, state => {
			state.status = 'loading'
		})
		.addCase(fetchPeople.fulfilled, (state, action) => {
			state.status = 'succeeded'
			state.people = action.payload
		})
		.addCase(fetchPeople.rejected, (state, action) => {
			state.status = 'failed'
			state.error = action.error.message
		})
		.addCase(createPerson.fulfilled, (state, action) => {
			state.people.push(action.payload)
		})
		.addCase(updatePerson.fulfilled, (state, action) => {
			const index = state.people.findIndex(
				p => p.ci === action.payload.ci
			)
			if (index !== -1) {
				state.people[index] = action.payload
			}
		})
		.addCase(patchPerson.fulfilled, (state, action) => {
			const index = state.people.findIndex(
				p => p.ci === action.payload.ci
			)
			if (index !== -1) {
				state.people[index] = {
					...state.people[index],
					...action.payload,
				}
			}
		})
		.addCase(deletePerson.fulfilled, (state, action) => {
			state.people = state.people.filter(p => p.ci !== action.payload)
		})
}

export default extraReducers
