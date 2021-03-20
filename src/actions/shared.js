import { getInitialData } from '../utils/api'
import { receiveUsers, userAnsweredQuestion } from './users'
import { receiveQuestions, questionAnswered } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestionAnswer } from '../utils/api'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
      })
  }
}

export function handleAnswerQuestion ({qid, authedUser, answer}) {
  return (dispatch, getState) => {
    dispatch(showLoading())

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(() => {
        dispatch(questionAnswered({authedUser, qid, answer}))
        dispatch(userAnsweredQuestion({authedUser, qid, answer}))
      })
      .then(() => dispatch(hideLoading()))
  }
}
