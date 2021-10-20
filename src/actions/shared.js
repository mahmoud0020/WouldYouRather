
import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import {showQuestions } from './questions';
export function handleInitialData() {
	return (dispatch) => {
		return getInitialData().then(({ users,questions}) => {
			dispatch(receiveUsers(users));
			dispatch(showQuestions(questions))
		});
	};
}
