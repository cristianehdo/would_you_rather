import { saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function questionAnswered({qid, authedUser, answer}) {
  return {
    type: QUESTION_ANSWERED,
    qid,
    authedUser,
    answer
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }

}
export function handleAddQuestion (question) {
  return (dispatch) => {
    dispatch(showLoading())

    return saveQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

