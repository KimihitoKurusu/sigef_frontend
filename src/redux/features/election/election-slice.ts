import { createSlice } from '@reduxjs/toolkit'
import initialState from './state'
import extraReducers from './reducers'

const electionsSlice = createSlice({
    name: 'elections',
    initialState,
    reducers: {},
    extraReducers
   })
   
export default electionsSlice.reducer
   