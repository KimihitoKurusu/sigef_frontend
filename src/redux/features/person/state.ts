import { PersonType } from '@/types/types'

const initialState = {
 people: [] as PersonType[],
 status: 'idle',
 error: null,
}

export default initialState