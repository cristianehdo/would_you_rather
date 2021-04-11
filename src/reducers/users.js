import { RECEIVE_USERS, USER_ANSWERED_QUESTION, USER_ADDED_QUESTION } from '../actions/users'

export default function users (state = null, action) {
  switch(action.type) {
  case RECEIVE_USERS:
    return {
      ...state,
      ...action.users
    }
  case USER_ANSWERED_QUESTION: {
    const { authedUser, qid, answer } = action
    return {
      ...state,
      [authedUser]: {
        ...state[authedUser],
        answers: {
          ...state[authedUser].answers,
          [qid]: answer
        }
      }
    }
  }
  case USER_ADDED_QUESTION: {
    const { authedUser, qid } = action
    return {
      ...state,
      [authedUser]: {
        ...state[authedUser],
        questions: [
          ...state[authedUser].questions.concat([qid]),
        ]
      }
    }
  }
  default:
    return state
  }
}
