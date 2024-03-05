import { CommitteeType } from '@/types/types'

const initialState = {
 committees: [] as CommitteeType[],
 status: 'idle',
 error: null,
}

export default initialState