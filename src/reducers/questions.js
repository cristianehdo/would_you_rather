import { RECEIVE_QUESTIONS, QUESTION_ANSWERED, ADD_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
  case RECEIVE_QUESTIONS:
    return {
      ...state,
      ...action.questions
    }
  case QUESTION_ANSWERED: {
    const { authedUser, qid, answer } = action
    return {
      ...state,
      [qid]: {
        ...state[qid],
        [answer]: {
          ...state[qid][answer],
          votes: state[qid][answer].votes.concat([authedUser])
        }
      }
    }
  }
  case ADD_QUESTION :
    return {
      ...state,
      [action.question.id]: {
        ...action.question
      }
    }
  default:
    return state
  }
}
