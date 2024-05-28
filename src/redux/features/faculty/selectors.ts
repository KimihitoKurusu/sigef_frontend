import { RootState } from '@/redux'
import { createSelector } from 'reselect'



export const selectAllFaculties = (state: RootState) => {
	return state.faculty.faculties
}

export const selectFacultyById = (state: RootState, id: number) => {
	return state.faculty.faculties.find(
		faculty => faculty.id === id
	)
}

export const selectFacultiesStatus = (state: RootState) => {
	return state.faculty.status
}


export const selectFacultiesError = (state: RootState) => {
	return state.faculty.error
}

