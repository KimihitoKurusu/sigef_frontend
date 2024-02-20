import { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './state'
import { UserType } from '../../../types/types'

const logOut = () => initialState
const logIn = (_: any, action: PayloadAction<UserType>) => {
	return {
		token: action.payload.token,
		refresh: action.payload.refresh,
		user_id: action.payload.user_id,
		username: action.payload.username,
	}
}

const reducers = { logIn, logOut }

export { logIn, logOut }
export default reducers
