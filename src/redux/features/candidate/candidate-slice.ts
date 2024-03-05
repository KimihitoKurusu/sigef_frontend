import { createSlice } from "@reduxjs/toolkit"
import extraReducers from "./reducers"
import initialState from "./state"

const candidatesSlice = createSlice({
    name: 'candidates',
    initialState,
    reducers: {},
    extraReducers
   })
   
   export default candidatesSlice.reducer
   