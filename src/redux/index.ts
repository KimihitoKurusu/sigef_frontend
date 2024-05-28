import store from './store'
import type { AppDispatch, RootState } from './store'
import CustomProvider from './provider'

import {
	selectAllInstitutions,
	selectInstitutionById,
	selectInstitutionsStatus,
	selectInstitutionsError,
} from './features/institution/selectors'

import {
	fetchInstitutions,
	createInstitution,
	deleteInstitution,
	patchInstitution,
	updateInstitution,
} from './features/institution/reducers'

import {
	selectAllFaculties,
	selectFacultyById,
	selectFacultiesStatus,
	selectFacultiesError,
} from './features/faculty/selectors'

import {
	fetchFaculties,
	createFaculty,
	updateFaculty,
	patchFaculty,
	deleteFaculty,
} from './features/faculty/reducers'

import {
	selectAllCampuses,
	selectCampusById,
	selectCampusesStatus,
	selectCampusesError,
} from './features/campus/selctors'

import {
	fetchCampuses,
	createCampus,
	updateCampus,
	patchCampus,
	deleteCampus,
} from './features/campus/reducers'

export {
	store,
	fetchInstitutions,
	createInstitution,
	deleteInstitution,
	patchInstitution,
	updateInstitution,
	fetchFaculties,
	createFaculty,
	updateFaculty,
	patchFaculty,
	deleteFaculty,
	fetchCampuses,
	createCampus,
	updateCampus,
	patchCampus,
	deleteCampus,
	CustomProvider,
	selectAllInstitutions,
	selectInstitutionById,
	selectInstitutionsError,
	selectInstitutionsStatus,
	selectAllFaculties,
	selectFacultyById,
	selectFacultiesStatus,
	selectFacultiesError,
	selectAllCampuses,
	selectCampusById,
	selectCampusesStatus,
	selectCampusesError,
}

export type { AppDispatch, RootState }
