import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/auth-slice'
// ... other reducers

const rootReducer = {
	authReducer,
	// ... other slices
}

const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
