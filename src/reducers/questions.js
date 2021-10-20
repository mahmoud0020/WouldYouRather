import {ADD_ANSWER_QUESTIONS,ADD_QUESTIONS,RECEIVE_QUESTIONS} from '../actions/questions'

export default function question(state={}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.Questions
            }
        case ADD_QUESTIONS:
            return {
                ...state,
                [action.question.id]:action.question
            }
        case ADD_ANSWER_QUESTIONS:
            const { qid, answer, authedUser } = action.answerInfo;

			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser])
					}
				}
			};
           
        default:
            return state;
    }
}