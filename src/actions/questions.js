import { saveQuestion, saveQuestionAnswer } from '../utils/api';
export const RECEIVE_QUESTIONS ='RECEIVE_QUESTIONS';
export const ADD_QUESTIONS ='ADD_QUESTIONS';
export const ADD_ANSWER_QUESTIONS ='ADD_ANSWER_QUESTIONS';

export function showQuestions(Questions){
    return {
        type:RECEIVE_QUESTIONS,
        Questions
    };
}

export function addQuestion(question){
    return {
        type:ADD_QUESTIONS,
        question
    };
}


export function addAnswerQuestion({qid,answer,authedUser}){
    return {
        type:ADD_ANSWER_QUESTIONS,
        answerInfo: {
			qid,
			answer,
			authedUser
		}
    };
}


// action creators 

export function handleAddQuestion (optionOne,optionTwo){
    return (dispatch,getState)=>{
        const {authedUser}= getState();
        return saveQuestion({
            author: authedUser,
            optionOneText:optionOne,
            optionTwoText:optionTwo,
        }).then((question)=>{
            dispatch(addQuestion(question));
        })  
    }
}

// export function handleAddAnswerQuestion(questionId ,answer){
//     return (dispatch,getState)=>{
//         const {authedUser} = getState();
//         return saveQuestionAnswer({
//             questionId,
//             authedUser,
//             answer

//         }).then(()=>
//             dispatch(addAnswerQuestion({questionId,answer,authedUser}))
//         )
//     }
// }
export function handleAddAnswerQuestion(qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState();

		

		return saveQuestionAnswer({
			qid,
			answer,
			authedUser
		})
        .then(() =>dispatch(addAnswerQuestion({
                    qid,
                    answer,
                    authedUser
                })
            )
        )
			
	};
}
