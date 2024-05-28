import { CandidateType } from '@/types/types'

const initialState = {
 candidates: [] as CandidateType[],
 status: 'idle',
 error: null,
}

export default initialState