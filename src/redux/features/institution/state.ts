import type { InstitutionType } from '@/types/types'

export interface InstitutionStateType {
	institutions: InstitutionType[]
	status: 'loading' | 'succeeded' | 'failed' | 'idle'
	error: string | null
}

const initialState: InstitutionStateType = {
	institutions: [] as InstitutionType[],
	status: 'idle',
	error: null,
}

export default initialState
