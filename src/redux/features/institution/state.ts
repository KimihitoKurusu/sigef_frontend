import { InstitutionType } from '@/types/types'

const initialState = {
 institutions: [] as InstitutionType[],
 status: 'idle',
 error: null,
};

export default initialState