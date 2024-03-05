import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/auth-slice'
import electionReducer from './features/election/election-slice'
import personReducer from './features/person/person-slice'
import facultyReducer from './features/faculty/faculty-slice'
import candidateReducer from './features/candidate/candidate-slice'
import committeeReducer from './features/committee/committee-slice'
import institutionReducer from './features/institution/institution-slice'
import electorRegistryReducer from './features/elector-registry/elector-registry-slice'


const rootReducer = {
	authReducer,
	personReducer,
	facultyReducer,
	electionReducer,
	candidateReducer,
	committeeReducer,
	institutionReducer,
	electorRegistryReducer
}

const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
