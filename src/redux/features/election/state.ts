import { ElectionType } from '@/types/types';

const initialState = {
 elections: [] as ElectionType[],
 status: 'idle',
 error: null,
};

export default initialState