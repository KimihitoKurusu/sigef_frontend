import { RootState } from '@/redux/'

export const selectAllCampuses = (state: RootState) => {
	return state.campus.campuses
}

export const selectCampusById = (state: RootState, id: number) => {
	return state.campus.campuses.find(
		campus => campus.id === id
	)
}
export const selectCampusesStatus = (state: RootState) => {
	return state.campus.status
}

export const selectCampusesError = (state: RootState) => {
	return state.campus.error
}
