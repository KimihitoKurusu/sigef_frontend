import { CampusType } from '@/types/types'

const initialState = {
	campuses: [] as CampusType[],
	status: 'idle',
	error: null,
}

export default initialState
