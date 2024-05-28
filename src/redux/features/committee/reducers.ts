import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiClient from '@/redux/axios/apiClient'
import { CommitteeType } from '@/types/types'

export const fetchCommittees = createAsyncThunk(
 'committees/fetchCommittees',
 async () => {
    const response = await apiClient.get('/users/')
    return response.data
 }
)

export const createCommittee = createAsyncThunk(
 'committees/createCommittee',
 async (committee: CommitteeType) => {
    const response = await apiClient.post('/users/', committee)
    return response.data
 }
)

export const updateCommittee = createAsyncThunk(
 'committees/updateCommittee',
 async ({ id, committee }: { id: number, committee: CommitteeType }) => {
    const response = await apiClient.put(`/users/${id}/`, committee)
    return response.data
 }
)

export const patchCommittee = createAsyncThunk(
 'committees/patchCommittee',
 async ({ id, committee }: { id: number, committee: Partial<CommitteeType> }) => {
    const response = await apiClient.patch(`/users/${id}/`, committee)
    return response.data
 }
)

export const deleteCommittee = createAsyncThunk(
 'committees/deleteCommittee',
 async (id: number) => {
    await apiClient.delete(`/users/${id}/`)
    return id
 }
)

const extraReducers = (builder) => {
    builder
      .addCase(fetchCommittees.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCommittees.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.committees = action.payload
      })
      .addCase(fetchCommittees.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(createCommittee.fulfilled, (state, action) => {
        state.committees.push(action.payload)
      })
      .addCase(updateCommittee.fulfilled, (state, action) => {
        const index = state.committees.findIndex((c) => c.person.ci === action.payload.person.ci)
        if (index !== -1) {
          state.committees[index] = action.payload
        }
      })
      .addCase(patchCommittee.fulfilled, (state, action) => {
        const index = state.committees.findIndex((c) => c.person.ci === action.payload.person.ci)
        if (index !== -1) {
          state.committees[index] = { ...state.committees[index], ...action.payload }
        }
      })
      .addCase(deleteCommittee.fulfilled, (state, action) => {
        state.committees = state.committees.filter((c) => c.person.ci !== action.payload)
      })
 }

 export default extraReducers