import { ElectionType } from '@/types/types';

interface ElectionStateType {
	elections: ElectionType[]
	status: 'loading' | 'succeeded' | 'failed' | 'idle'
	error: string | null
}

const initialState: ElectionStateType = {
 elections: [] as ElectionType[],
 status: 'idle',
 error: null,
};

export default initialState