import { configureStore } from '@reduxjs/toolkit'
import auth from './features/auth/auth-slice'
import election from './features/election/election-slice'
import campus from './features/campus/campus-slice'
import person from './features/person/person-slice'
import faculty from './features/faculty/faculty-slice'
import candidate from './features/candidate/candidate-slice'
import committee from './features/committee/committee-slice'
import institution from './features/institution/institution-slice'
import electorRegistry from './features/elector-registry/elector-registry-slice'


const rootReducer = {
	auth,
	campus,
	person,
	faculty,
	election,
	candidate,
	committee,
	institution,
	electorRegistry
}

const store = configureStore({
	reducer: rootReducer,
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch }

export default store
