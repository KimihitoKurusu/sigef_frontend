import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '@/redux/axios/apiClient'
import { CandidateType } from '@/types/types'

export const fetchCandidates = createAsyncThunk(
 'candidates/fetchCandidates',
 async () => {
    const response = await apiClient.get('/candidates/')
    return response.data
 }
)

export const createCandidate = createAsyncThunk(
 'candidates/createCandidate',
 async (candidate: CandidateType) => {
    const response = await apiClient.post('/candidates/', candidate)
    return response.data
 }
)

export const updateCandidate = createAsyncThunk(
 'candidates/updateCandidate',
 async ({ id, candidate }: { id: number, candidate: CandidateType }) => {
    const response = await apiClient.put(`/candidates/${id}/`, candidate)
    return response.data
 }
)

export const patchCandidate = createAsyncThunk(
 'candidates/patchCandidate',
 async ({ id, candidate }: { id: number, candidate: Partial<CandidateType> }) => {
    const response = await apiClient.patch(`/candidates/${id}/`, candidate)
    return response.data
 }
)

export const deleteCandidate = createAsyncThunk(
 'candidates/deleteCandidate',
 async (id: number) => {
    await apiClient.delete(`/candidates/${id}/`)
    return id
 }
)

const extraReducers = (builder) => {
    builder
      .addCase(fetchCandidates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCandidates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.candidates = action.payload;
      })
      .addCase(fetchCandidates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createCandidate.fulfilled, (state, action) => {
        state.candidates.push(action.payload);
      })
      .addCase(updateCandidate.fulfilled, (state, action) => {
        const index = state.candidates.findIndex((c) => c.person.ci === action.payload.person.ci);
        if (index !== -1) {
          state.candidates[index] = action.payload;
        }
      })
      .addCase(patchCandidate.fulfilled, (state, action) => {
        const index = state.candidates.findIndex((c) => c.person.ci === action.payload.person.ci);
        if (index !== -1) {
          state.candidates[index] = { ...state.candidates[index], ...action.payload };
        }
      })
      .addCase(deleteCandidate.fulfilled, (state, action) => {
        state.candidates = state.candidates.filter((c) => c.person.ci !== action.payload);
      })
 }

 export default extraReducers