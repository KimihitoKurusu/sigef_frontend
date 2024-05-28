import { FacultyType } from '@/types/types'

interface FacultyStateType {
	faculties: FacultyType[]
	status: 'loading' | 'succeeded' | 'failed' | 'idle'
	error: string | null
}

const initialState: FacultyStateType = {
	faculties: [] as FacultyType[],
	status: 'idle',
	error: null,
}

export default initialState
