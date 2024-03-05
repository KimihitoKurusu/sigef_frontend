import { createSlice } from "@reduxjs/toolkit"
import initialState from "./state"
import extraReducers from "./reducers"

const committeeSlice = createSlice({
    name: 'committees',
    initialState,
    reducers: {},
    extraReducers
   })

   
   export default committeeSlice.reducer

   