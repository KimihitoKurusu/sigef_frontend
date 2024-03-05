import { ElectorRegistryType } from '@/types/types';

const initialState = {
 electorRegistries: [] as ElectorRegistryType[],
 status: 'idle',
 error: null,
};

export default initialState