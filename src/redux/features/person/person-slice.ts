import { createSlice } from '@reduxjs/toolkit'
import extraReducers from './reducers'
import initialState from './state'

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {},
    extraReducers
   })
   
   export default peopleSlice.reducer
   