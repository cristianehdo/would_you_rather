export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED'

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
