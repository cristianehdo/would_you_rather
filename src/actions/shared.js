import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

const formatedQuestions = (questions) => {
  const formatedQuestions = {}
  Object.keys(questions).forEach((questionId) => {
    const question = questions[questionId]
      formatedQuestions[questionId] = {
        ...question,
        answered: (question.optionOne.votes).concat(question.optionTwo.votes)
      }
  })
  return formatedQuestions
}

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveQuestions(formatedQuestions(questions)))
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
      })
  }
}
