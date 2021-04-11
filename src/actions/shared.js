import { getInitialData } from '../utils/api'
import { receiveUsers, userAnsweredQuestion, userAddedQuestion } from './users'
import { receiveQuestions, questionAnswered, addQuestion } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestionAnswer, saveQuestion } from '../utils/api'

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
  return (dispatch) => {
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

export function handleAddQuestion (newQuestion) {
  return (dispatch) => {
    dispatch(showLoading())

    return saveQuestion(newQuestion)
      .then((question) => {
        console.log(question.id, 'handleADd')
        dispatch(addQuestion(question))
        dispatch(userAddedQuestion(question))
      })
      .then(() => dispatch(hideLoading()))
  }
}
