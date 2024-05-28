import { RootState } from '@/redux/'

export const selectAllInstitutions = (state: RootState) => {
	return state.institution.institutions
}

export const selectInstitutionById = (state: RootState, id: number) => {
	return state.institution.institutions.find(
		institution => institution.id === id
	)
}
export const selectInstitutionsStatus = (state: RootState) => {
	return state.institution.status
}

export const selectInstitutionsError = (state: RootState) => {
	return state.institution.error
}
